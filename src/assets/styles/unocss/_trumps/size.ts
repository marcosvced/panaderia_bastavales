import {pixels} from "../_tools/pixels.ts";

export const width = [
    new RegExp(`^(?:-)?width\\((\\d+|[^)]+)\\)$`),
    ([, n]: [never, number]) => {
        if(isNaN(n)) {
        return {width: n}
        }
        return {width: pixels.toRem(n)}
    },
    {layer: 'trumps'}
]
export const height = [
    new RegExp(`^(?:-)?height\\((\\d+|[^)]+)\\)$`),
    ([, n]: [never, number]) => {
        if(isNaN(n)) {
        return {height: n}
        }
        return {height: pixels.toRem(n)}
    },
    {layer: 'trumps'}
]