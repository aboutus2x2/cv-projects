// 该js文件模拟数据库的内容
// 此处localStorage充当模拟的数据库

// 获取学生表的数组对象
function getTable() {
    // 查找数据库的students表
    let students = localStorage['students']
    // students 存在就将数据反序列化
    students && (students = JSON.parse(students))
    // if (students) students = JSON.parse(students)
    students = students || []
    return students
}

// 保存数据到localStorage
function save(arr) {
    localStorage['students'] = JSON.stringify(arr)
}

// 查询
function query() {
    // 返回一个数据作为查询结果
    return getTable().reverse()
}

// 添加
function add(no, name, clazz) {
    let data = getTable()
    // 验证学号是否存在
    if (data.some(item => item.no === no)) {
        // 学号已存在
        alert(`学号 ${no} 已存在`)
        return
    }

    // 插入一条数据
    data.push({
        no,
        name,
        clazz
    })
    // 保存数据
    save(data)
}

// 单个删除
function removeOne(no) {
    let data = getTable()
    // 查找要删除数据的索引
    let i = data.findIndex(item => item.no === no)
    // 删除数据
    data.splice(i, 1)
    // 保存
    save(data)
}

// 批量删除
function removeAll(selection) {
    let data = getTable()
    // item的学号no不在数组selection中就保留下来
    data = data.filter(item => !selection.includes(item.no))
    save(data)
}