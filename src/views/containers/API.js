const baseUrl = ''; //"http://172.26.2.248:8094/game  http://localhost:8180"
const env = '123dev';
import {
    pipeline
}from './mock'

const API={
    getTopicInfo:function (queryString) {
        return GET(baseUrl+"/topic"+queryString,pipeline).then((response)=>{
            return response.topicInfo;
        })
    }
}

function GETS(uri, mockData) {
    function http() {
        return fetch(uri, {
            method: 'get',
            credentials: 'include',
        });
    }
    return new Promise((resolve) => {
        setTimeout(function() {
            resolve(mockData);
        }, 1000);
    });
}

function GET(uri, mockData) {
    function http() {
        return fetch(uri, {
            method: 'get',
            credentials: 'include',
        });
    }
    if (mockData !== undefined && env === 'dev') {
        return new Promise((resolve) => {
            setTimeout(function() {
                resolve(mockData);
            }, 1000);
        });
    } else {
        return httpResolve(http);
    }
}

function POST(uri, data, json) {
    function http() {
        return fetch(`${uri}`, {
            method: 'post',
            headers: {
                'Content-Type': json ? 'application/json' : 'application/x-www-form-urlencoded',
            },
            credentials: 'include',
            body: json ? JSON.stringify(data) : new URLSearchParams(data).toString(),
        });
    }
    return httpResolve(http);
}

function PUT(uri, data, json) {
    function http() {
        return fetch(`${uri}`, {
            method: 'put',
            headers: {
                'Content-Type': json ? 'application/json' : 'application/x-www-form-urlencoded',
            },
            credentials: 'include',
            body: json ? JSON.stringify(data) : new URLSearchParams(data).toString(),
        });
    }
    return httpResolve(http);
}

function DELETE(uri) {
    function http() {
        return fetch(uri, {
            method: 'delete',
            credentials: 'include',
        });
    }
    return httpResolve(http);
}

function httpResolve(http) {
    return http()
        .then((response) => {
            if (response.redirected) {
                const redirect = '#/login';
                window.location.replace(redirect);
            }
            return response;
        })
        .then((response) => {
            const responseOk = response.ok;
            const status = response.status;
            if (responseOk) {
                return response.json();
            } else {
                return {
                    errMsg: '服务器异常：' + status,
                };
            }
        })
        .catch((response) => {
            console.error(response.message);
            return {};
        });
}

export default API;