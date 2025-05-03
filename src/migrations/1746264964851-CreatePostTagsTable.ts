import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePostTagsTable1746264964851 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
          CREATE TABLE post_tags (
            post_id INTEGER,
            tag_id INTEGER,
            PRIMARY KEY (post_id, tag_id),
            CONSTRAINT fk_post FOREIGN KEY(post_id)
              REFERENCES posts(id)
              ON DELETE CASCADE,
            CONSTRAINT fk_tag FOREIGN KEY(tag_id)
              REFERENCES tags(id)
              ON DELETE CASCADE
          );
        `);
      }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE post_tags;`);
    }

}
