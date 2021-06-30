const company = {
  id: 0,
  name: 'string',
  vision: 'string',
  company_url: 'string',
  icon_url: 'string',
  address: 'string',
  title: 'string',
  detail: 'string',
  tags: [
    {
      id: 0,
      name: 'string',
    },
  ],
};

export const getAll = {
  status: 200,
  message: 'SUCCESS',
  data: [{ ...company }],
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
