import { PrismaClient } from '@prisma/client';
import { getInitialSeedData } from '../src/config/seedData.js';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting Prisma database seeding for Jishnu Infotech...');
  const seed = getInitialSeedData();

  // 1. Seed Users
  for (const user of seed.users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: {
        id: user.id,
        email: user.email,
        passwordHash: user.passwordHash,
        name: user.name,
        role: user.role,
      },
    });
  }
  console.log(`✅ Seeded ${seed.users.length} admin user(s).`);

  // 2. Seed Services
  for (const s of seed.services) {
    await prisma.service.upsert({
      where: { slug: s.slug },
      update: {},
      create: {
        id: s.id,
        title: s.title,
        slug: s.slug,
        shortDesc: s.shortDesc,
        fullDesc: s.fullDesc,
        icon: s.icon,
        category: s.category,
        features: s.features,
        order: s.order,
        isActive: s.isActive,
      },
    });
  }
  console.log(`✅ Seeded ${seed.services.length} services.`);

  // 3. Seed Projects
  for (const p of seed.projects) {
    await prisma.project.upsert({
      where: { slug: p.slug },
      update: {},
      create: {
        id: p.id,
        title: p.title,
        slug: p.slug,
        category: p.category,
        client: p.client,
        summary: p.summary,
        description: p.description,
        image: p.image,
        liveUrl: p.liveUrl,
        githubUrl: p.githubUrl,
        technologies: p.technologies,
        featured: p.featured,
        completionDate: p.completionDate,
      },
    });
  }
  console.log(`✅ Seeded ${seed.projects.length} portfolio projects.`);

  // 4. Seed Team Members
  for (const t of seed.teamMembers) {
    await prisma.teamMember.upsert({
      where: { id: t.id },
      update: {},
      create: {
        id: t.id,
        name: t.name,
        role: t.role,
        department: t.department,
        bio: t.bio,
        image: t.image,
        linkedin: t.linkedin,
        twitter: t.twitter,
        github: t.github,
        email: t.email,
        order: t.order,
      },
    });
  }
  console.log(`✅ Seeded ${seed.teamMembers.length} team members.`);

  // 5. Seed Testimonials
  for (const test of seed.testimonials) {
    await prisma.testimonial.upsert({
      where: { id: test.id },
      update: {},
      create: {
        id: test.id,
        clientName: test.clientName,
        clientRole: test.clientRole,
        company: test.company,
        content: test.content,
        rating: test.rating,
        avatar: test.avatar,
        featured: test.featured,
      },
    });
  }
  console.log(`✅ Seeded ${seed.testimonials.length} testimonials.`);

  // 6. Seed Pricing Plans
  for (const plan of seed.pricingPlans) {
    await prisma.pricingPlan.upsert({
      where: { id: plan.id },
      update: {},
      create: {
        id: plan.id,
        name: plan.name,
        tagline: plan.tagline,
        priceMonthly: plan.priceMonthly,
        priceAnnual: plan.priceAnnual,
        popular: plan.popular,
        features: plan.features,
        ctaText: plan.ctaText,
        ctaLink: plan.ctaLink,
        order: plan.order,
      },
    });
  }
  console.log(`✅ Seeded ${seed.pricingPlans.length} pricing plans.`);

  // 7. Seed Blog Posts
  for (const b of seed.blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: b.slug },
      update: {},
      create: {
        id: b.id,
        title: b.title,
        slug: b.slug,
        excerpt: b.excerpt,
        content: b.content,
        coverImage: b.coverImage,
        authorName: b.authorName,
        authorRole: b.authorRole,
        authorAvatar: b.authorAvatar,
        category: b.category,
        tags: b.tags,
        readTime: b.readTime,
        published: b.published,
        publishedAt: b.publishedAt,
      },
    });
  }
  console.log(`✅ Seeded ${seed.blogPosts.length} blog posts.`);

  console.log('🌟 Prisma database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Prisma Seeding Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
