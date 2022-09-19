const moment = require('moment');
const fs = require('fs');

const logger = (name, action) => {
    fs.readFile('server/db/stats.json', 'UTF-8', (err, data) => {
        if (err) {
            console.log("Can't read file")
        } else {
            const stat = JSON.parse(data);
            stat.push({
                time: moment().format('DD MMM YYYY, h:mmL:ss a'),
                product_name: name,
                action: action
            });
            fs.writeFile('server/db/stats.json', JSON.stringify(stat, null, 4), (err) => {
                if (err) {
                    console.log("Can't read file")
                }
            })
        }
    })
}
module.exports = logger