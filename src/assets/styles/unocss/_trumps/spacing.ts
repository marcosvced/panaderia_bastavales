import {directionSize} from "../_tools/direction.ts"
import {minus} from "../_settings/utils.ts";
import {spacing} from "../_settings/spacing.ts";


export const margins = [
    new RegExp(`^(?:-)?(${minus})?m-(${Object.keys(spacing.directions).join('|')})?\\((\\d+|[^)]+)\\)$`),
    directionSize('margin'),
    {layer: 'trumps'}
]
export const paddings = [
    new RegExp(`^(?:-)?('')?p-(${Object.keys(spacing.directions).join('|')})?\\((\\d+|[^)]+)\\)$`),
    directionSize('padding'),
    {layer: 'trumps'}
]