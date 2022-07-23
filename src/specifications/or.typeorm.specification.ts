import { Brackets } from "typeorm";

import { CompositeTypeormSpecification } from "./index";
import { TypeormSpecification } from "./typeorm.specification";

export class OrTypeormSpecification
  extends CompositeTypeormSpecification
  implements TypeormSpecification
{
  protected left: TypeormSpecification;
  protected right: TypeormSpecification;

  constructor(left: TypeormSpecification, right: TypeormSpecification) {
    super();
    this.left = left;
    this.right = right;
  }

  getConditions(): Brackets {
    return new Brackets((qb) =>
      qb.orWhere(this.left.getConditions()).orWhere(this.right.getConditions())
    );
  }
}
