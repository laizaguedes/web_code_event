import 'dotenv/config' // Certifique-se de que isto está aqui
import { z } from 'zod'

const envSchema = z.object({
  WEB_URL: z.string().url(),
  API_URL: z.string().url(),
})

export const env = envSchema.parse({
  WEB_URL: process.env.WEB_URL,
  API_URL: process.env.API_URL,
})
