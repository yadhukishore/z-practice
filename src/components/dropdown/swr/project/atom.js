import { atom } from "jotai";

export const userAtom = atom(null);
export const isAuthenticatedAtom = atom(!!localStorage.getItem("accessToken"));
