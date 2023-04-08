import { firestore } from '../lib/firestore';
import isAfter from 'date-fns/isAfter';

const collection = firestore.collection('auth');

export class Auth {
  ref: FirebaseFirestore.DocumentReference;
  data: any;
  id: string;

  constructor(id: string) {
    this.id = id;
    this.ref = collection.doc(id);
  }

  async pull() {
    try {
      const snap = await this.ref.get();
      this.data = snap.data();
    } catch (error) {
      console.log(error);
    }
  }

  async push() {
    try {
      this.ref.update(this.data);
    } catch (error) {
      console.log(error);
    }
  }

  isCodeExpired() {
    const now = new Date();
    const expired = this.data.expires.toDate();
    return isAfter(now, expired);
  }

  static async findByEmail(email: string) {
    try {
      const cleanEmail = Auth.cleanEmail(email);

      const result = await collection.where('email', '==', cleanEmail).get();

      if (result.docs.length) {
        const first = result.docs[0];
        const newAuth = new Auth(first.id);
        newAuth.data = first.data();
        return newAuth;
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
    }
  }

  static async createNewAuth(data: any) {
    try {
      const newAuthSnap = await collection.add(data);
      const newAuth = new Auth(newAuthSnap.id);
      newAuth.data = data;
      return newAuth;
    } catch (error) {
      console.log(error);
    }
  }

  static cleanEmail(email: string) {
    return email.trim().toLowerCase();
  }

  static async findByEmailAndCode(email: string, code: number | null) {
    try {
      const cleanEmail = Auth.cleanEmail(email);
      const result = await collection
        .where('email', '==', cleanEmail)
        .where('code', '==', code)
        .get();

      if (result.empty) {
        return null;
      } else {
        const doc = result.docs[0];
        const auth = new Auth(doc.id);
        auth.data = doc.data();
        return auth;
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteUsedCode(code: number) {
    try {
      const result = await collection.where('code', '==', code).get();

      if (result.empty) {
        return null;
      } else {
        const doc = result.docs[0];
        const auth = new Auth(doc.id);
        auth.data = doc.data();
        auth.data.code = null;
        await auth.push();
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  }
  static async getUserId(id: string) {
    try {
      const user = await collection.where('userId', '==', id).get();

      if (!user.empty) {
        return user.docs[0].data();
      }

      return null;
    } catch (error) {
      console.log(error);
    }
  }
}
