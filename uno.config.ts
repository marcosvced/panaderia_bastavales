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
                    'arrow-left': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',
                    'star': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                        '<path d="M11.7783 3.42498C11.8718 3.2458 12.1282 3.2458 12.2217 3.42498L15.0304 8.80993C15.0678 8.88168 15.1376 8.93088 15.2178 8.94196L21.4755 9.80757C21.6847 9.83651 21.766 10.0959 21.6106 10.239L17.1011 14.3958C17.0381 14.4538 17.0092 14.54 17.0245 14.6242L18.0911 20.5095C18.1278 20.7119 17.9179 20.8696 17.7337 20.7779L12.1114 17.9797C12.0412 17.9448 11.9588 17.9448 11.8886 17.9797L6.26628 20.7779C6.08209 20.8696 5.87221 20.7119 5.90889 20.5095L6.97549 14.6242C6.99075 14.54 6.96187 14.4538 6.89894 14.3958L2.38937 10.239C2.23404 10.0959 2.3153 9.83651 2.52455 9.80757L8.78224 8.94196C8.86239 8.93088 8.93222 8.88168 8.96965 8.80993L11.7783 3.42498Z" fill="currentColor"/>\n' +
                        '</svg>'
                }
            }
        }),
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        aguiaDesign({})
    ]
} as ConfigBase)