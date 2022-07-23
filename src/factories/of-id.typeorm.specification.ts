import { Brackets } from "typeorm";

import { CompositeTypeormSpecification } from "../specifications";
import { TypeormSpecification } from "../specifications/typeorm.specification";

export class OfIdTypeormSpecification
  extends CompositeTypeormSpecification
  implements TypeormSpecification
{
  constructor(private readonly id: number) {
    super();
  }

  getConditions(): Brackets {
    return new Brackets((qb) => qb.where("demo.id = :id", { id: this.id }));
  }
}
