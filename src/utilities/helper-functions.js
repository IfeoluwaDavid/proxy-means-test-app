export const saveUserInfo = (userInfo) => {
  localStorage.setItem("userData", JSON.stringify(userInfo));
  localStorage.setItem("isUserLoggedIn", true);
};

export const isUserLoggedIn = () => {
  return JSON.parse(localStorage.getItem("isUserLoggedIn"));
};

export const getUserInfo = () => {
  let user = JSON.parse(localStorage.getItem("userData"));
  return user;
};

export const clearUserInfo = () => {
  localStorage.removeItem("userData");
  localStorage.setItem("isUserLoggedIn", false);
};

export const hasDOM = () => {
  if (typeof window !== "undefined" || window.document !== undefined) {
    return false;
  }
  return true;
};
