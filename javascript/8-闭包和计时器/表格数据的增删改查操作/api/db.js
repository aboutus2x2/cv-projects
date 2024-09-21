// 该js文件模拟数据库的内容
// 此处localStorage充当模拟的数据库

// 查询
function query() {
    // 查找数据库的students表
    let students = localStorage['students']
    // students 存在就将数据反序列化
    students && (students = JSON.parse(students))
    // if (students) students = JSON.parse(students)

    // 返回一个数据作为查询结果
    return students
}