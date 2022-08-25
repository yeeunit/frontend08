import { atom } from "recoil";

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    email: "",
    name: "",
  },
});

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});

export const isWatchActiveState = atom({
  key: "isWatchActiveStateKey",
  default: false,
});

export const isBucketActiveState = atom({
  key: "isBucketActiveStateKey",
  default: false,
});

export const isLoginStatus = atom({
  key: "isLoginStatusKey",
  default: false,
});

export const errorModalStatus = atom({
  key: "errorModalStatusKey",
  default: false,
});
