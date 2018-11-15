module.exports = {
    devServer: {
        port: 8089,
        proxy: {
            '/coolscreen': {
                target: 'http://10.143.90.228:19085',
                changeOrigin: true,
            }
        }
    },
    lintOnSave: false,//禁止 eslint 警告
}