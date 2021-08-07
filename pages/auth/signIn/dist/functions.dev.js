"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFormEmpty = exports.isFormValid = void 0;

var isFormValid = function isFormValid(username, password, accountName) {
  if (isFormEmpty(username, password, accountName)) {
    return false;
  } else {
    return true;
  }
};

exports.isFormValid = isFormValid;

var isFormEmpty = function isFormEmpty(username, password, accountName) {
  return !username.length || !password.length || !accountName;
};

exports.isFormEmpty = isFormEmpty;