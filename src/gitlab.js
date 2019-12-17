const http = require('./http')
var qs = require('qs');

create_project();

async function create_project(){
    const params = {
        'name': 'cabin-node-test',
        'namespace_id': 'big-front-team',
        'description': '用node创建的gitlab测试仓库',
    }

    var res = await http.post('/projects', qs.stringify(params))
    console.log(res.data)
}

