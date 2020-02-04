// 显示出基地址
// var LOCALHOST = 'http://192.168.172.65:8000';

var LOCALHOST = 'http://192.168.1.111:8000'

// 各个接口
var API = {
    Login: LOCALHOST + '/admin/login',
    Logout: LOCALHOST + '/admin/logout',
    Getuser: LOCALHOST + '/admin/getuser',

    // 文章类别
    category_search: LOCALHOST + '/admin/category_search',
    category_add: LOCALHOST + '/admin/category_add',
    category_delete: LOCALHOST + '/admin/category_delete',
}