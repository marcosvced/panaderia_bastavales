import {pixels} from "../_tools/pixels.ts";
import {spacing} from "../_settings/spacing.ts";

export const grid = [
    [
        new RegExp(`^(?:-)?grid`),
        () => ({display: 'grid'}),
        {layer: 'trumps'}
    ],
    [
        new RegExp(`^(?:-)?gap\\((\\d+)\\)$`),
        ([, n]: [never, number]) => {
            if (isNaN(n)) {
                return
            }
            return {'gap': `${isNaN(n) ? n : pixels.toRem(spacing.base * n)}`}
        }
    ],

    // Columns
    [
        new RegExp(`^(?:-)?column-gap\\((\\d+)\\)$`),
        ([, n]: [never, number]) => {
            if (isNaN(n)) {
                return
            }
            return {'column-gap': `${isNaN(n) ? n : pixels.toRem(spacing.base * n)}`}
        }
    ],
    [
        new RegExp(`^(?:-)?columns\\((\\d+)\\)$`),
        ([, n]: [never, number]) => {
            if (isNaN(n)) {
                return
            }
            return {'grid-template-columns': `repeat(${n}, 1fr)`}
        }
    ],
    [
        new RegExp(`^(?:-)?column-start\\((\\d+)\\)$`),
        ([, n]: [never, number]) => {
            if (isNaN(n)) {
                return
            }
            return {'grid-column-start': `${n}`}
        }
    ],
    [
        new RegExp(`^(?:-)?column-end\\((\\d+)\\)$`),
        ([, n]: [never, number]) => {
            return {'grid-column-end': `${n}`}
        }
    ],
    [
        new RegExp(`^(?:-)?column-span\\((\\d+)\\)$`),
        ([, n]: [never, number]) => {
            return {'grid-column-end': `span ${n}`}
        }
    ],

    // Rows

    [
        new RegExp(`^(?:-)?row-gap\\((\\d+)\\)$`),
        ([, n]: [never, number]) => {
            if (isNaN(n)) {
                return
            }
            return {'row-gap': `${isNaN(n) ? n : pixels.toRem(spacing.base * n)}`}
        }
    ],
    [
        new RegExp(`^(?:-)?row\\((\\d+)\\)$`),
        ([, n]: [never, number]) => {
            if (isNaN(n)) {
                return
            }
            return {'grid-template-row': `repeat(${n}, 1fr)`}
        }
    ],
    [
        new RegExp(`^(?:-)?row-start\\((\\d+)\\)$`),
        ([, n]: [never, number]) => {
            if (isNaN(n)) {
                return
            }
            return {'grid-row-start': `${n}`}
        }
    ],
    [
        new RegExp(`^(?:-)?row-end\\((\\d+)\\)$`),
        ([, n]: [never, number]) => {
            return {'grid-row-end': `${n}`}
        }
    ],
    [
        new RegExp(`^(?:-)?row-span\\((\\d+)\\)$`),
        ([, n]: [never, number]) => {
            return {'grid-row-end': `span ${n}`}
        }
    ],
    
]