import { Brackets } from "typeorm";

import { CompositeTypeormSpecification } from "../specifications";
import { TypeormSpecification } from "../specifications/typeorm.specification";

export class OfIdsTypeormSpecification
  extends CompositeTypeormSpecification
  implements TypeormSpecification
{
  constructor(private readonly ids: number[]) {
    super();
  }

  getConditions(): Brackets {
    return new Brackets((qb) =>
      qb.where("demo.id in (:...ids)", { ids: this.ids })
    );
  }
}
