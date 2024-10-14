const COLORS = {
    RESET: '[0m',
    BLACK: '[30m',
    RED: '[31m',
    GREEN: '[32m',
    YELLOW: '[33m',
    BLUE: '[34m',
    PURPLE: '[35m',
    CYAN: '[36m',
    WHITE: '[37m',
};

export const getColoredText = (color, text) => {
    const colorCode = COLORS[color] ?? COLORS.RESET;

    return `\x1b${colorCode}${text}\x1b${COLORS.RESET}`;
};

export const printColoredText = (color, text) => {
    console.log(getColoredText(color, text));
};
