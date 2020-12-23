import { observable } from "mobx";

export type INumbersStore = {
  numbers: number[];
}

class NumbersStore {
  @observable
  numbers: number[] = [5, 3, 1];
}

export default new NumbersStore()