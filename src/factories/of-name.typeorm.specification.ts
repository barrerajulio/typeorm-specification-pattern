import { Brackets, SelectQueryBuilder } from "typeorm";

import { CompositeTypeormSpecification } from "../specifications";
import { TypeormSpecification } from "../specifications/typeorm.specification";

export class OfNameTypeormSpecification<T>
  extends CompositeTypeormSpecification<T>
  implements TypeormSpecification<T>
{
  constructor(
    protected readonly queryBuilder: SelectQueryBuilder<any>,
    private readonly name: string
  ) {
    super(queryBuilder);
  }

  getConditions(): Brackets {
    return new Brackets((qb) => qb.where("name = :name", { name: this.name }));
  }
}
