import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({
  name: "demo",
})
export class DemoEntity extends BaseEntity {
  @PrimaryColumn({
    name: "id",
    type: "int",
  })
  id!: number;

  @Column({
    name: "name",
    type: "varchar",
  })
  name!: string;
}
