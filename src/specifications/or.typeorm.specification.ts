import { Brackets, SelectQueryBuilder } from "typeorm";

import { CompositeTypeormSpecification } from "./index";
import { TypeormSpecification } from "./typeorm.specification";

export class OrTypeormSpecification<T>
  extends CompositeTypeormSpecification<T>
  implements TypeormSpecification<T>
{
  protected left: TypeormSpecification<T>;
  protected right: TypeormSpecification<T>;

  constructor(
    protected readonly queryBuilder: SelectQueryBuilder<any>,
    left: TypeormSpecification<T>,
    right: TypeormSpecification<T>
  ) {
    super(queryBuilder);
    this.left = left;
    this.right = right;
  }

  getConditions(): Brackets {
    return new Brackets((qb) =>
      qb.orWhere(this.left.getConditions(), this.right.getConditions())
    );
  }

  getQueryBuilder(): SelectQueryBuilder<any> {
    return this.queryBuilder
      .orWhere(this.left.getConditions())
      .orWhere(this.right.getConditions());
  }
}
