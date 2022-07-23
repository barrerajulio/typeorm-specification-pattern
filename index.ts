import { config } from "dotenv";
import { createConnection } from "typeorm";

import "./src/specifications/index";
import { DemoEntity } from "./src/entities/demo.entity";
import { DemoTypeormRepository } from "./src/repositories/demo.typeorm.repository";
import { ExampleSpecificationFactory } from "./src/factories/example.specification.factory";

config();

(async () => {
  await createConnection({
    type: process.env.TYPEORM_CONNECTION! as any,
    host: process.env.TYPEORM_HOST,
    port: +process.env.TYPEORM_PORT!,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [DemoEntity],
    logging: true,
  });
  const factory = new ExampleSpecificationFactory();
  //   console.log(
  //     factory.ofId(1).and(factory.ofName("Julio")).getQueryBuilder().getSql()
  //   );
  const repository = new DemoTypeormRepository();
  const demo = await repository.findAll(
    factory
      .ofName("Juan")
      .or(factory.ofName("Julio").and(factory.ofIds([1, 3, 5])))
  );
  console.log(demo);
})();
