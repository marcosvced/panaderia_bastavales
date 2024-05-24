export const spacing = {
    base: 4,
    directions: {
        '': [''],
        'l': ['-left'],
        'r': ['-right'],
        't': ['-top'],
        'b': ['-bottom'],
        'x': ['-left', '-right'],
        'y': ['-top', '-bottom'],
        'block-start': ['-block-start'],
        'block-end': ['-block-end'],
        'inline-start': ['-inline-start'],
        'inline-end': ['-inline-end'],
        'block': ['-block-start', '-block-end'],
        'inline': ['-inline-start', '-inline-end'],
    } as Record<string, string[]>
}

