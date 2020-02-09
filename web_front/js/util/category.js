// 文章类别的工具类
let category = {
    get: function() {
        return $.get(API.category)
    },
    show: function() {
        return $.get(API.search, {
            'perpage': 5,
        })
    },
    //热门
    rank: function(type) {
        return $.get(API.rank, {
            'type': type,
        })
    },
    lastest: function() {
        return $.get(API.lastest)

    }


    // del: function(id) {
    //     return $.post(API.category_delete, {
    //         'id': id,
    //     })
    // },
    // edit: function(id, name, slug) {
    //     return $.post(API.category_edit, {
    //         'id': id,
    //         'name': name,
    //         'slug': slug,
    //     })
    // }

}