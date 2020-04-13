const path = require("path");
const rootpath = path.dirname(__dirname); //执行一次dirname将目录定位到docs目录
const utils = require('../../scripts/utils-2');
// const utils = require('../../scripts/utils.js');
// const filehelper = require('../../scripts/initPage.js');
console.log(utils.generateSideBar(rootpath, './css'));

module.exports = {
  title: 'XFE DOCUMENT',
  description: '西山居前端开发文档',
  themeConfig: {
    base: '/xfe-document/',
    docsDir: 'docs',
    repo: 'XFETeam/xfe-document',
    repoLabel: '查看源码',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页！',
    smoothScroll: true,
    themeConfig: {
      lastUpdated: 'Last Updated', // string | boolean
    },
    sidebar: [
      {
        title: 'CSS文档',
        collapsable: false,
        sidebarDepth: 1,
        children: utils.generateSideBar(rootpath, './css')
      },
      {
        title: 'JAVASCRIPT文档',
        collapsable: false,
        sidebarDepth: 1,
        children: utils.generateSideBar(rootpath, './javascript')
      },
      {
        title: '其它文档',
        collapsable: false,
        sidebarDepth: 1,
        children: utils.generateSideBar(rootpath, './other')
      }
    ],
    nav: [
      // {
      //   text: 'Admin',
      //   link: '/admin/',
      //   target:'_blank'
      // }
    ]
  }
};
