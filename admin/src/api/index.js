/*
 * @Date: 2020-07-14 14:27:05
 * @LastEditors: chenamin
 * @LastEditTime: 2020-07-14 17:07:34
 * @FilePath: \amin\admin\api\index.js
 * @desc: 
 */ 
import http from './fetch'
import qs from 'qs';
const { post, get } = http;
const { stringify } = qs;
const baseUrl = process.env.API_URL ? process.env.API_URL : "";

//get方式
export default {
    async  getArticles(params) {
        return get(`${baseUrl}/article?${stringify(params)}`);
    },
    // async fetchData2(params) {
    //     return post(`${baseUrl}/api/aaa`,params);
    // }
}
 