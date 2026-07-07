db.game.mapReduce(
    function () { // 定义map方法
        emit(this.platform, { price: this.price, count: 1 }) // 通过平台分类，传递price，和count作为数据给reduce方法
    },
    function (key, values) { // 定义reduce方法
        let totalPrice = 0
        let totalCount = 0
        values.forEach((el) => { // 计算总数和总价
            totalPrice += el.price
            totalCount += el.count
        })
        let result = { // 返回和map方法中emit的数据相同字段的数据
            price: totalPrice,
            count: totalCount
        }
        return result
    },
    {
        out: 'my_mapreduce', // 指定输出表的名称
        finalize: function (key, reduceResult) { // reduce执行完后，执行该方法
            reduceResult.avg = reduceResult.price / reduceResult.count
            return reduceResult
        }
    }
)




db.games.mapReduce(
    // 第一个参数是 map 方法
    function () {
        // 该函数中的 this 代表数据库中的每条数据
        // emit 函数需要提交一个参数，该参数是映射 this 后返回给数据库的对象
        // 第一个参数是分类
        emit(this.platform, { price: this.price, total: this.price, count: 1 })
    },
    // 第二个参数是 reduce 方法
    function (key, values) {
        // key: 分类的key
        // values: 按分类，分好的一批数据，但不是所有数据
        return values.reduce((p, n) => {
            // 统计数据
            p.total += n.price
            p.count++
            return p
        })
    },
    {
        out: 'my_mapreduce', // 指定输出表的名称
        // 选填
        // finalize 当不同分类的统计结束之后会调用该数据
        finalize(key, reduceResult) {
            // key: 分类的key
            // reduceResult: 统计完后的结果
            return reduceResult.total/reduceResult.count
        }
    }
)