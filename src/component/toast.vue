<template>
    <div class="toast">
        <div class="mask"></div>
        <div class="toast-wrap">
            <div>
                <i class="icon" v-show="success">&#xe848;</i>
                <i class="icon" v-show="fail">&#xe62d;</i>
            </div>
            <div class="text">
                {{toastMsg}}
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data () {
        return {

        }
    },
    computed: mapState({
        success: state => state.com.showSuccess,
        fail: state => state.com.showFail,
        toastMsg: state => state.com.toastMsg
    })
}
</script>

<style lang="scss" scoped>
.toast {
    z-index: 100;
    .toast-wrap {
        position: fixed;
        line-height: 22px;
        padding: 5px 10px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0,0,0,0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        z-index: 1002;
        .icon {
            font-size:2rem;
        }
        .text {
            font-size: 14px;
            color: #fff;
            margin-top: 20px;
        }
    }
    .mask {
        position: fixed;
	    width: 100%;
	    margin: 0 auto;
	    top: 0;
	    left: 0;
	    bottom: 0;
	    right: 0;
	    z-index: 1001;
	    background: rgba(0,0,0,.6);
    }
}
</style>
