const dream = {
  id: 0,
  title: "【諦めたくない！】コロナで海外留学打ち切り…十年越しの夢の続きを",
  why_text:
    "テキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入ります",
  how_text:
    "テキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますΩテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入ります",
  can_text:
    "テキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入ります\nテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますΩテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入ります",
  money: 10000,
  thumbnail_url: "https://dummyimage.com/600x400/000/fff",
  first_name: "user0",
  last_name: "user0",
  user_icon_url: "https://dummyimage.com/600x400/ffb0ff/fff",
};

export const getAll = {
  status: 200,
  message: "success",
  data: [
    { ...dream },
    {
      ...dream,
      id: 1,
      money: 150000,
    },
    {
      ...dream,
      id: 2,
      money: 1150000,
    },
    {
      ...dream,
      id: 3,
      money: 1020000,
    },
    {
      ...dream,
      id: 4,
      money: 1055000,
    },
    {
      ...dream,
      id: 5,
      money: 1055000,
    },
  ],
};

export const create = {
  status: 200,
  message: "success",
  data: dream,
};

export const getOne = {
  status: 200,
  message: "success",
  data: dream,
};

export const update = {
  status: 200,
  message: "success",
  data: dream,
};
