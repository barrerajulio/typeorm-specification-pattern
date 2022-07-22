import { getRepository, SelectQueryBuilder } from "typeorm";
import { DemoEntity } from "../entities/demo.entity";

import { TypeormSpecification } from "../specifications/typeorm.specification";
import { OfIdTypeormSpecification } from "./of-id.typeorm.specification";
import { OfIdsTypeormSpecification } from "./of-ids.typeorm.specification";
import { OfNameTypeormSpecification } from "./of-name.typeorm.specification";

export class ExampleSpecificationFactory {
  private queryBuilder: SelectQueryBuilder<DemoEntity>;

  constructor() {
    this.queryBuilder = getRepository(DemoEntity).createQueryBuilder();
  }

  ofId(id: number): TypeormSpecification<DemoEntity> {
    return new OfIdTypeormSpecification<DemoEntity>(this.queryBuilder, id);
  }

  ofName(name: string): TypeormSpecification<DemoEntity> {
    return new OfNameTypeormSpecification<DemoEntity>(this.queryBuilder, name);
  }

  ofIds(ids: number[]): TypeormSpecification<DemoEntity> {
    return new OfIdsTypeormSpecification<DemoEntity>(this.queryBuilder, ids);
  }
}
