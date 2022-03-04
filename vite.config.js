import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'), //别名配置 在项目里可以使用 @ 表示 src 文件夹
        },
    },
    base: './', // 开发或生产环境服务的公共基础路径
    server: {
        open: true,
        port: 8080, // 指定开发服务器端口
        proxy: { // 开发环境服务器代理  详细文档 https://github.com/http-party/node-http-proxy#options
            "/admin": { // 匹配上了的路径则会被代理  可以使用正则'^/fallback/.*'
                target: "https://www.test.com", // 访问的服务器
                changeOrigin: true,
                ws: true, // 是否开启websockets代理
                cookieDomainRewrite: { // 重写cookie 的domain
                    "*": ""
                },
            }
        }
    }
})