export const send = {
  status: 200,
  message: "SUCCESS",
};

export const getAll = {
  status: 200,
  message: "SUCCESS",
  data: {
    user: {
      id: 0,
      first_name: "string",
      last_name: "string",
      position: "string",
      icon_url: "string",
      title: "string",
      detail: "string",
      created_at: "string",
    },
    company: {
      id: 0,
      name: "string",
      vision: "string",
      company_url: "string",
      icon_url: "string",
      address: "string",
      title: "string",
      detail: "string",
      tags: [
        {
          id: 0,
          name: "string",
        },
      ],
    },
    messages: [
      {
        id: 0,
        content: "string",
        image: "string",
        send_date: "string",
        user_type: "user",
      },
    ],
  },
};

export const update = {
  status: 200,
  message: "SUCCESS",
};
