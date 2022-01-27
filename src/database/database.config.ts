const DatabaseConfig = () => ({
  type: 'mongodb',
  url: process.env.DATABASE_URL,
  autoLoadEntities: true,
  synchronize: process.env.DB_SYNCHRONIZE || true,
});
export default DatabaseConfig;
