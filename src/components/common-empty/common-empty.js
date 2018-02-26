export default {
    name: 'common-empty',
    data: function(){
        return {

        }
    },
    props: {
        emptyType: {
            type: String,
            default: 'EMPTY'
        },
        tip: {
            type: String,
            default: ''
        },
        more: {
            type: String,
            default: ''
        },
        link: {
            type: String,
            default: '/'
        },
        moreAction: {
            type: String,
            default: ''
        },
        moreFn: {
            type: Function,
            default: function() {
                console.log('more...');
            }
        }

    },
    computed: {
        emptyBg (val) {
            switch (this.emptyType) {
                case 'EMPTY':
                    return 'empty';
                    break;
                case 'NO-NETWORK':
                    return 'no-network';
                    break;
                default:
                    return 'empty';
            }
        }
    },
    methods: {
        emptyMoreFn: function() {
            this.$emit('emptyMoreFn');
        }
    }
}
