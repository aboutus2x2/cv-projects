const babel = require('@babel/core')

// babel.transform(`const fn = ()=>{console.log('test')}`, {presets: ['@babel/preset-env']}, function (err, result) {
//     if (err) {
//         console.error(err)
//     } else {
//         console.log(result.code)
//         console.log(result.map)
//         console.log(result.ast)
//     }
// })

babel.transformFile('./test.js', {presets: ['@babel/preset-env']}, (err, result) => {
    if (err) {
        console.error(err)
    } else {
        console.log(result.code)
        console.log(result.map)
        console.log(result.ast)
    }
})
