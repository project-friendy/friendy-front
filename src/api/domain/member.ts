import ApiClient from '@api/ApiClient';

const apiClient = new ApiClient('');

const memberApis = {
  signUp: async ({
    email,
    nickname,
    password,
    birthDate,
  }: {
    email: string;
    nickname: string;
    password: string;
    birthDate: string;
  }) =>
    await apiClient.post({
      path: '/signup',
      body: {
        email,
        nickname,
        password,
        birthDate,
      },
      requiresAuth: false,
    }),
};

export default memberApis;
