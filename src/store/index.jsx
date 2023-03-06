import { selector, atom } from "recoil";

export const numberState = atom({
  key: "number-state",
  default: 1,
});

export const counterState = selector({
  key: "counter-state",
  get: ({ get }) => {},
});
