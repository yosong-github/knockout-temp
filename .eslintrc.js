module.exports = {
  // 继承 Eslint 规则
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  env: {
    node: true, // 启用node中全局变量
    browser: true, // 启用浏览器中全局变量
    es6: true // 启用es6语法
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  rules: {
    'no-var': 2 // 不能使用 var 定义变量
  },
  ignorePatterns: [
    '*.sh',
    'node_modules',
    '*.md',
    '*.woff',
    '*.ttf',
    '.vscode',
    '.idea',
    'dist',
    '/public',
    '/docs',
    '.husky',
    '.local',
    '/bin',
    '/src/mock/*',
    'stats.html'
  ]
}
