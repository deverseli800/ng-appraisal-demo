// vue.config.js
module.exports = {
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    'primary-color': '#4160D3',
                    'link-color': '#4160D3',
                    'border-radius-base': '2px',
                    'font-family': 'Nunito Sans',
                },
                javascriptEnabled: true,
            },
        },
    },
    configureWebpack: {
        entry: {
            app: './src/index.js',
            module: './src/module.js'
        }
    }
};