export const round = (number, decimals) => {
    const factorDecimal = Math.pow(10, decimals);
    return Math.round(number * factorDecimal) / factorDecimal;
};
