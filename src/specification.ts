export interface Specification {
  and(right: Specification): Specification;
  or(left: Specification): Specification;
  getConditions(): any;
}
