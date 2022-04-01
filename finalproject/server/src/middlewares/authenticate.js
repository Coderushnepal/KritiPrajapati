import expressJwt from 'express-jwt';

export default expressJwt({
  secret: process.env.TOKEN_SECRET,
  algorithms: ['HS256']
});