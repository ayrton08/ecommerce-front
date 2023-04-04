import { IUser } from 'interfaces/user';
import { IAuthState } from './';

type AuthType =
  | {
      type: '[Auth] - Login';
      payload: IUser;
    }
  | {
      type: '[Auth] - Logout';
    };

export const authReducer = (
  state: IAuthState,
  action: AuthType
): IAuthState => {
  switch (action.type) {
    case '[Auth] - Login':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case '[Auth] - Logout':
      return {
        ...state,
        isLoggedIn: false,
        user: undefined,
      };

    default:
      return state;
  }
};
