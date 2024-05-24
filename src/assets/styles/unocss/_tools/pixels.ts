import {font} from "../_settings/font";

export const pixels = {
    toRem: (px: number) => (0 != px ? `${px / font.base}rem` : px),
}