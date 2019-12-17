let dotenv = require('dotenv');
dotenv.config('./env');
var child_process = require("child_process");

const private_token = process.env.PRIVATE_TOKEN;
const domain= process.env.DOMAIN;

var curl = `curl --request POST --header 'PRIVATE-TOKEN:${private_token}' --data 'name=cabin-node-test&namespace_id=1102&description=用node创建的gitlab测试仓库' '${domain}/projects'`

var child = child_process.exec(curl, function(err, stdout, stderr) {

    console.log(stdout);

});