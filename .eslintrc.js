module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    parserOptions: {
        parser: '@babel/eslint-parser'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        //在rules中添加自定义规则
        //关闭组件命名规则
        // "vue/multi-word-component-names": ["error", {
        //     "ignores": ["index"]//需要忽略的组件名
        // }],
        "vue/multi-word-component-names": "off",
    },
    overrides: [
        {
            files: ['src/views/**/*.vue'],
            rules: {
                'vue/multi-word-component-names': 0,
            },
        },
    ]
}

