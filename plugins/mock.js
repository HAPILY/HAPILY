import MockAdapter from 'axios-mock-adapter';
import { getAll as topAll } from '../network/mock/api/top';
import { signup, login } from '../network/mock/api/auth';
import {
  getAll as dreamAll,
  create as dreamCreate,
  getOne as dreamOne,
  update as dreamUpdate,
} from '../network/mock/api/dreams';
import {
  getOne as userOne,
  update as userUpdate,
} from '../network/mock/api/users';
import {
  getAll as companyAll,
  create as companyCreate,
  getOne as companyOne,
  update as companyUpdate,
} from '../network/mock/api/companies';
import {
  send,
  getAll as chatAll,
  update as chatUpdate,
} from '../network/mock/api/chats';

export default ({ $axios }) => {
  const mock = new MockAdapter($axios, { delayResponse: 500 });

  // Top
  mock.onGet('/tops').reply(200, topAll);

  // Auth
  mock.onPost('/auth/signup').reply(200, signup);
  mock.onPost('/auth/login').reply(200, login);

  // Dreams
  mock.onGet('/dreams').reply(200, dreamAll);
  mock.onPost('/dreams').reply(200, dreamCreate);
  mock.onGet('/dreams/1').reply(200, dreamOne);
  mock.onPost('/dreams/1').reply(200, dreamUpdate);

  // Users
  mock.onGet('/users/1').reply(200, userOne);
  mock.onPost('/users/1').reply(200, userUpdate);

  // Companies
  mock.onGet('/dreams').reply(200, companyAll);
  mock.onPost('/dreams').reply(200, companyCreate);
  mock.onGet('/dreams/1').reply(200, companyOne);
  mock.onPost('/dreams/1').reply(200, companyUpdate);

  // Chats
  mock.onPost('/chats').reply(200, send);
  mock.onGet('/chats/1').reply(200, chatAll);
  mock.onPost('/chats/1').reply(200, chatUpdate);
};
