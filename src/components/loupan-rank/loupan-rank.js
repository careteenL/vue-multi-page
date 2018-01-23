import CommonHeader from 'components/common-header/common-header.vue'

export default {
    name: 'my-score',
    data () {
        return {

        }
    },
    components: {
        'common-header': CommonHeader
    },
    beforeMount () {
        document.body.style.backgroundColor = '#f8f8f8';
        document.querySelector('#app').style.backgroundColor = '#f8f8f8';
        this.getData();
    },
    methods: {
        getData () {

        },
        goBack () {
            console.log(1111);
            // window.location.history.go(-1);
        },

        tipHandle () {
            this.$toast({
                tip: '连接服务器出错！请刷新重新连接！'
            })
            // this.$router.push({
            //     name: 'help',
            // })
        }
    }
}
