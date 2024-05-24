import {definePreset} from 'unocss'
import {colors} from "./_settings/palette";
import {breakpoints} from "./_settings/breakpoints";
import {mediaQuery} from "./_tools/media";
import {margins, paddings} from "./_trumps/spacing";
import {width, height} from "./_trumps/size";
import {grid} from "./_trumps/grid";


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