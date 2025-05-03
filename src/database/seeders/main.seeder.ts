// src/database/seeders/main.seeder.ts
import { DataSource } from 'typeorm';
import UserSeeder from '../seeds/user.seeder';

export class MainSeeder {
  private dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  async run() {
    await new UserSeeder().run(this.dataSource);
    // Tambahkan seeder lain di sini
  }
}