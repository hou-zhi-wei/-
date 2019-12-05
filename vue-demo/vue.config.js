let data = require("./src/mock/mock")
let dataList=require("./src/mock/data.json")
module.exports = {
    devServer: {
        before: function (app) {
            //全部数据
            app.get("/api/list", (req, res) => {
                console.log(dataList)
                res.json(dataList)
            })
        }
    }
}