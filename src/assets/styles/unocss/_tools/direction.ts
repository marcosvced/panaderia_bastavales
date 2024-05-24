import type {CSSEntries} from "unocss";
import {spacing} from "../_settings/spacing.ts";
import {pixels} from "./pixels.ts";


/**
 * @param propertyPrefix - Property for the css value to be created. Postfix will be appended according to direction matched.
 * @see {@link spacing.directions}
 */

export function directionSize(propertyPrefix: string) {
    return ([, minus, direction, size]: [never, string | undefined, string | undefined, number]): CSSEntries | string | undefined => {
        const propertySuffix = spacing.directions[direction ?? ''] ?? ['']
        const value = isNaN(size) ? size : pixels.toRem(minus ? spacing.base * size * -1 : spacing.base * size)
        return propertySuffix.map((suffix) => [`${propertyPrefix}${suffix}`, `${value}`])
    }
}