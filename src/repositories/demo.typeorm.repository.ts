import { Demo } from "../demo";
import { DemoEntity } from "../entities/demo.entity";
import { TypeormSpecification } from "../specifications/typeorm.specification";
import { DemoRepository } from "./../demo.repository";

export class DemoTypeormRepository implements DemoRepository {
  async findOne(
    specification: TypeormSpecification<DemoEntity>
  ): Promise<Demo> {
    const row = await specification.getQueryBuilder().getOne();
    if (!row) {
      throw new Error("Not found");
    }
    return new Demo(row.id, row.name);
  }

  async findAll(
    specification: TypeormSpecification<DemoEntity>
  ): Promise<Demo[]> {
    const rows = await specification.getQueryBuilder().getMany();
    return rows.map((row) => new Demo(row.id, row.name));
  }
}
