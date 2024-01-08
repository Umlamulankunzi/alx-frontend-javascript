import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let info = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    info = { photo, user };
  } catch (err) {
    info = { photo: null, user: null };
  }
  return info;
}
