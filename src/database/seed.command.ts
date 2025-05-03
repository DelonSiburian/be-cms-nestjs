// src/database/seed.command.ts
import { DataSource } from 'typeorm';
import { MainSeeder } from './seeders/main.seeder';
import { config } from 'dotenv';

config();

const dataSource = new DataSource({
  type: 'postgres',
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "db_ssma",
  entities: ['src/**/*.entity{.ts,.js}'],
});

dataSource.initialize()
  .then(async () => {
    console.log('Data Source has been initialized!');
    
    const seeder = new MainSeeder(dataSource);
    await seeder.run();
    
    console.log('Seeding completed!');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
    process.exit(1);
  });