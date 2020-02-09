// 文章列表的工具类
var article = {
    // 显示
    get: function(page, type, status) {
        return $.get(API.article_search, {
            'page': page,
            'type': type,
            'state': status,
        })
    },
    //显示id的
    getById: function(id) {
        return $.get(API.article_search, { 'id': id })
    },
    add: function(fd) {
        return $.ajax({
            url: API.article_add,
            type: 'post',
            data: fd,
            processData: false, // 不允许处理数据
            contentType: false, // 不要设置请求头
        })
    },
    del: function(id) {
        return $.get(API.article_delete, {
            'id': id,
        })
    },
    edit: function(fd) {
        return $.ajax({
            url: API.article_edit,
            type: 'post',
            data: fd,
            processData: false, // 不允许处理数据
            contentType: false, // 不要设置请求头
        })
    }

}