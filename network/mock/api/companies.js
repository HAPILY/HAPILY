const company = {
  id: 0,
  name: '株式会社Libry',
  vision: '一人ひとりが自分の可能性を最大限発揮できる会社を創る',
  company_url: 'https://example.jp',
  company_thumbnail_url: 'https://dummyimage.com/600x400/000/fff',
  icon_url: 'https://dummyimage.com/600x400/ffb0ff/fff',
  address: '東京都',
  title: 'あなたの夢応援させてください',
  detail:
    '－目標はIT分野におけるマルチプレイヤー－\n株式会社Libryでプロダクトマネージャー兼エンジニアをしております。\n\n前職は、株式会社ヒトクセという会社で営業とエンジニア及び、SmartCanvasというプロダクトのマネージャーをしておりました。\n・株式会社ヒトクセでの経歴\n<営業>\n2019年10月より、メディア向けの営業チームを新設し、チームリーダーに就任\n主にテレアポ、訪問、プリセールスなどを行い、年間500万ほどの売上を上げれるような営業チームを構築\n<エンジニア>\nWebアプリケーションエンジニアとして、SmartCanvas for Media(上記営業チームが販売しているメインのプロダクト)の開発・運用を経験\n<プロダクトマネージャー>\n主に、SmartCanvasというプロダクトの人員配置(開発部・営業部)、工数管理(開発部)また、売上・営業利益率の管理などを行う。',
  tags: [
    {
      id: 0,
      name: 'プロダクトオーナー',
    },
    {
      id: 1,
      name: 'ソフトウェアエンジニア',
    },
    {
      id: 2,
      name: 'ビジョン',
    },
    {
      id: 3,
      name: 'プログラミング',
    },
    {
      id: 4,
      name: '学生企業',
    },
    {
      id: 5,
      name: 'その他',
    },
  ],
};

export const getAll = {
  status: 200,
  message: 'SUCCESS',
  data: [
    { ...company },
    {
      ...company,
      id: 1,
      name: '株式会社首都圏物流',
      vision: '荷物と想いを届ける物流を目指す！',
      tags: [],
    },
  ],
};

export const create = {
  status: 200,
  message: 'SUCCESS',
};

export const getOne = {
  status: 200,
  message: 'SUCCESS',
  data: company,
};

export const update = {
  status: 200,
  message: 'SUCCESS',
};
