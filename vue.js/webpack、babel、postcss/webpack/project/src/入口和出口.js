import moment from 'moment'

function add(x, y){
    return x + y
}

function now(){
    return moment().format('YYYY-MM-DD HH:mm:ss')
}

console.log(add(1,2))
console.log(now())