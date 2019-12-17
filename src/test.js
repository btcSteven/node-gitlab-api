const http = require('./http')
getProjects();

async function getProjects(){
    try{
        var res= await http.get('/namespaces')
        console.log(res)
    }catch(e){
        console.log(e)
    }
}
