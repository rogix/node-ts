import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterUserDeleteUserName1627510509169
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("users", "username");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "users",
      new TableColumn({ name: "username", type: "varchar" })
    );
  }
}
