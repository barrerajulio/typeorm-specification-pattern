import { Brackets, SelectQueryBuilder } from "typeorm";

import { CompositeTypeormSpecification } from "../specifications";
import { TypeormSpecification } from "../specifications/typeorm.specification";

export class OfIdsTypeormSpecification<T>
  extends CompositeTypeormSpecification<T>
  implements TypeormSpecification<T>
{
  constructor(
    protected readonly queryBuilder: SelectQueryBuilder<any>,
    private readonly ids: number[]
  ) {
    super(queryBuilder);
  }

  getConditions(): Brackets {
    return new Brackets((qb) => qb.where("id in (:...ids)", { ids: this.ids }));
  }
}
