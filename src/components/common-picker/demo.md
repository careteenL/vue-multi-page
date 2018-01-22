```
this.$picker({
    select: [1991 ,2 , 10],

    onSelect(val, ids, names) {
        console.log(val, ids, names);
    },

    getData: [
        (id, name) => { // 异步数据用promise

            return new Promise((resolve) => {
                let tmp = [];
                for (var i = 1990; i <= 2010; i++) {
                    tmp.push({
                        id: i,
                        name: i
                    })

                }

                setTimeout(function() {
                    resolve(tmp)
                }, 100)

            })

        },
        (id, name) => {
            return new Promise((resolve) => {
                let tmp = [];
                for (var i = 1; i <= 12; i++) {
                    tmp.push({
                        id: i,
                        name: i
                    })

                }

                setTimeout(function() {
                    resolve(tmp)
                }, 10)

            })
        },
        (id, name) => { // 同步数据
            console.log(id, name);
            let tmp = [];
            for (var i = 1; i <= 31; i++) {
                tmp.push({
                    id: i,
                    name: i
                })
            }
            return tmp
        }
    ]
})
```

```
this.$picker({

    select: [1, 2, 10],

    onSelect(val) {
        console.log(val);
    },

    getData: [
        (id, name) => {

            return new Promise((resolve) => {
                $$cityModel.getProvince(() => {
                    this.provinceList.map((item) => {
                        item.id = item.provinceId;
                        item.name = item.provinceName
                    })
                    resolve(this.provinceList)

                }, {}, this)

            })

        },
        (id, name) => {
            return new Promise((resolve) => {
                $$cityModel.getCity(() => {
                    this.cityList.map((item) => {
                        item.id = item.cityId;
                        item.name = item.cityName
                    })
                    resolve(this.cityList)

                }, id, this)

            })
        },
        (id, name) => {
            console.log(id, name);
            let tmp = [];
            for (var i = 1; i <= 31; i++) {
                tmp.push({
                    id: i,
                    name: i
                })
            }
            return tmp
        }
    ]
})
```
