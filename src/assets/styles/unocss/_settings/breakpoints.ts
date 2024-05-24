import {pixels} from "../_tools/pixels.ts";

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'


export const breakpoints: Record<Breakpoint, string | number> = {
    xs: pixels.toRem(480),
    sm: pixels.toRem(768),
    md: pixels.toRem(1024),
    lg: pixels.toRem(1280),
    xl: pixels.toRem(1440),
    xxl: pixels.toRem(1920),
}