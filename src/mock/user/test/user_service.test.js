const UserService = require('../user_service');
const UserClient = require('../user_client');

jest.mock('../user_client');

describe('user service test', () => {
  const login = jest.fn(async () => 'success');
  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });
  const userService = new UserService(new UserClient());

  it('did you login?', async () => {
    await userService.login('3', '3');
    expect(login).toBeCalledTimes(1);
    expect(userService.isLogedIn).toBeTruthy();
  });

  it('did you login already?', async () => {
    if (userService.isLogedIn) {
      console.log('이미 로그인 되었습니다.');
    }
  });
});
