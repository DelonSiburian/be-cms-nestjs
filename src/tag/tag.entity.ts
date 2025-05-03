import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Posts } from '../post/posts.entity';

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  slug: string;

  @ManyToMany(() => Posts, (post) => post.tags)
  posts: Posts[];
}
