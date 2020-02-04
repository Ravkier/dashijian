// 显示出基地址
// var LOCALHOST = 'http://192.168.172.65:8000';

var LOCALHOST = 'http://192.168.1.111:8000'

// 各个接口
var API = {
    // 登录
    Login: LOCALHOST + '/admin/login',
    // 退出
    Logout: LOCALHOST + '/admin/logout',
    // 显示
    Getuser: LOCALHOST + '/admin/getuser',

    // 文章类别
    // 显示
    category_search: LOCALHOST + '/admin/category_search',
    // 添加
    category_add: LOCALHOST + '/admin/category_add',
    // 删除
    category_delete: LOCALHOST + '/admin/category_delete',
    // 编辑
    category_edit: LOCALHOST + '/admin/category_edit',

    // 文章列表
    // 显示
    article_search: LOCALHOST + '/admin/search',
    // 删除
    article_delete: LOCALHOST + '/admin/article_delete',
    //新增
    article_add: LOCALHOST + '/admin/article_publish',


}