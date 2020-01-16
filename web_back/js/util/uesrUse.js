// 创建用户功能的对象 ， 把所有的功能放在这里

var uesr = {
    login: function(nameuesr, password) {
        return $.post(API.Login, {
            'user_name': nameuesr,
            'password': password,
        })
    },
    logout: function() {
        return $.post(API.Logout)
    },
    show: function() {
        return $.get(API.Getuser)
    }
}