/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: '宿舍網路',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'category',
          label: '新生訓練-外修知識',
          link: {
            type: 'generated-index',
          },
          items: [
            'Yunnet/2022-10-05 新生訓練/part1',
            'Yunnet/2022-10-05 新生訓練/part2',
            'Yunnet/2022-10-05 新生訓練/part3',
            'Yunnet/2022-10-05 新生訓練/part5',
            'Yunnet/2022-10-05 新生訓練/part6',
          ],
        },
        'Yunnet/2022-10-12 外修考檢討',
        'Yunnet/2022-10-12 期初會',
      ],
    },
    {
      type: 'category',
      label: '社團課程資料',
      link: {
        type: 'generated-index',
        title: '111學年度上學期社團課程資料',
        description: '111學年度上學期社團課程資料',
      },
      items: [
        {
          type: 'category',
          label: 'WSL下載+安裝',
          link: {
            type: 'generated-index',
            title: 'WSL下載+安裝',
            description: 'WSL安裝',
          },
          items: [
            '上學期/2022-10-05 WSL 安裝/2022-10-05 WSL安裝',
            '上學期/2022-10-05 WSL 安裝/套件',
          ],
        },
        '上學期/2022-10-19 Linux',
        '上學期/2022-10-26 git',
        '上學期/2022-11-16 C++++',
        {
          type: 'category',
          label: '網管幹訓',
          link: {
            type: 'generated-index',
            title: '網管幹訓',
            description: '2022-11-18~2022-11-20 網管幹訓',
          },
          items: [
            '上學期/2022-11-19 網管幹訓/2022-11-18 請先裝好依賴',
            '上學期/2022-11-19 網管幹訓/2022-11-19 nodejs + npm',
            '上學期/2022-11-19 網管幹訓/2022-11-19 Ai',
            '上學期/2022-11-19 網管幹訓/2022-11-20 網路概論',
            '上學期/2022-11-19 網管幹訓/2022-11-20 Docker',
          ],
        },
        '上學期/2022-11-23 JavaScript',
        '上學期/2022-11-30 Python',
        '上學期/2022-12-07 SQL',
        '上學期/2022-12-14 OOP',
        '上學期/2022-12-21 Hexo',
        '上學期/2022-12-28 cookie and session',
      ],
    },
  ],
};

module.exports = sidebars;