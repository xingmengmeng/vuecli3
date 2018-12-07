module.exports = {
    devServer: {
        port: 8089,
        proxy: {
            '/api': {
                target: 'http://localhost:3001',
                changeOrigin: true,
            }
        }
    },
    lintOnSave: false,//禁止 eslint 警告
}