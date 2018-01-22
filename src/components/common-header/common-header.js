export default {
    name: 'common-header',
    data () {
        return {

        }
    },
    props: {
        link: {
            type: String,
            default: '/'
        },
        action: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        },
        titleLink: {
            type: String,
            default: ''
        },
        tip: {
            type: String,
            default: ''
        },
        tipLink: {
            type: String,
            default: 'javascript:;'
        },
        tipAction: {
            type: String,
            default: ''
        }
    },
    computed: {
        tipActionReal (val) {
            switch (this.tipAction) {
                case 'icon-help':
                    return ''
                    break;
                case 'icon-date':
                    return ''
                    break;
                default:
                    return this.tipAction;
            }
        },
        tipClass (val) {
            switch (this.tipAction) {
                case 'icon-help':
                    return 'icon-help'
                    break;
                case 'icon-date':
                    return 'icon-date'
                    break;
                default:
                    return '';
            }
        }
    },
    methods: {
        goBack() {
            this.$emit('goBack')
        },
        tipHandle() {
            this.$emit('tipHandle')
        }
    }
}
