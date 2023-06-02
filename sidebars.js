/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  /*
  {
        type: 'category',
        label: '課程資料',
        link: {
          type: 'generated-index',
          title: '課程資料',
          description:
            "這是一些課程資料，正在更新中",
      },
      items: [
      {
        type: 'autogenerated',
        dirName: 'class',
        },
      ],
    },
  */
  current: [
    {
      type: 'category',
      label: '宿舍網路',
      link: {
        type: 'generated-index'
      },
      items: [
        {
          type: 'category',
          label: '新生訓練-外修知識',
          link: {
            type: 'generated-index'
          },
          items: [
            '111/Yunnet/2022-10-05 新生訓練/part1',
            '111/Yunnet/2022-10-05 新生訓練/part2',
            '111/Yunnet/2022-10-05 新生訓練/part3',
            '111/Yunnet/2022-10-05 新生訓練/part5',
            '111/Yunnet/2022-10-05 新生訓練/part6'
          ]
        },
        '111/Yunnet/2022-10-12 外修考檢討',
        '111/Yunnet/2022-10-12 期初會',
        '111/上學期/2022-11-19 網管幹訓/2022-11-20 網路概論'
      ]
    },
    {
      type: 'category',
      label: '上學期社團課程資料',
      link: {
        type: 'generated-index',
        title: '111學年度上學期社團課程資料',
        description: "111學年度上學期社團課程資料"
      },
      items: [
        {
          type: 'category',
          label: 'WSL下載+安裝',
          link: {
            type: 'generated-index',
            title: 'WSL下載+安裝',
            description: "WSL安裝"
          },
          items: [
            '111/上學期/2022-10-05 WSL 安裝/套件',
            '111/上學期/2022-10-05 WSL 安裝/2022-10-05 WSL安裝'
          ]
        },
        '111/上學期/2022-10-19 Linux',
        '111/上學期/2022-10-26 git',
        '111/上學期/2022-11-16 C++++',
        {
          type: 'category',
          label: '網管幹訓',
          link: {
            type: 'generated-index',
            title: '網管幹訓',
            description: "2022-11-18~2022-11-20 網管幹訓"
          },
          items: [
            '111/上學期/2022-11-19 網管幹訓/2022-11-18 請先裝好依賴',
            '111/上學期/2022-11-19 網管幹訓/2022-11-19 nodejs + npm',
            '111/上學期/2022-11-19 網管幹訓/2022-11-19 Ai',
            '111/上學期/2022-11-19 網管幹訓/2022-11-20 網路概論',
            '111/上學期/2022-11-19 網管幹訓/2022-11-20 Docker'
          ]
        },
        '111/上學期/2022-11-23 JavaScript',
        '111/上學期/2022-11-30 Python',
        '111/上學期/2022-12-07 SQL',
        '111/上學期/2022-12-14 OOP',
        '111/上學期/2022-12-21 Hexo',
        '111/上學期/2022-12-28 cookie and session'
      ]
    },
    {
      type: 'category',
      label: '下學期社團課程資料',
      link: {
        type: 'generated-index',
        title: '111學年度下學期社團課程資料',
        description: "111學年度下學期社團課程資料"
      },
      items: [
        {
          type: 'autogenerated',
          dirName: "111/下學期"
        }
      ]

    },
    {
      type: 'category',
      label: '周末研討會',
      link: {
        type: 'generated-index',
        title: '111學年度下學期周末研討會',
        description: "111學年度下學期周末研討會"
      },
      items: [
        {
          type: 'autogenerated',
          dirName: "111/Sunday"
        }
      ]

    },
    
  ],
  announcement: [
    {
      type: 'category',
      label: '公告',
      link: {
        type: 'generated-index',
        title: '系統及更新公告',
    },
    items: [
    {
      type: 'autogenerated',
      dirName: 'announcement',
      },
    ],
  },
  ],
  late:[
    {
      type: 'category',
      label: '往年社團課程資料',
      link: {
        type: 'generated-index',
        title: '往年社團課程資料',
        description:
          "往年社團課程資料",
    },
    items: [
      //110
      {
        type: 'category',
          label: '110學年度',
          link: {
            type: 'generated-index',
            title: '110社團課程資料',
        },
        items: [
          {
            type: "category",
            label: "網路管理",
            link: {
              type: "generated-index"
            },
            items: [
              "110/Yunnet/2021-10-20 外修訓練",
              "110/Yunnet/2021-10-20 環境安裝",
              "110/Yunnet/2021-10-27 外修考+檢討"
            ]
          },
          {
            type: "category",
            label: "上學期",
            link: {
              type: "generated-index",
              title: "110學年度上學期社團課程資料",
              description: "110學年度上學期社團課程資料"
            },
            items: [
              "110/上學期/2021-11-17 LInux",
              "110/上學期/2021-11-24 git",
              "110/上學期/2021-12-01 前後端",
              "110/上學期/2021-12-08 Python超超超入門",
              "110/上學期/2021-12-15 RE_從0開始的JS",
              {
                type: "category",
                label: "幹部訓練",
                link: {
                  type: "generated-index"
                },
                items: [
                  "110/上學期/幹訓/2021-12-18Mechine Learing 超入門",
                  "110/上學期/幹訓/2021-12-18Nuxt從入門到放棄",
                  "110/上學期/幹訓/2021-12-18Vue",
                  "110/上學期/幹訓/2021-12-18網路概論",
                  "110/上學期/幹訓/2021-12-19 OOpython",
                  "110/上學期/幹訓/2021-12-19Docker好好玩"
                ]
              }
            ]
          },
          {
            type: "category",
            label: "下學期",
            link: {
              type: "generated-index",
              title: "110學年度下學期社團課程資料",
              description: "110學年度下學期社團課程資料"
            },
            items: [
              "110/下學期/2022-03-02 SQL I 資料庫",
              "110/下學期/2022-03-09 SQL II 基礎MySQL",
              "110/下學期/2022-03-16 typescript",
              "110/下學期/2022-03-23 Vuetify",
              "110/下學期/2022-03-30 Vuetify && Vue router_",
              "110/下學期/2022-04-27 Backend",
              "110/下學期/2022-05-04 tsoa",
              "110/下學期/2022-05-11 typeORM",
              "110/下學期/2022-05-18 爬蟲",
              "110/下學期/2022-05-25 VueX",
              "110/下學期/2022-06-01 Cookies && Session",
              "110/下學期/2022-06-01 回顧一下"
            ]
          }
        ]
      },
      //109
      {
        type: 'category',
          label: '109學年度',
          link: {
            type: 'generated-index',
            title: '109社團課程資料',
        },
        items: [
          {
            type: "category",
            label: "網路管理",
            link: {
              type: "generated-index"
            },
            items: [
              "109/Yunnet/2020-10-07 109學年度外修課程",
              "109/Yunnet/2020-10-07 外修考檢討"
            ]
          },
          {
            type: "category",
            label: "上學期",
            link: {
              type: "generated-index",
              title: "109學年度上學期社團課程資料",
              description: "109學年度上學期社團課程資料"
            },
            items: [
              "109/上學期/2020-10-07 Environment",
              "109/上學期/2020-10-14 Linux",
              "109/上學期/2020-10-21 git",
              "109/上學期/2020-10-28 python",
              "109/上學期/2020-11-18 frontend",
              {
                type: "category",
                label: "幹部訓練",
                link: {
                  type: "generated-index"
                },
                items: [
                  "109/上學期/2020-11-21 幹訓/2020-11-21 First Vuetify Introduction",
                  "109/上學期/2020-11-21 幹訓/2020-11-21 Information Security",
                  "109/上學期/2020-11-21 幹訓/2020-11-21 Web Application",
                  "109/上學期/2020-11-21 幹訓/2020-11-22 docker"
                ]
              },
              "109/上學期/2020-11-25 JS basic",
              "109/上學期/2020-12-02 querySelector",
              "109/上學期/2020-12-09 Vue Introduction",
              "109/上學期/2020-12-16 Second Vuetify Introduction",
              "109/上學期/2020-12-23 JS OPP"
            ]
          },
          {
            type: "category",
            label: "下學期",
            link: {
              type: "generated-index",
              title: "109學年度下學期社團課程資料",
              description: "109學年度下學期社團課程資料"
            },
            items: [
              "109/下學期/2021-03-03 SQL",
              "109/下學期/2021-03-10 more SQL",
              "109/下學期/2021-03-17 Vue Cli Introduce",
              "109/下學期/2021-03-24 moremoreSQL",
              "109/下學期/2021-04-07 mostSQL"
            ]
          }
        ]
      },
      //108
      {
        type: "category",
        label: "108學年度",
        link: {
          type: "generated-index",
          title: "108學年度社團課程資料",
          description: "108學年度社團課程資料"
        },
        items: [
          "108/Python Virtual Environment",
          "108/Sanic API",
          "108/HTTP",
          "108/Sanic with json",
          "108/Lets Team Work"
        ]
        
      }
    ],  
  }
  ]
};

module.exports = sidebars;
