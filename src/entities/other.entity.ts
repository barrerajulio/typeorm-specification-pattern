import { BaseEntity, Column, Entity, OneToOne, PrimaryColumn } from "typeorm";

import { DemoEntity } from "./demo.entity";

@Entity({
  name: "other",
})
export class OtherEntity extends BaseEntity {
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

  @OneToOne(() => DemoEntity, (demo) => demo.other) // specify inverse side as a second parameter
  demo!: DemoEntity;
}
