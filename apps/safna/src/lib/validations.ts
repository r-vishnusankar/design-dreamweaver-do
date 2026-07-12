import { z } from "zod";

export const blessingSchema = z.object({
  name: z.string().min(1, "Name is required").max(80),
  message: z.string().min(1, "Message is required").max(500),
});

export type BlessingFormValues = z.infer<typeof blessingSchema>;
