// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
export function UrlDb(): string {
  return `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
}
