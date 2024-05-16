import zod from 'zod';

export const RegistrationShema = zod.object({
  firstName: zod.string().min(3).max(25),
  lastName: zod.string().min(3).max(25),
  email: zod.string().email(),
  password: zod.string().min(6).max(48),
});