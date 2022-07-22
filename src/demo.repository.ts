import { Demo } from "./demo";
import { Specification } from "./specification";

export interface DemoRepository {
  findOne(specification: Specification): Promise<Demo>;
}
