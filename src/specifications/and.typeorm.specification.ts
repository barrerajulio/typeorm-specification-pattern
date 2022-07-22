import { TypeormSpecification } from "./typeorm.specification";
import { CompositeTypeormSpecification } from "./index";
import { Brackets, SelectQueryBuilder } from "typeorm";

export class AndTypeormSpecification<T>
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
      qb
        .andWhere(this.left.getConditions())
        .andWhere(this.right.getConditions())
    );
  }

  getQueryBuilder(): SelectQueryBuilder<any> {
    return this.queryBuilder
      .andWhere(this.left.getConditions())
      .andWhere(this.right.getConditions());
  }
}
