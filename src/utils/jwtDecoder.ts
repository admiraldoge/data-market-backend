// eslint-disable-next-line @typescript-eslint/no-var-requires
const jwt = require('jsonwebtoken');

const decodeJWT = (token) => {
  const decoded = jwt.verify(token, 'THIS_IS_A_TOKEN_KEY');
  return {
    userId: decoded.sub,
    role: decoded.role,
  };
};

export default decodeJWT;
