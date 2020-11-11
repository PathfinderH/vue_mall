//项目发布阶段需要用到的babel插件
const prodPlugins = []
if (process.env.NODE_ENV === 'production') {
    prodPlugins.push('transform-remove-console')
}

module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    plugins: [
        ['import', {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
        }, 'vant'],
        //发布阶段插件数组
        ...prodPlugins,
        "@babel/plugin-syntax-dynamic-import"
    ]
}