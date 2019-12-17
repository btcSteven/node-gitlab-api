const axios=require('axios');

let dotenv = require('dotenv');
dotenv.config('./env');

const private_token = process.env.PRIVATE_TOKEN;
const sudo = process.env.SUDO;
const domain= process.env.DOMAIN;


const http = axios.create({
    timeout: 20000,
    baseURL:domain
});

http.interceptors.request.use(
    config =>{
        config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
        // config.headers.post['Content-Type'] = 'application/json'
        config.headers['PRIVATE-TOKEN']=private_token;
        // config.headers['SUDO']=sudo;
        return config;
    },
    error =>{
        return Promise.reject();
    }
);

http.interceptors.response.use(
    response =>{
        if(response.status === 200){
            return response.data;
        } else{
            Promise.reject();
        }
    },
    error =>{
        console.log(error);
        return Promise.reject();
    }
);

module.exports = http;
