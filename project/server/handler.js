const cart = require('./cart');
const fs = require('fs');
const logger = require('./logger')

const actions = {
    add: cart.add,
    change: cart.change,
    remove: cart.remove
};
//HANDLER отвечает за изменение данных в самом файле
let handler = (req, res, action, file) => {
    fs.readFile(file, 'utf-8', (err, data)=> {
        if(err){
            res.sendStatus(404, JSON.stringify({result:0, text: err}));
        } else {
            let {name, newCart} = actions[action](JSON.parse(data), req);
            fs.writeFile(file, newCart, (err) => {
                if(err){
                    res.sendStatus(404, JSON.stringify({result:0, text: erzr}));
                } else {
                    logger(name, action);
                    res.send(JSON.stringify({result: 1}))
                }
            })
        }
    })
};

module.exports = handler;