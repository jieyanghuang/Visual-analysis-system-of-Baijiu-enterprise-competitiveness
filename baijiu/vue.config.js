module.exports = {
    devServer: {
        disableHostCheck: false,
        host: "127.0.0.1",
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: 'http://localhost:5000'
    },
};