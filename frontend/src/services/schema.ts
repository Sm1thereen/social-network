import zod from 'zod';

export const createPostSchema = zod.object({
  postText: zod.string().min(10).max(500),
});

export const createCommentSchema = zod.object({
  content: zod.string().min(10).max(500),
});