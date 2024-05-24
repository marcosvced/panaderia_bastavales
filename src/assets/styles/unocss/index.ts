import {definePreset} from 'unocss'
import {colors} from "./_settings/palette.ts";
import {breakpoints} from "./_settings/breakpoints.ts";
import {mediaQuery} from "./_tools/media.ts";
import {margins, paddings} from "./_trumps/spacing.ts";
import {width, height} from "./_trumps/size.ts";
import {grid} from "./_trumps/grid.ts";


export default definePreset(() => {
    return {
        name: 'AguiaDesign',
        theme: {
            breakpoints,
            colors
        },
        variants: [
            mediaQuery,
        ],
        rules: [
            margins,
            paddings,
            width,
            height,
            ...grid
        ]
    }
})