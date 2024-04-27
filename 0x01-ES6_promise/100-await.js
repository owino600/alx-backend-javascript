import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser(userInfo, photo) {
  try {
    const photoUrl = await uploadPhoto(newUser.id, photo);
    const newUser = await createUser(userInfo);

    return ({ photo: photoUrl, user: newUser });
  } catch (error) {
    return ({ photo: null, user: null });
  }
}