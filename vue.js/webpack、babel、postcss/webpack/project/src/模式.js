import moment from 'moment'

console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development') {
    console.log('这是开发模式下的日志')
}

if (process.env.NODE_ENV === 'happy') {
    console.log('我好开心哦')
}

console.log(moment().format('YYYY-MM-DD HH:mm'))