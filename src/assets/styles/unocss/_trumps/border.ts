import {pixels} from "../_tools/pixels";

export const border = [
    new RegExp(`^(?:-)?border-bottom\\((\\d+|[^)]+)\\)$`),
    ([, n]: [never, number]) => {
        if(isNaN(n)) {
        return {'border-bottom': `${n} !important;`}
        }
        return {'border-bottom': `${pixels.toRem(n)} !important;`}
    },
    {layer: 'trumps'}
]