import { getRepository, SelectQueryBuilder } from "typeorm";

import { OfIdsTypeormSpecification } from "./of-ids.typeorm.specification";
import { OfIdTypeormSpecification } from "./of-id.typeorm.specification";
import { OfNameTypeormSpecification } from "./of-name.typeorm.specification";
import { TypeormSpecification } from "../specifications/typeorm.specification";

export class ExampleSpecificationFactory {
  ofId(id: number): TypeormSpecification {
    return new OfIdTypeormSpecification(id);
  }

  ofName(name: string): TypeormSpecification {
    return new OfNameTypeormSpecification(name);
  }

  ofIds(ids: number[]): TypeormSpecification {
    return new OfIdsTypeormSpecification(ids);
  }
}
