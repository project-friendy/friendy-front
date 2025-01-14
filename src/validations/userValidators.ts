// todo: 유효성 검사 상세하게

import { FORM_ERROR } from '../constants/errorMessages';

export const validateEmail = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    throw new Error(FORM_ERROR.EMAIL.INVALID);
  }
};

export const validateNickname = (nickname: string) => {
  if (nickname.length < 8 || nickname.length > 30) {
    throw new Error(FORM_ERROR.NICKNAME.LENGTH);
  }
};

export const validatePassword = (password: string) => {
  if (password.length < 8 || password.length > 16) {
    throw new Error(FORM_ERROR.PASSWORD.LENGTH);
  }
};

export const validateNull = (value: string) => {
  if (!value) {
    throw new Error('필수 입력 항목입니다.');
  }
};
