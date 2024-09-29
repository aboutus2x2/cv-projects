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
function query() {
    let data = getTable()
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