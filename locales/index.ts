import { Locale, Translations } from "@/types/i18n";
import { en } from "./en";
import { es } from "./es";
import { ca } from "./ca";

export const translations: Record<Locale, Translations> = {
  es,
  ca,
  en,
};

export { en, es, ca };
