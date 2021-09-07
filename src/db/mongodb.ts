import { connection, connect } from 'mongoose';
connection.on('open', () => console.log('db ok'));
export async function ConnectDb({ host, port, dbName }) {
  const uri = `mongodb://${host}:${port}/${dbName}`;
  await connect(uri);
}
