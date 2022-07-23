import { Brackets } from "typeorm";

import { Specification } from "../specification";

export interface TypeormSpecification extends Specification {
  getConditions(): Brackets;
  and(specification: TypeormSpecification): TypeormSpecification;
  or(specification: TypeormSpecification): TypeormSpecification;
}
