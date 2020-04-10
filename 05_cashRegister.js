function checkCashRegister(price, cash, cid) {
    let units = {
        "ONE HUNDRED": 100.0,
        TWENTY: 20.0,
        TEN: 10.0,
        FIVE: 5.0,
        ONE: 1.0,
        QUARTER: 0.25,
        DIME: 0.1,
        NICKEL: 0.05,
        PENNY: 0.01
    };
    let change = cash - price;
    let cidTotal = 0.0;

    for (let i = 0; i < cid.length; i++) {
        cidTotal += cid[i][1];
    }

    if (cidTotal === change) {
        return { status: "CLOSED", change: cid };
    } else if (cidTotal < change) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    let reversedCid = cid.reverse();
    let result = [];
    let totalCurrency = 0;
    let cidCurrency = 0;

    for (let unit in units) {
        while (reversedCid[cidCurrency][1] !== 0 && units[unit] <= change) {
            totalCurrency++;
            reversedCid[cidCurrency][1] -= units[unit];
            change -= units[unit];
            change = Math.round(change * 100) / 100;
        }

        if (totalCurrency) {
            result.push([unit, totalCurrency * units[unit]]);
            totalCurrency = 0;
        }

        cidCurrency++;
    }
    
    if (change === 0.0) {
        return { status: "OPEN", change: result };
    } else {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
}
