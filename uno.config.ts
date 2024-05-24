import unocss from "unocss/astro";

import {type ConfigBase, defineConfig} from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import presetIcons from '@unocss/preset-icons'

import aguiaDesign from './src/assets/styles/unocss/index'


export default defineConfig({
    integrations: [
        unocss({
            injectReset: true // or a path to the reset file
        }),
    ],
    transformers: [
        transformerDirectives(),
    ],
    presets: [
        presetIcons({
            collections: {
                custom: {
                    shop: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>',
                    'arrow-right': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',
                    'arrow-left': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>'
                }
            }
        }),
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        aguiaDesign({})
    ]
} as ConfigBase)