export const isFormValid = (username, password, accountName) => {
  if (isFormEmpty(username, password, accountName)) {
    return false;
  } else {
    return true;
  }
};

export const isFormEmpty = (username, password, accountName) => {
  return !username.length || !password.length || !accountName;
};
