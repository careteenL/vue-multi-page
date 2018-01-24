// const fs = require('fs');
// const path = require('path');
// const fetch = require('node-fetch');
// const beautify = require('js-beautify').js_beautify;
// const mutilPage = require('./mutil-page')
// const cfgs = require('../../config');
//
// function resolve(dir) {
//     return path.join(__dirname, '../../', dir)
// }
//
// module.exports = (app) => {
//
//     let listTpl = ['<h3>page</h3>'];
//     Object.keys(mutilPage.pagesMap).map(page => {
//         let pageItem = mutilPage.pagesMap[page];
//         listTpl.push(
//             `<p style="text-indent:20px"><a href="/${pageItem.url}">${page}</a>${pageItem.data ? ` <a href = "${pageItem.data}" > 直出数据 </a>` : ''}</p >`);
//     })
//
//     const dist = resolve('dist');
//     if (!fs.existsSync(dist)) {
//         fs.mkdirSync(dist);
//     }
//     fs.writeFileSync(`${dist}/list.html`, listTpl.join(' '), 'utf8')
// }
