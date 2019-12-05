let Mock=require("mockjs");

let data=Mock.mock({
    "list":[{
        "dataimg":Mock.Random.image("200x100"),
        "datatitle":"@ctitle",
        "dataday":"@date()"
    }]
})

module.exports=data