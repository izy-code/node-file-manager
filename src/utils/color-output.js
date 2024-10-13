const colors = {
    reset: '[0m',
    black: '[30m',
    red: '[31m',
    green: '[32m',
    yellow: '[33m',
    blue: '[34m',
    purple: '[35m',
    cyan: '[36m',
    white: '[37m',
};

export const getColoredText = (color, text) => {
    const colorCode = colors[color] ?? colors.reset;

    return `\x1b${colorCode}${text}\x1b${colors.reset}`;
};

export const printColoredText = (color, text) => {
    console.log(getColoredText(color, text));
};
