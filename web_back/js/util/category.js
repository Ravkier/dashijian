// 文章类别的工具类
var category = {
    get: function() {
        return $.get(API.category_search)
    },
    add: function(name, slug) {
        return $.post(API.category_add, {
            'name': name,
            'slug': slug,
        })
    },
    del: function(id) {
        return $.post(API.category_delete, {
            'id': id,
        })
    }

}