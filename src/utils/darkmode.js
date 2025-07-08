import { useLocalStorage } from "@vueuse/core";

export const dark = useLocalStorage("dark", true);
