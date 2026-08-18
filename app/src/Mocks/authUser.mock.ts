let accessToken: {id:number, username:string}
let refreshToken: {id:number, username:string}

export const mockUserAuth = {
  login: (id:number, username : string) => {
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
