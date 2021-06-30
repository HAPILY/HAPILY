const dream = {
  id: 0,
  title: '【諦めたくない！】コロナで海外留学打ち切り…十年越しの夢の続きを',
  why_text: 'string',
  how_text: 'string',
  can_text: 'string',
  money: 10000,
  thumnail_url: 'https://dummyimage.com/600x400/000/fff',
  user_name: 'user0',
  user_icon_url: 'https://dummyimage.com/600x400/ffb0ff/fff',
};

export const getAll = {
  status: 200,
  message: 'SUCCESS',
  data: [
    { ...dream },
    {
      id: 1,
      title: '【諦めたくない！】コロナで海外留学打ち切り…十年越しの夢の続きを',
      why_text: 'string',
      how_text: 'string',
      can_text: 'string',
      money: 150000,
      thumnail_url: 'https://dummyimage.com/600x400/000/fff',
      user_name: 'user1',
      user_icon_url: 'https://dummyimage.com/600x400/ffb0ff/fff',
    },
    {
      id: 2,
      title: '【諦めたくない！】コロナで海外留学打ち切り…十年越しの夢の続きを',
      why_text: 'string',
      how_text: 'string',
      can_text: 'string',
      money: 1150000,
      thumnail_url: 'https://dummyimage.com/600x400/000/fff',
      user_name: 'user2',
      user_icon_url: 'https://dummyimage.com/600x400/ffb0ff/fff',
    },
    {
      id: 3,
      title: '【諦めたくない！】コロナで海外留学打ち切り…十年越しの夢の続きを',
      why_text: 'string',
      how_text: 'string',
      can_text: 'string',
      money: 1020000,
      thumnail_url: 'https://dummyimage.com/600x400/000/fff',
      user_name: 'user3',
      user_icon_url: 'https://dummyimage.com/600x400/ffb0ff/fff',
    },
    {
      id: 4,
      title: '【諦めたくない！】コロナで海外留学打ち切り…十年越しの夢の続きを',
      why_text: 'string',
      how_text: 'string',
      can_text: 'string',
      money: 1055000,
      thumnail_url: 'https://dummyimage.com/600x400/000/fff',
      user_name: 'user4',
      user_icon_url: 'https://dummyimage.com/600x400/ffb0ff/fff',
    },
  ],
};

export const create = {
  status: 200,
  message: 'SUCCESS',
  data: dream,
};

export const getOne = {
  status: 200,
  message: 'SUCCESS',
  data: dream,
};

export const update = {
  status: 200,
  message: 'SUCCESS',
  data: dream,
};
