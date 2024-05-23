import zod from 'zod';

export const RegistrationSchema = zod.object({
  first_name: zod.string().min(3).max(25),
  last_name: zod.string().min(3).max(25),
  email: zod.string().email(),
  password: zod.string().min(6).max(48),
});

export const LoginSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6).max(48),
});