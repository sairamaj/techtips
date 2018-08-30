var TC = require('./tipcategory.js')
var t = new TC.TipCateogry('iis.yaml')
let command = t.get('apppool.recycle')
console.log(command)
console.log('-----------------------------')
t.Tips.forEach(t=>{
    console.log(t)
})

