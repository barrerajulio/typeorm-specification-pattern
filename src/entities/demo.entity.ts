import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from "typeorm";

import { OtherEntity } from "./other.entity";

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

  @OneToOne(() => OtherEntity, (other) => other.demo)
  @JoinColumn({ name: "other_id" })
  other!: OtherEntity;
}
