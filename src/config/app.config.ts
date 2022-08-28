import { registerAs } from '@nestjs/config';

export const appConfigs = registerAs('app', () => ({
  port: parseInt(process.env.CLIENT_PORT),
  redisPort: parseInt(process.env.REDIS_PORT),
  pollDuration: parseInt(process.env.POLL_DURATION),
  jwtSecret: process.env.JWT_SECRET,
  redisHost: process.env.REDIS_HOST,
}));
