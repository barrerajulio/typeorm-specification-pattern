import { config } from "dotenv";
import { createConnection, getRepository } from "typeorm";

import "./src/specifications/index";
import { DemoEntity } from "./src/entities/demo.entity";
import { DemoTypeormRepository } from "./src/repositories/demo.typeorm.repository";
import { ExampleSpecificationFactory } from "./src/factories/example.specification.factory";
import { OtherEntity } from "./src/entities/other.entity";

config();

(async () => {
  await createConnection({
    type: process.env.TYPEORM_CONNECTION! as any,
    host: process.env.TYPEORM_HOST,
    port: +process.env.TYPEORM_PORT!,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [DemoEntity, OtherEntity],
    logging: true,
  });
  const factory = new ExampleSpecificationFactory();
  //   console.log(
  //     factory.ofId(1).and(factory.ofName("Julio")).getQueryBuilder().getSql()
  //   );
  const repository = new DemoTypeormRepository(getRepository(DemoEntity));
  const demo = await repository.findAll(
    factory
      .ofName("Juan")
      .and(factory.ofName("Julio").or(factory.ofIds([1, 2, 3, 5])))
  );
  console.log(demo);
})();
