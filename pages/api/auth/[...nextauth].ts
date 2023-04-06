import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';
import fetchApi from '../../../api/fetchApi';

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

        const { data } = await fetchApi.post('/auth/user', {
          email: credentials?.email,
        });
        return {
          id: data.userId,
          email: data.email.toLocaleLowerCase(),
        };
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
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
            const { data } = await fetchApi.post('/auth/user', {
              email: user.email,
            });
            token.user = { ...data };

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
