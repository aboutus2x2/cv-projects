let students = [
    { name: '杨默蜜', score: 52, clazz: '一班' },
    { name: '卓冉露', score: 76, clazz: '二班' },
    { name: '劳芮芝', score: 36, clazz: '三班' },
    { name: '甄宇融', score: 32, clazz: '一班' },
    { name: '秦岭朵', score: 51, clazz: '二班' },
    { name: '温操易', score: 91, clazz: '三班' },
    { name: '史熙娣', score: 52, clazz: '一班' },
    { name: '葛嫚素', score: 69, clazz: '二班' },
    { name: '邓卉舟', score: 71, clazz: '三班' },
    { name: '霍年颂', score: 51, clazz: '一班' },
    { name: '曹蓓予', score: 72, clazz: '二班' },
    { name: '奚唯谊', score: 57, clazz: '三班' },
    { name: '奚申利', score: 38, clazz: '一班' },
    { name: '纪涌城', score: 6, clazz: '二班' },
    { name: '傅劲辛', score: 79, clazz: '三班' },
    { name: '宗鹭霞', score: 62, clazz: '一班' },
    { name: '邬盼化', score: 51, clazz: '二班' },
    { name: '赵可静', score: 5, clazz: '三班' },
    { name: '赵银伟', score: 44, clazz: '一班' },
    { name: '颜晏千', score: 92, clazz: '二班' },
    { name: '伊真乐', score: 67, clazz: '三班' },
    { name: '谭律铭', score: 67, clazz: '一班' },
    { name: '邓雷壮', score: 84, clazz: '二班' },
    { name: '郜艾欢', score: 88, clazz: '三班' },
    { name: '韩焕宝', score: 90, clazz: '一班' },
    { name: '屈维千', score: 12, clazz: '二班' },
    { name: '武琴兰', score: 41, clazz: '三班' },
    { name: '平暖连', score: 8, clazz: '一班' },
    { name: '柏欣原', score: 42, clazz: '二班' },
    { name: '曹卉群', score: 59, clazz: '三班' },
    { name: '嵇旖亚', score: 99, clazz: '一班' },
    { name: '盛艺珏', score: 7, clazz: '二班' },
    { name: '林朦卿', score: 19, clazz: '三班' },
    { name: '汪凡焰', score: 57, clazz: '一班' },
    { name: '柳建朋', score: 51, clazz: '二班' },
    { name: '喻铖奎', score: 27, clazz: '三班' },
    { name: '郑恋可', score: 1, clazz: '一班' },
    { name: '郦柳元', score: 44, clazz: '二班' },
    { name: '刘雪洁', score: 19, clazz: '三班' },
    { name: '方言斐', score: 63, clazz: '一班' },
    { name: '昌萱莲', score: 37, clazz: '二班' },
    { name: '陆盼渝', score: 22, clazz: '三班' },
    { name: '廉春戈', score: 70, clazz: '一班' },
    { name: '郝翊谊', score: 90, clazz: '二班' },
    { name: '钟欣璋', score: 35, clazz: '三班' },
    { name: '冯萱妃', score: 61, clazz: '一班' },
    { name: '舒琪俐', score: 74, clazz: '二班' },
    { name: '滑韶筝', score: 85, clazz: '三班' },
    { name: '仲颂雄', score: 61, clazz: '一班' },
    { name: '颜璐爱', score: 90, clazz: '二班' },
    { name: '怀隽鹃', score: 23, clazz: '三班' },
    { name: '邹坦劲', score: 92, clazz: '一班' },
    { name: '庞珑轶', score: 68, clazz: '二班' },
    { name: '柳迅眉', score: 37, clazz: '三班' },
    { name: '颜陵纯', score: 25, clazz: '一班' },
    { name: '许咏直', score: 81, clazz: '二班' },
    { name: '薛存煜', score: 80, clazz: '三班' },
    { name: '龙景申', score: 32, clazz: '一班' },
    { name: '袁衡策', score: 96, clazz: '二班' },
    { name: '戴剑璞', score: 68, clazz: '三班' },
    { name: '赖尧耿', score: 2, clazz: '一班' },
    { name: '叶钧容', score: 80, clazz: '二班' },
    { name: '杭岳曦', score: 21, clazz: '三班' },
    { name: '仰行臻', score: 2, clazz: '一班' },
    { name: '朱顺冕', score: 47, clazz: '二班' },
    { name: '祝裕才', score: 16, clazz: '三班' },
    { name: '卫媚林', score: 68, clazz: '一班' },
    { name: '芮舟熠', score: 87, clazz: '二班' },
    { name: '舒娴焰', score: 99, clazz: '三班' },
    { name: '邵向歌', score: 96, clazz: '一班' },
    { name: '戚禄峥', score: 24, clazz: '二班' },
    { name: '花孝浪', score: 39, clazz: '三班' },
    { name: '巫霓盼', score: 11, clazz: '一班' },
    { name: '宗嵩律', score: 15, clazz: '二班' },
    { name: '诸骞焘', score: 63, clazz: '三班' },
    { name: '芮子心', score: 17, clazz: '一班' },
    { name: '滑旭斐', score: 18, clazz: '二班' },
    { name: '章敬才', score: 90, clazz: '三班' },
    { name: '宗梦群', score: 42, clazz: '一班' },
    { name: '陆琴玉', score: 20, clazz: '二班' },
    { name: '萧瑾列', score: 59, clazz: '三班' },
    { name: '吴花铃', score: 64, clazz: '一班' },
    { name: '凤宜竹', score: 84, clazz: '二班' },
    { name: '夏麟通', score: 96, clazz: '三班' },
    { name: '束蕙娇', score: 7, clazz: '一班' },
    { name: '赵尤静', score: 3, clazz: '二班' },
    { name: '缪刚源', score: 14, clazz: '三班' },
    { name: '戴攀薇', score: 37, clazz: '一班' },
    { name: '梅爽靓', score: 60, clazz: '二班' },
    { name: '施游斐', score: 13, clazz: '三班' },
    { name: '左晶娜', score: 70, clazz: '一班' },
    { name: '蒋令旻', score: 30, clazz: '二班' },
    { name: '昌玉素', score: 7, clazz: '三班' },
    { name: '唐平西', score: 89, clazz: '一班' },
    { name: '范顺裕', score: 60, clazz: '二班' },
    { name: '韦朦妍', score: 8, clazz: '三班' },
    { name: '邬典翰', score: 1, clazz: '一班' },
    { name: '钱旭润', score: 40, clazz: '二班' },
    { name: '万沙妮', score: 30, clazz: '三班' },
    { name: '劳财丁', score: 38, clazz: '一班' }
]

for (let i = 0; i < students.length; i++) {
    let student = students[i]
    student.score = Math.round(Math.random() * 100)
}

// console.log(students);

students = []
for (let i = 0; i < 100; i++) {
    let student = {
        name: '',
        score: Math.round(Math.random() * 100),
        clazz: i % 3 === 0 ? '一班' :
            i % 3 === 1 ? '二班' : '三班'
    }
    students.push(student)
}

console.log(students);