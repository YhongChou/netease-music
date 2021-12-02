/*
 * @author: zhouyinghong
 * @Date: 2021-12-02 17:13:58
 * @description: craco配置
 * @LastEditTime: 2021-12-02 17:16:19
 */
const path = require("path");

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
    webpack: {
        alias: {
            "@": resolve("src"),
            // "components": resolve("src/components")
        }
    }
}
