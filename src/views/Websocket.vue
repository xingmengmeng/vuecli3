<template>
    <section>
        websocket 测试
        <input type="text" @change="sendData" v-model="mess">
        <input type="button" value="发送" @click="sendData">
        <ul>
            <li v-for="(item,index) in resData" :key="index">{{item}}</li>
        </ul>
    </section>
</template>
<script>
export default {
    data() {
        return {
            mess: '',
            ws: null,
            resData: [],
        }
    },
    created() {
        this.wsConnect();
    },
    destroyed() {
        this.ws.close();
    },
    methods: {
        wsConnect() {
            this.ws = new WebSocket('ws://localhost:3001');
            this.ws.onopen = (e) => {
                console.log("连接服务器成功");
            }
            this.ws.onclose = this.websocketclose;
            this.ws.onerror = () => {
                console.log("连接出错");
            }
            this.ws.onmessage = this.message;
        },
        message(res) {
            this.resData.push(res.data);
            this.mess = '';
        },
        websocketclose() {
            console.log('服务器关闭');
        },
        sendData() {
            this.ws.send(this.mess);
        }
    }
}
</script>

