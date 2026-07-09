// https://www.mongodb.com/docs/v6.0/reference/database-references/

// 插入班级数据
db.clazzs.insertOne({
    name: '一班',
    grade: '一年级'
})

// 插入学生数据
db.stus.insertOne({
    name: "张三",
    sex: 'male',
    // clazz是一个 dbref 字段
    clazz: {
        $ref: "clazzs",
        $id: ObjectId("63e5d16dbb335ae74689ace6"),
        // 选填
        $db: "test",
        // 额外字段
        classAlias: '1'
    }
})

// dbrefs 在数据库查询数据时并不会被引用，只能被数据库驱动程序自行解析
// mongoose 通过 populate 解析 dbrefs
// https://mongoosejs.com/docs/populate.html

const clazzSchema = new Schema({
    name: { type: String, index: true },
    grade: { type: String, index: true },
    // stus 是学生数组
    stus: [{ type: mongoose.ObjectId, ref: () => Stu }]
}, { timestamps: true });

const Clazz = model('clazz', clazzSchema);

const stuSchema = new Schema({
    name: { type: String, index: true },
    sex: { type: String, index: true },
    // 若此处的值关联一个 mongoose.ObjectId 或 Schema.Types.ObjectId 或 Mongoose.Types.ObjectId
    // 那么需要使用 schema.path 来定义关联的表结构
    // clazz: mongoose.ObjectId
    // 注意: ref 最好用工厂函数返回一个 Schema 实例
    clazz: { type: Schema.Types.ObjectId, ref: () => Clazz }
}, { timestamps: true });

// stuSchema.path('clazz').ref(() => Clazz);
const Stu = model('stu', stuSchema);


// 查询数据
// populate 的参数是 schema 中需要关联查询的字段名称
Clazz.find({}).populate('stus').exec((err, clazzs) => {
    console.log(clazzs[clazzs.length - 1])
})



