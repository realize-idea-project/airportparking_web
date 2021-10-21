import { RouterPathType } from "types";

export type TabDefinitions = Map<RouterPathType, Tab>;

export type Tab = {
  title: string,
};