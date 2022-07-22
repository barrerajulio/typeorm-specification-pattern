import { Brackets, SelectQueryBuilder } from "typeorm";

import { AndTypeormSpecification, OrTypeormSpecification } from "./index";
import { TypeormSpecification } from "./typeorm.specification";

export abstract class CompositeTypeormSpecification<T>
  implements TypeormSpecification<T>
{
  constructor(protected readonly queryBuilder: SelectQueryBuilder<T>) {}

  and(left: TypeormSpecification<T>): TypeormSpecification<T> {
    return new AndTypeormSpecification(this.queryBuilder, this, left);
  }

  or(right: TypeormSpecification<T>): TypeormSpecification<T> {
    return new OrTypeormSpecification(this.queryBuilder, this, right);
  }

  getQueryBuilder(): SelectQueryBuilder<T> {
    return this.queryBuilder;
  }

  abstract getConditions(): Brackets;
}
