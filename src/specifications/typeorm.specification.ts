import { Brackets, SelectQueryBuilder } from "typeorm";

import { Specification } from "../specification";

export interface TypeormSpecification<T> extends Specification {
  getConditions(): Brackets;
  getQueryBuilder(): SelectQueryBuilder<T>;
  and(specification: TypeormSpecification<T>): TypeormSpecification<T>;
  or(specification: TypeormSpecification<T>): TypeormSpecification<T>;
}
