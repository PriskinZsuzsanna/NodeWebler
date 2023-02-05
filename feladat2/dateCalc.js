exports.dateCalculation = () => {

    // Calculate milliseconds in a year
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;
    
    // Divide Date.now() with a year
    let years = 1970 + (Math.round(Date.now() / year))
    let date = Date.now()

    return `A fájl létrehozva: ${years}-ban, Date.now() = ${date} `
}
