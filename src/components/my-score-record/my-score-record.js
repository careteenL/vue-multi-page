import CommonHeader from 'components/common-header/common-header.vue'

export default {
    name: 'my-score-record',
    data () {
        return {

        }
    },
    components: {
        'common-header': CommonHeader
    },
    beforeMount () {
        document.body.style.backgroundColor = '#fff';
        document.querySelector('#app').style.backgroundColor = '#fff';
    },
    methods: {
        tipHandle () {
            var _this = this;
            _this.$datePicker({
                select: [1991, 1, 21],
                line: 5,
                onSelect(val, ids, names, instance) {
                    console.log(val);
                    instance.close();
                }
            })
        }
    }
}
