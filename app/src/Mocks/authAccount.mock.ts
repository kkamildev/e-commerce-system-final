let accessToken: {id:string, username:string}
let refreshToken: {id:string, username:string}

export const mockAccountAuth = {
  login: (id:string, username : string) => {
    refreshToken = {id, username};
    accessToken = {id, username};
  },

  getAccessToken: () => accessToken,
  getRefreshToken: () => refreshToken,


  logout: () => {
    accessToken = null;
    refreshToken = null;
  }
};
