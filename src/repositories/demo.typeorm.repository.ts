import { Repository } from "typeorm";

import { Demo } from "../demo";
import { DemoEntity } from "../entities/demo.entity";
import { DemoRepository } from "./../demo.repository";
import { TypeormSpecification } from "../specifications/typeorm.specification";

export class DemoTypeormRepository implements DemoRepository {
  constructor(private repository: Repository<DemoEntity>) {}

  async findOne(specification: TypeormSpecification): Promise<Demo> {
    const row = await this.repository
      .createQueryBuilder("demo")
      .innerJoinAndSelect("demo.other", "other")
      .where(specification.getConditions())
      .getOne();
    if (!row) {
      throw new Error("Not found");
    }
    return new Demo(row.id, row.name);
  }

  async findAll(specification: TypeormSpecification): Promise<Demo[]> {
    const rows = await this.repository
      .createQueryBuilder("demo")
      .innerJoinAndSelect("demo.other", "other")
      .where(specification.getConditions())
      .getMany();
    return rows.map((row) => new Demo(row.id, row.name));
  }
}
