// 查询员工表
function getTable() {
    let employee = localStorage['employee']
    employee && (employee = JSON.parse(employee))
    employee = employee || []
    return employee
}

// 保存
function save(arr) {
    localStorage['employee'] = JSON.stringify(arr)
}

// 产生一个工号
function getNo() {
    let no = Number(localStorage['no'])
    // 保存新的工号
    localStorage['no'] = ++no
    return no
}

// 查询
// name, department 查询条件
function query(name, department) {
    // 参数过滤
    name = name || ''
    department = department || ''

    let data = getTable()
    // 模糊查询姓名用的正则
    let regex = new RegExp(`^[\\s\\S]*${name}[\\s\\S]*$`)
    // 过滤并保留符合关键字的成员
    data = data.filter(item => regex.test(item.name))
    if (department)
        data = data.filter(item => item.department === department)

    data.reverse()
    return data
}

// 添加
function add(no, name, sex, birthday, department) {
    let data = getTable()
    data.push({
        no, name, sex, birthday, department
    })
    save(data)
}

// 更新数据
function update(no, name, sex, birthday, department) {
    let data = getTable()
    let employ = data.find(item => item.no === no)
    employ.name = name
    employ.sex = sex
    employ.birthday = birthday
    employ.department = department
    save(data)
}

// 单个删除
function removeOne(no) {
    let data = getTable()
    let i = data.findIndex(item => item.no === no)
    data.splice(i, 1)
    save(data)
}

// 通过工号查询
function findByNo(no) {
    let data = getTable()
    return data.find(item => item.no === no)
}

// 批量删除
function removeAll(arr) {
    let data = getTable()
    data = data.filter(item => !arr.includes(item.no))
    save(data)
}