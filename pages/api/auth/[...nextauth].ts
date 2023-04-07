import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import fetchApi from '../../../api/fetchApi';
import { Auth } from 'models/Auth';
import { findOrCreateAuth } from 'controllers/auth-controller';

export const authOptions = {
  providers: [
    Credentials({
      name: 'Custom Login',
      credentials: {
        email: {
          label: 'Correo',
          type: 'email',
          placeholder: 'correo@google.com',
        },
      },
      async authorize(credentials) {
        // console.log(credentials);

        // const user = await findOrCreateAuth(credentials?.email!);

        // console.log({ user });

        return {
          id: 'user.userId',
          email: 'user.email.toLocaleLowerCase()',
          name: 'Ayrton',
        };
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  pages: {
    signIn: '/signIn',
    newUser: '/signIn',
  },

  session: {
    maxAge: 2592000,
    strategy: 'jwt',
    updateAge: 86400,
  },

  callbacks: {
    async jwt({ token, account, user }: any) {
      if (account) {
        token.accessToken = account.access_token;

        switch (account.type) {
          case 'oauth':
            const data = await findOrCreateAuth(user.email);

            const userData = {
              id: data.data.userId,
              email: data.data.email,
            };
            token.user = { ...userData };

            break;
          case 'credentials':
            token.user = user;

            break;
        }
      }

      return token;
    },
    async session({ session, token, user }: any) {
      session.accessToken = token.accessToken;
      session.user = token.user;

      return session;
    },
  },
};

export default NextAuth(authOptions as any);
