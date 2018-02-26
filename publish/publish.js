/**
 *
 * @desc 将以下待 修改处 的内容修改为 当前项目所需
 */

console.log('publishing...');
var branch = process.argv[2]

if (!branch) {
    console.log('输入后端分支： node publish/publish.js dev');
    return
}

var path = require('path');
var fs = require('fs');
var root = path.resolve(__dirname);
require('shelljs/global');

/**  build **/

console.log(root);
exec(`cd ${root} && npm run build`);

console.log('\nbuilded ok\n');
/**  build end**/

/** copy to backend **/
// [待修改：当前项目代码库]
exec(`git clone -b ${branch} git@code.ops.focus.cn:system/xxx.git`);

var staticFe = './dist/static';  // 静态资源
var vmFe = './dist/vm/';  // 模板文件

/**
 *
 * @desc 新增页面时新增一项，目的：将页面文件后缀改为vm，后端才能找到对应页面渲染。
 *       注：新增页面时需告知后端同学 页面name
 */
var pageMap = {
    'testPage.html': 'testPage.vm'
};

var staticBe = './xxx/res/xxx/static/';  // 待修改：后端静态资源存放目录
var vmBe = './xxx/code/src/main/resources/view/xxx/';  // 待修改：后端模板目录

// 覆盖模板和资源文件
rm('-rf', staticBe);
cp('-R', staticFe, staticBe);
rm('-rf', vmBe);
cp('-R', vmFe, vmBe);

// .html -> .vm
for (key in pageMap) {
    cp('-R', vmFe + key, vmBe + '/' + pageMap[key]);
}

// 修改资源所在环境
find(staticBe).filter(function(file) {
    var extname = path.extname(file);
    if (extname === '.css' || extname === '.js') {
      sed('-i', /url\(\/\/\/\$\%7Bres\_domain\%7D\//g, "url(/", file);
    }
});

/** copy to backend end**/

/** push to backend **/
// xxx 为后端代码库name
exec(`cd xxx && git add *`);
exec(`cd xxx && git pull origin ${branch}`);
exec("cd xxx && git commit -m 'update: fe commit'");
exec(`cd xxx && git push origin ${branch}`);

rm('-rf', './xxx');
/** push to backend end**/
console.log('publish done...');
