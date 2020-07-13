/*
 * @Date: 2020-07-13 17:21:14
 * @LastEditors: chenamin
 * @LastEditTime: 2020-07-13 17:33:12
 * @FilePath: \amin\server\plugins\requestResult.js
 * @desc: 统一处理返回值
 */ 
function requestResult(data){
    if(data){
        return {
            status: 1,
            message: 'success',
            body: data
        }
    }else{
        return {
            status: 2,
            message: 'error',
            body: data
        }
    }
}

module.exports = requestResult