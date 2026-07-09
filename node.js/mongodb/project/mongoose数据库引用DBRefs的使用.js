const mongoose = require('mongoose');
const {model, Schema} = mongoose

// 声明班级
const clazzSchema = new Schema({
    name: {type: String, index: true},
    grade: {type: String, index: true},
    stus: [{type: Schema.Types.ObjectId, ref: () => Stu}]
})

const Clazz = model('clazz', clazzSchema)

// 声明学生
const stuSchema = new Schema({
    name: {type: String, index: true},
    sex: {type: String, index: true},
    clazz: {type: Schema.Types.ObjectId, ref: () => Clazz}
})

const Stu = model('stu', stuSchema);


(async () => {
    await mongoose.connect('mongodb://admin:111111@127.0.0.1:27017/test')
    console.log('连接成功')

    // 创建数据
    // const clazzDoc = await Clazz.create({name: '一班', grade: '一年级'})
    // const zhangSan = await Stu.create({name: '张三', sex: 'male', clazz: clazzDoc})
    // const liSi = await Stu.create({name: '李四', sex: 'female', clazz: clazzDoc._id})

    // 给班级添加学生
    // await Clazz.updateOne({_id: '63e5f003cc219a9dd96d893f'}, {
    //     stus: [mongoose.Types.ObjectId('63e5f003cc219a9dd96d8945'), mongoose.Types.ObjectId('63e5f003cc219a9dd96d8947')]
    // })

    // 查询数据
    // 查询班级
    // Clazz.find({}).populate('stus').exec((err, clazzs) => {
    //     // err 异常对象
    //     if (err) console.error(err)
    //     else {
    //         console.log(clazzs)
    //         console.log(clazzs[0].stus)
    //     }
    // })

    // 查询学生
    Stu.find({}).populate('clazz').exec((err, stus)=>{
        if (err) console.error(err)
        else {
            console.log(stus)
            console.log(stus[0].clazz)
        }
    })
})()