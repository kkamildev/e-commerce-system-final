let accessToken: string | null = null;
let refreshToken: string | null = null;

export const mockUserAuth = {
  login: (email: string, _password: string) => {
    accessToken = "mock_access_" + Date.now();
    refreshToken = "mock_refresh_" + Date.now();

    return {
      accessToken,
      refreshToken,
      user: { id: 1, email }
    };
  },

  getAccessToken: () => accessToken,
  getRefreshToken: () => refreshToken,

  refresh: () => {
    accessToken = "mock_access_" + Date.now();
    return { accessToken };
  },

  logout: () => {
    accessToken = null;
    refreshToken = null;
  }
};
