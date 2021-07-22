export const send = {
  status: 200,
  message: 'SUCCESS',
};

export const getAll = {
  status: 200,
  message: 'SUCCESS',
  data: {
    messages: [
      {
        id: 0,
        user_message_id: 0,
        content: 'string',
        image: 'string',
        send_date: 'string',
        user_name: 'string',
        user_position: 'string',
        user_icon_url: 'string',
        user_type: 'user',
      },
    ],
  },
};

export const update = {
  status: 200,
  message: 'SUCCESS',
};
