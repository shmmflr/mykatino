import jwt from 'jsonwebtoken';

export const tokenDecode = (token) => {
  return jwt.decode(token, { complete: true });
};
