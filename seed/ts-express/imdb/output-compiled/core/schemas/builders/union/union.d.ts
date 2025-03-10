import { ObjectLikeSchema } from "../object-like";
import { Discriminant } from "./discriminant";
import { UnionSubtypes, inferParsedUnion, inferRawUnion } from "./types";
export declare function union<D extends string | Discriminant<any, any>, U extends UnionSubtypes<any>>(discriminant: D, union: U): ObjectLikeSchema<inferRawUnion<D, U>, inferParsedUnion<D, U>>;
