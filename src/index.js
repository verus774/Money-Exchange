// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    const coins = {H: 50, Q: 25, D: 10, N: 5, P: 1};
    const res = {};

    if (currency > 10000)
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    for (let coinTitle in coins) {
        const count = Math.floor(currency / coins[coinTitle]);
        if (count > 0) {
            res[coinTitle] = count;
            currency -= coins[coinTitle] * count;
        }
    }

    return res;
};
