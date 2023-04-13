import { User } from '../models/User';
import { Auth } from '../models/Auth';
import { setNewCode } from '../helpers/setnewcode';
import { sendEmail } from '../lib/sendGrid';
import { emailAuth } from 'helpers/email-template';
import { generate } from 'lib/jwt';

export async function sendCode(email: string) {
  const auth = await findOrCreateAuth(email);
  await auth.pull();
  const code = await setNewCode(auth);
  await sendEmail({
    addressee: email,
    message: emailAuth(code),
    title: `Your code to start section is ${code}.`,
  });
  console.log('enviamos al ' + email + ' el codigo ' + code);
  return true;
}

export async function findOrCreateAuth({
  email,
  image,
  name,
}: any): Promise<any> {
  const auth = await Auth.findByEmail(email);

  if (auth) {
    return auth;
  }
  const newUser = await User.createNewUser({
    email,
  });
  const newAuth = await Auth.createNewAuth({
    email,
    userId: newUser.id,
    code: '',
    expires: new Date(),
    image,
    name,
  });

  return newAuth!.data;
}

export const createToken = async (
  email: string,
  code: number
): Promise<{
  id: string;
  email: string;
  image: string;
  name: string;
}> => {
  const auth = await Auth.findByEmailAndCode(email, code);
  const codeUsed = await Auth.findByEmailAndCode(email, null);

  if (codeUsed) {
    throw new Error(
      'code is already used or invalid, you have to create another one'
    );
  }

  if (!auth) {
    throw new Error('email or code invalid');
  }

  const expires = auth.isCodeExpired();

  if (expires) {
    throw new Error('expired code');
  }
  // const token = generate({ userId: auth.data.userId });
  await Auth.deleteUsedCode(code);

  return {
    id: auth.data.userId,
    email: auth.data.email,
    name: auth.data.name,
    image: auth.data.image,
  };
};
