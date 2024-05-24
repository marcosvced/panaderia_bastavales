import {type Breakpoint,} from "../_settings/breakpoints";

export const mediaQuery = (matcher: string, {theme: {breakpoints}}: {
    theme: { breakpoints: Record<Breakpoint, string> }
}) => {

    const keyword = '-screen'

    if (!matcher.startsWith(keyword))
        return matcher

    const regex = new RegExp(`${keyword}\\(([^)]+)\\):`)
    const match = matcher.match(regex)

    if (match) {
        const size = breakpoints[match[1] as Breakpoint]
        return {
            matcher: matcher.slice((matcher.match(regex) ?? [''])[0].length),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            handle: (input: any, next: any) => next({
                ...input,
                parent: `@media (min-width: ${size})`,
                parentOrder: Object.keys(breakpoints).findIndex((key) => key === match[1])
            }),
            selector: (s: string) => s,

        }
    }

    return matcher
}

