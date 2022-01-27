import DatabaseConfig from '../database/database.config';

export interface Config {
  port: number;
  database: {
    url: string;
  };
}
export default () =>
  ({
    port: parseInt(process.env.PORT, 10) || 3001,
    database: {
      ...DatabaseConfig(),
    },
    redis: process.env.REDIS_URL,
  } as Config);
