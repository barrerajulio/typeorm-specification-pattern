import { Brackets } from "typeorm";

import { CompositeTypeormSpecification } from "../specifications";
import { TypeormSpecification } from "../specifications/typeorm.specification";

export class OfNameTypeormSpecification
  extends CompositeTypeormSpecification
  implements TypeormSpecification
{
  constructor(private readonly name: string) {
    super();
  }

  getConditions(): Brackets {
    return new Brackets((qb) =>
      qb.where("other.name = :name", { name: this.name })
    );
  }
}
