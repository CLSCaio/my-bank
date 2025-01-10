import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IDataUser {
  user: string;
  password: string;
}

interface ILoginData {
  user: string;
  password: string;
  rememberData: boolean;
}

type TSetSucessOrError = (sucessOrError: boolean) => void;

interface IUseDataUser {
  dataUser: IDataUser[];
  addUser: (dataUser: IDataUser) => void;
  loginData: ILoginData;
  login: (loginData: ILoginData) => void;
  sucessOrError: boolean;
  setSucessOrError: TSetSucessOrError;
}

const loginData: ILoginData = {
  user: '',
  password: '',
  rememberData: false,
};

const dataUser: IDataUser[] = [
  {
    user: 'admin',
    password: 'admin12345',
  },
];

const tryLogin = (
  dataUser: IDataUser[],
  setSucessOrError: TSetSucessOrError,
  { user, password, rememberData }: ILoginData
) => {
  try {
    const findUser = dataUser.find((item) => item.user === user);

    if (!findUser) throw Error('Usuário não encontrado!');
    if (findUser) {
      const checkPassword = dataUser.find((item) => item.password === password);
      if (!checkPassword) throw Error('Senha ou usuário incorreto!');
    }

    setSucessOrError(true);

    return {
      user,
      password,
      rememberData,
    };
  } catch (error) {
    alert(error);
    setSucessOrError(false);
    return loginData;
  }
};

const tryAddUser = (
  dataUser: IDataUser[],
  setSucessOrError: TSetSucessOrError,
  { user, password }: IDataUser
) => {
  try {
    const findUser = dataUser.find((item) => item.user === user);

    if (findUser) throw Error('Usuário já existe!');
    if (!user) throw Error('Digite um Usuário válido!');
    if (!password) throw Error('Digite uma senha válida!');

    dataUser.push({ user, password });

    setSucessOrError(true);

    return dataUser;
  } catch (error) {
    alert(error);
    setSucessOrError(false);
    return dataUser;
  }
};

export const useDataUser = create<IUseDataUser>()(
  persist(
    (set) => ({
      dataUser,
      sucessOrError: false,
      loginData,
      setSucessOrError: (sucessOrError) => set(() => ({ sucessOrError })),
      login: ({ user, password, rememberData }) =>
        set(({ dataUser, setSucessOrError }) => ({
          loginData: {
            ...tryLogin(dataUser, setSucessOrError, {
              user,
              password,
              rememberData,
            }),
          },
        })),
      addUser: ({ user, password }) =>
        set(({ dataUser, setSucessOrError }) => ({
          dataUser: [
            ...tryAddUser(dataUser, setSucessOrError, { user, password }),
          ],
        })),
    }),
    {
      name: 'data-user',
    }
  )
);
