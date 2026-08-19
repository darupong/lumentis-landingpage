import { atom } from "jotai";

/** Mobile navigation sheet open state */
export const mobileMenuOpenAtom = atom(false);

/** Currently visible section id, used for nav highlighting */
export const activeSectionAtom = atom<string>("hero");
