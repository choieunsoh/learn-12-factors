import * as dotenv from 'dotenv';

dotenv.config();

type Config = {
  PORT: number;
  MONGODB_URI: string;
  DATABASE_NAME: string;
  NODE_ENV: string;
};

function getConfig(): Config {
  const port = Number(process.env.PORT ?? 4000);
  const nodeEnv = process.env.NODE_ENV ?? 'development';
  const mongodbUri = process.env.MONGODB_URI ?? '';
  const databaseName = process.env.DATABASE_NAME ?? 'test';

  return {
    PORT: port,
    NODE_ENV: nodeEnv,
    MONGODB_URI: mongodbUri,
    DATABASE_NAME: databaseName,
  };
}

const config = getConfig();
export default config;
