/*
 * @Date: 2020-07-13 18:00:23
 * @LastEditors: chenamin
 * @LastEditTime: 2020-07-13 18:20:25
 * @FilePath: \amin\server\plugins\getPage.js
 * @desc: 
 */ 

    const dateFormat = require('./dateFormat')

    async function getPage(db, page, pageSize){
        const result = await Promise.all([
            db.countDocuments(),
            db.find().sort({time: -1}).limit(Number(size)).skip(Number(pageSize) * (page - 1 ))
        ])

        return {
            total: result[0],
            data: result[1],
            page: Number(page)
        }
    }

    module.exports = getPage