import { Brackets } from "typeorm";

import { AndTypeormSpecification, OrTypeormSpecification } from "./index";
import { TypeormSpecification } from "./typeorm.specification";

export abstract class CompositeTypeormSpecification
  implements TypeormSpecification
{
  and(left: TypeormSpecification): TypeormSpecification {
    return new AndTypeormSpecification(this, left);
  }

  or(right: TypeormSpecification): TypeormSpecification {
    return new OrTypeormSpecification(this, right);
  }

  abstract getConditions(): Brackets;
}
