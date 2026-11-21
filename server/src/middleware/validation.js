import { z } from 'zod';

export const validateBody = (schema) => (req, res, next) => {
  try {
    req.body = schema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: 'Validation Error',
        errors: error.errors.map((e) => ({
          field: e.path.join('.'),
          message: e.message,
        })),
      });
    }
    next(error);
  }
};

// Common Schemas
export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(80),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().max(25).optional().or(z.literal('')),
  subject: z.string().min(2, 'Subject must be at least 2 characters').max(150).optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(3000),
});

export const newsletterSchema = z.object({
  email: z.string().email('Please provide a valid email address'),
});

export const projectSchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(3).optional(),
  category: z.string().min(2),
  client: z.string().min(2),
  summary: z.string().min(10),
  description: z.string().min(20),
  image: z.string().url('Image must be a valid URL'),
  liveUrl: z.string().url().optional().or(z.literal('')),
  githubUrl: z.string().url().optional().or(z.literal('')),
  technologies: z.array(z.string()).min(1),
  featured: z.boolean().optional(),
  completionDate: z.string().optional(),
});

export const blogSchema = z.object({
  title: z.string().min(5),
  slug: z.string().min(3).optional(),
  excerpt: z.string().min(10),
  content: z.string().min(30),
  coverImage: z.string().url(),
  authorName: z.string().min(2),
  authorRole: z.string().min(2),
  authorAvatar: z.string().url(),
  category: z.string().min(2),
  tags: z.array(z.string()),
  readTime: z.string().default('5 min read'),
  published: z.boolean().default(true),
});
