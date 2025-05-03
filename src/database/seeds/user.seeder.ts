import { DataSource } from 'typeorm';
import { User } from '../../user/user.entity';
import * as bcrypt from 'bcrypt';

export default class UserSeeder {
  public async run(dataSource: DataSource): Promise<void> {
    const userRepository = dataSource.getRepository(User);
    
    const userData = {
      username: 'admin', // Sesuai dengan @Column() di entity
      email: 'admin@example.com',
      password_hash: await bcrypt.hash('password123', 10), // Sesuai nama kolom
      profile_picture: 'https://example.com/default-profile.jpg',
      bio: 'System Administrator',
      // created_at dan updated_at tidak perlu diisi karena sudah ada decorator
    };

    const userExists = await userRepository.findOneBy({ 
      email: userData.email 
    });

    if (!userExists) {
      const newUser = userRepository.create(userData);
      await userRepository.save(newUser);
      console.log('Admin user created successfully');
    } else {
      console.log('Admin user already exists');
    }
  }
}