// eslint-disable-next-line @typescript-eslint/no-var-requires
const jwt = require('jsonwebtoken');

const decodeJWT = (token) => {
  let decoded;
  try {
    decoded = jwt.verify(token, 'THIS_IS_A_TOKEN_KEY');
  } catch (e) {
    decoded = {
      sub: '-1',
      role: 'USER',
    };
  } finally {
    return {
      userId: decoded.sub,
      role: decoded.role,
    };
  }
};

export default decodeJWT;
