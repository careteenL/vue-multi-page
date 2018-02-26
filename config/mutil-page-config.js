module.exports = {
    "url": "10.0.121.169",
    "port": "2333",
    "proxyTable": {
        "/nameAndGroupList": "http://m.jingjiren.focus-test.cn/nameAndGroupList",
        "/broker/score": "http://broker.focus-test.cn/broker/score",
        "/broker/activeness": "http://broker.focus-test.cn/broker/activeness",
        "/broker/getBrokerInfo": "http://broker-app.focus-test.cn/broker/getBrokerInfo"
    },
    "pageMap": {
        "myScore": {
            "aliasPage": "myScore",
            "realPage": "myScore.html"
        },
        "myLoupanRank": {
            "aliasPage": "myLoupanRank",
            "realPage": "myLoupanRank.html"
        }
    }
}
