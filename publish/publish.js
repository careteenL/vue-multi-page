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
exec(`git clone -b ${branch} git@code.ops.focus.cn:system/wap-broker.git`);

var staticFe = './dist/static';  // 静态资源
var vmFe = './dist/vm/';  // 模板文件

var pageMap = {
    'myScore.html': 'myScore.vm',
    'myLoupanRank.html': 'myLoupanRank.vm'
};

var staticBe = './wap-broker/res/wap-activity/static/';  // 后端静态资源存放目录
var vmBe = './wap-broker/code/src/main/resources/view/wap-activity/';  // 后端模板目录

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
exec(`cd wap-broker && git add *`);
exec(`cd wap-broker && git pull origin ${branch}`);
exec("cd wap-broker && git commit -m 'update: fe commit'");
exec(`cd wap-broker && git push origin ${branch}`);

rm('-rf', './wap-broker');
/** push to backend end**/
console.log('publish done...');
