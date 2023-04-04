import { atom, selector } from 'recoil';

export const loginStatus = atom({
  key: 'user-logged',
  default: false,
});
