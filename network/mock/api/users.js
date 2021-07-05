const userData = {
  user_detail: {
    id: 0,
    name: 'Taichiro Hasegawa',
    first_name: 'Taichiro',
    last_name: 'Hasegawa',
    create_date: '2021.01.07',
    position: '東京大学 法学部',
    icon_url: 'https://dummyimage.com/600x400/ffb0ff/fff',
    title: '為せばなる',
    detail:
      '－ 目標はIT分野におけるマルチプレイヤー －\n株式会社Libryでプロダクトマネージャー兼エンジニアをしております。\n\n前職は、株式会社ヒトクセという会社で営業とエンジニア及び、SmartCanvasというプロダクトのマネージャーをしておりました。\n・株式会社ヒトクセでの経歴\n<営業>\n2019年10月より、メディア向けの営業チームを新設し、チームリーダーに就任\n主にテレアポ、訪問、プリセールスなどを行い、年間500万ほどの売上を上げれるような営業チームを構築\n<エンジニア>\nWebアプリケーションエンジニアとして、SmartCanvas for Media(上記営業チームが販売しているメインのプロダクト)の開発・運用を経験\n<プロダクトマネージャー>\n主に、SmartCanvasというプロダクトの人員配置(開発部・営業部)、工数管理(開発部)また、売上・営業利益率の管理などを行う。',
    created_at: '2021.01.07',
  },
  school: [
    {
      id: 0,
      title: '甲南大学',
      start_date: '',
      end_date: '2019年3月',
      class_name: '法学部',
    },
    {
      id: 1,
      title: '西宮南高等学校',
      start_date: '',
      end_date: '2015年3月',
      class_name: '普通科',
    },
  ],
  work_history: [
    {
      id: 0,
      title: '株式会社Libry',
      start_date: '2020年9月',
      end_date: '在籍中',
      detail: [
        {
          position: 'プロダクトオーナー(Libry for Teacher)',
          job_detail: '',
        },
        {
          position: 'エンジニア',
          job_detail: '',
        },
      ],
    },
    {
      id: 1,
      title: '株式会社ヒトクセ',
      start_date: '2019年2月',
      end_date: '2020年9月',
      detail: [
        {
          position: 'エンジニア',
          job_detail: 'Vue.js, Nuxt.js, Ruby on Rails',
        },
        {
          position: '営業',
          job_detail: 'メディア企業向け法人営業',
        },
        {
          position: 'プロダクトマネージャー',
          job_detail: '',
        },
      ],
    },
  ],
  writings: [
    {
      id: 0,
      title: 'フロントリニューアルにVue3.0を採用した話',
      thumbnail: 'https://dummyimage.com/600x400/000/fff',
      redirect_url: '#',
      created_date: '2021年1月25日',
    },
  ],
  want_tags: [
    {
      id: 0,
      name: '留学',
    },
    {
      id: 1,
      name: '起業',
    },
    {
      id: 2,
      name: '稼ぐ',
    },
    {
      id: 3,
      name: 'プログラミング',
    },
  ],
  performances: [
    {
      id: 0,
      title: 'Nombey|次に飲みたい日本酒が見つかるサービス 開発',
      thumbnail: 'https://dummyimage.com/600x400/000/fff',
      redirect_url: '#',
      post_date: '2021年1月25日',
    },
    {
      id: 1,
      title: 'SmartCanvas',
      thumbnail: 'https://dummyimage.com/600x400/000/fff',
      redirect_url: '#',
      post_date: '2021年1月25日',
    },
    {
      id: 2,
      title: 'Bugsuku 開発',
      thumbnail: 'https://dummyimage.com/600x400/000/fff',
      redirect_url: '#',
      post_date: '2021年1月25日',
    },
  ],
};

export const getOne = {
  status: 200,
  message: 'SUCCESS',
  data: { ...userData },
};

export const update = {
  status: 200,
  message: 'SUCCESS',
  data: { ...userData },
};
