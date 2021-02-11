export function getRosterData() {
    let roster = require('../../src/data/roster-data.json').data;
    // // eslint-disable-next-line array-callback-return
    roster.forEach(object => {
        object.payoutAmount = (object.rate * object.streams).toFixed(2)
        object.payoutStatus = false
    })
    return roster
}