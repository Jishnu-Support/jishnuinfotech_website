import { PrismaClient } from '@prisma/client';
import { getInitialSeedData } from './seedData.js';
import { ENV } from './env.js';

let prismaInstance = null;
let isPrismaConnected = false;

// In-memory fallback repository for zero-downtime development
const memoryStore = getInitialSeedData();

// Helper to generate UUIDs
const generateId = (prefix = 'id') => `${prefix}_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

try {
  prismaInstance = new PrismaClient({
    datasources: {
      db: {
        url: ENV.DATABASE_URL,
      },
    },
    log: ENV.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
  });

  // Verify connection asynchronously
  prismaInstance.$connect()
    .then(() => {
      isPrismaConnected = true;
      console.log('✅ PostgreSQL connected successfully via Prisma ORM.');
    })
    .catch((err) => {
      isPrismaConnected = false;
      console.log('⚠️ PostgreSQL connection not active or unreachable. Falling back to active in-memory store for seamless local execution.');
      console.log('   (To use PostgreSQL, verify DATABASE_URL in server/.env and run: npx prisma db push)');
    });
} catch (err) {
  isPrismaConnected = false;
  console.log('⚠️ Prisma initialization bypassed; using persistent memory store.');
}

// Unified Database Adapter Layer
export const db = {
  get isConnectedToPostgres() {
    return isPrismaConnected;
  },
  prisma: prismaInstance,

  users: {
    findUnique: async ({ where }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.user.findUnique({ where });
      }
      if (where.email) {
        return memoryStore.users.find((u) => u.email.toLowerCase() === where.email.toLowerCase()) || null;
      }
      if (where.id) {
        return memoryStore.users.find((u) => u.id === where.id) || null;
      }
      return null;
    },
    create: async ({ data }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.user.create({ data });
      }
      const newUser = { id: generateId('usr'), ...data, createdAt: new Date(), updatedAt: new Date() };
      memoryStore.users.push(newUser);
      return newUser;
    },
  },

  services: {
    findMany: async (args = {}) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.service.findMany({ orderBy: { order: 'asc' }, ...args });
      }
      let list = [...memoryStore.services];
      if (args.where?.isActive !== undefined) {
        list = list.filter((s) => s.isActive === args.where.isActive);
      }
      return list.sort((a, b) => a.order - b.order);
    },
    findUnique: async ({ where }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.service.findUnique({ where });
      }
      return memoryStore.services.find((s) => s.id === where.id || s.slug === where.slug) || null;
    },
    create: async ({ data }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.service.create({ data });
      }
      const item = { id: generateId('srv'), ...data, createdAt: new Date(), updatedAt: new Date() };
      memoryStore.services.push(item);
      return item;
    },
    update: async ({ where, data }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.service.update({ where, data });
      }
      const idx = memoryStore.services.findIndex((s) => s.id === where.id);
      if (idx === -1) throw new Error('Service not found');
      memoryStore.services[idx] = { ...memoryStore.services[idx], ...data, updatedAt: new Date() };
      return memoryStore.services[idx];
    },
    delete: async ({ where }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.service.delete({ where });
      }
      const idx = memoryStore.services.findIndex((s) => s.id === where.id);
      if (idx === -1) throw new Error('Service not found');
      const removed = memoryStore.services.splice(idx, 1);
      return removed[0];
    },
  },

  projects: {
    findMany: async (args = {}) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.project.findMany({ orderBy: { createdAt: 'desc' }, ...args });
      }
      let list = [...memoryStore.projects];
      if (args.where?.category && args.where.category !== 'All') {
        list = list.filter((p) => p.category.toLowerCase() === args.where.category.toLowerCase());
      }
      return list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    },
    findUnique: async ({ where }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.project.findUnique({ where });
      }
      return memoryStore.projects.find((p) => p.id === where.id || p.slug === where.slug) || null;
    },
    create: async ({ data }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.project.create({ data });
      }
      const item = { id: generateId('proj'), ...data, createdAt: new Date(), updatedAt: new Date() };
      memoryStore.projects.push(item);
      return item;
    },
    update: async ({ where, data }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.project.update({ where, data });
      }
      const idx = memoryStore.projects.findIndex((p) => p.id === where.id);
      if (idx === -1) throw new Error('Project not found');
      memoryStore.projects[idx] = { ...memoryStore.projects[idx], ...data, updatedAt: new Date() };
      return memoryStore.projects[idx];
    },
    delete: async ({ where }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.project.delete({ where });
      }
      const idx = memoryStore.projects.findIndex((p) => p.id === where.id);
      if (idx === -1) throw new Error('Project not found');
      const removed = memoryStore.projects.splice(idx, 1);
      return removed[0];
    },
  },

  teamMembers: {
    findMany: async (args = {}) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.teamMember.findMany({ orderBy: { order: 'asc' }, ...args });
      }
      return [...memoryStore.teamMembers].sort((a, b) => a.order - b.order);
    },
    findUnique: async ({ where }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.teamMember.findUnique({ where });
      }
      return memoryStore.teamMembers.find((t) => t.id === where.id) || null;
    },
    create: async ({ data }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.teamMember.create({ data });
      }
      const item = { id: generateId('team'), ...data, createdAt: new Date(), updatedAt: new Date() };
      memoryStore.teamMembers.push(item);
      return item;
    },
    update: async ({ where, data }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.teamMember.update({ where, data });
      }
      const idx = memoryStore.teamMembers.findIndex((t) => t.id === where.id);
      if (idx === -1) throw new Error('Team member not found');
      memoryStore.teamMembers[idx] = { ...memoryStore.teamMembers[idx], ...data, updatedAt: new Date() };
      return memoryStore.teamMembers[idx];
    },
    delete: async ({ where }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.teamMember.delete({ where });
      }
      const idx = memoryStore.teamMembers.findIndex((t) => t.id === where.id);
      if (idx === -1) throw new Error('Team member not found');
      const removed = memoryStore.teamMembers.splice(idx, 1);
      return removed[0];
    },
  },

  testimonials: {
    findMany: async (args = {}) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.testimonial.findMany({ orderBy: { createdAt: 'desc' }, ...args });
      }
      return [...memoryStore.testimonials].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    },
    findUnique: async ({ where }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.testimonial.findUnique({ where });
      }
      return memoryStore.testimonials.find((t) => t.id === where.id) || null;
    },
    create: async ({ data }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.testimonial.create({ data });
      }
      const item = { id: generateId('test'), ...data, createdAt: new Date(), updatedAt: new Date() };
      memoryStore.testimonials.push(item);
      return item;
    },
    update: async ({ where, data }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.testimonial.update({ where, data });
      }
      const idx = memoryStore.testimonials.findIndex((t) => t.id === where.id);
      if (idx === -1) throw new Error('Testimonial not found');
      memoryStore.testimonials[idx] = { ...memoryStore.testimonials[idx], ...data, updatedAt: new Date() };
      return memoryStore.testimonials[idx];
    },
    delete: async ({ where }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.testimonial.delete({ where });
      }
      const idx = memoryStore.testimonials.findIndex((t) => t.id === where.id);
      if (idx === -1) throw new Error('Testimonial not found');
      const removed = memoryStore.testimonials.splice(idx, 1);
      return removed[0];
    },
  },

  pricingPlans: {
    findMany: async (args = {}) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.pricingPlan.findMany({ orderBy: { order: 'asc' }, ...args });
      }
      return [...memoryStore.pricingPlans].sort((a, b) => a.order - b.order);
    },
    findUnique: async ({ where }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.pricingPlan.findUnique({ where });
      }
      return memoryStore.pricingPlans.find((p) => p.id === where.id) || null;
    },
    create: async ({ data }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.pricingPlan.create({ data });
      }
      const item = { id: generateId('plan'), ...data, createdAt: new Date(), updatedAt: new Date() };
      memoryStore.pricingPlans.push(item);
      return item;
    },
    update: async ({ where, data }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.pricingPlan.update({ where, data });
      }
      const idx = memoryStore.pricingPlans.findIndex((p) => p.id === where.id);
      if (idx === -1) throw new Error('Pricing plan not found');
      memoryStore.pricingPlans[idx] = { ...memoryStore.pricingPlans[idx], ...data, updatedAt: new Date() };
      return memoryStore.pricingPlans[idx];
    },
    delete: async ({ where }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.pricingPlan.delete({ where });
      }
      const idx = memoryStore.pricingPlans.findIndex((p) => p.id === where.id);
      if (idx === -1) throw new Error('Pricing plan not found');
      const removed = memoryStore.pricingPlans.splice(idx, 1);
      return removed[0];
    },
  },

  blogPosts: {
    findMany: async (args = {}) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.blogPost.findMany({ orderBy: { publishedAt: 'desc' }, ...args });
      }
      let list = [...memoryStore.blogPosts];
      if (args.where?.published !== undefined) {
        list = list.filter((b) => b.published === args.where.published);
      }
      if (args.where?.category) {
        list = list.filter((b) => b.category.toLowerCase() === args.where.category.toLowerCase());
      }
      return list.sort((a, b) => new Date(b.publishedAt || b.createdAt) - new Date(a.publishedAt || a.createdAt));
    },
    findUnique: async ({ where }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.blogPost.findUnique({ where });
      }
      return memoryStore.blogPosts.find((b) => b.id === where.id || b.slug === where.slug) || null;
    },
    create: async ({ data }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.blogPost.create({ data });
      }
      const item = { id: generateId('post'), ...data, createdAt: new Date(), updatedAt: new Date(), publishedAt: data.published ? new Date() : null };
      memoryStore.blogPosts.push(item);
      return item;
    },
    update: async ({ where, data }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.blogPost.update({ where, data });
      }
      const idx = memoryStore.blogPosts.findIndex((b) => b.id === where.id);
      if (idx === -1) throw new Error('Blog post not found');
      memoryStore.blogPosts[idx] = { ...memoryStore.blogPosts[idx], ...data, updatedAt: new Date() };
      return memoryStore.blogPosts[idx];
    },
    delete: async ({ where }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.blogPost.delete({ where });
      }
      const idx = memoryStore.blogPosts.findIndex((b) => b.id === where.id);
      if (idx === -1) throw new Error('Blog post not found');
      const removed = memoryStore.blogPosts.splice(idx, 1);
      return removed[0];
    },
  },

  contacts: {
    findMany: async (args = {}) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.contact.findMany({ orderBy: { createdAt: 'desc' }, ...args });
      }
      return [...memoryStore.contacts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    },
    findUnique: async ({ where }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.contact.findUnique({ where });
      }
      return memoryStore.contacts.find((c) => c.id === where.id) || null;
    },
    create: async ({ data }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.contact.create({ data });
      }
      const item = { id: generateId('cnt'), ...data, status: 'unread', createdAt: new Date(), updatedAt: new Date() };
      memoryStore.contacts.unshift(item);
      return item;
    },
    update: async ({ where, data }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.contact.update({ where, data });
      }
      const idx = memoryStore.contacts.findIndex((c) => c.id === where.id);
      if (idx === -1) throw new Error('Contact not found');
      memoryStore.contacts[idx] = { ...memoryStore.contacts[idx], ...data, updatedAt: new Date() };
      return memoryStore.contacts[idx];
    },
    delete: async ({ where }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.contact.delete({ where });
      }
      const idx = memoryStore.contacts.findIndex((c) => c.id === where.id);
      if (idx === -1) throw new Error('Contact not found');
      const removed = memoryStore.contacts.splice(idx, 1);
      return removed[0];
    },
  },

  newsletterSubscribers: {
    findMany: async (args = {}) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.newsletterSubscriber.findMany({ orderBy: { subscribedAt: 'desc' }, ...args });
      }
      return [...memoryStore.newsletterSubscribers].sort((a, b) => new Date(b.subscribedAt) - new Date(a.subscribedAt));
    },
    findUnique: async ({ where }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.newsletterSubscriber.findUnique({ where });
      }
      return memoryStore.newsletterSubscribers.find((s) => s.email.toLowerCase() === where.email?.toLowerCase()) || null;
    },
    create: async ({ data }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.newsletterSubscriber.create({ data });
      }
      const item = { id: generateId('sub'), ...data, isActive: true, subscribedAt: new Date() };
      memoryStore.newsletterSubscribers.unshift(item);
      return item;
    },
    delete: async ({ where }) => {
      if (isPrismaConnected && prismaInstance) {
        return prismaInstance.newsletterSubscriber.delete({ where });
      }
      const idx = memoryStore.newsletterSubscribers.findIndex((s) => s.id === where.id || s.email === where.email);
      if (idx === -1) throw new Error('Subscriber not found');
      const removed = memoryStore.newsletterSubscribers.splice(idx, 1);
      return removed[0];
    },
  },

  stats: {
    getOverview: async () => {
      return {
        servicesCount: (await db.services.findMany()).length,
        projectsCount: (await db.projects.findMany()).length,
        teamCount: (await db.teamMembers.findMany()).length,
        testimonialsCount: (await db.testimonials.findMany()).length,
        postsCount: (await db.blogPosts.findMany()).length,
        contactsCount: (await db.contacts.findMany()).length,
        subscribersCount: (await db.newsletterSubscribers.findMany()).length,
        unreadContactsCount: (await db.contacts.findMany()).filter((c) => c.status === 'unread').length,
      };
    },
  },
};
