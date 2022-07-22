import { Brackets, SelectQueryBuilder } from "typeorm";

import { CompositeTypeormSpecification } from "../specifications";
import { TypeormSpecification } from "../specifications/typeorm.specification";

export class OfIdTypeormSpecification<T>
  extends CompositeTypeormSpecification<T>
  implements TypeormSpecification<T>
{
  constructor(
    protected readonly queryBuilder: SelectQueryBuilder<any>,
    private readonly id: number
  ) {
    super(queryBuilder);
  }

  getConditions(): Brackets {
    return new Brackets((qb) => qb.where("id = :id", { id: this.id }));
  }
}
