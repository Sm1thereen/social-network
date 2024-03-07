import jwt from 'jsonwebtoken';


export const jwtSecret = 'FASF124FAS';

export const authMiddlewareFactory = ({usersUseCase}) => {
  return (req, res, next) => {
    const token =
      req.headers['authorization'] &&
      req.headers['authorization'].split(' ')[1];

    if (!token) {
      return res.sendStatus(401);
    }

    jwt.verify(token, jwtSecret, (error, payload) => {
      if (error) {
        return res.sendStatus(401);
      }

      usersUseCase.getUserById({userId: payload.userId}).then(
        (user) => {
          if (!user) {
            return res.sendStatus(401);
          }
          req.user = user;

          next();
        },
        (error) => {
          console.error(error);
          return res.sendStatus(401);
        },
      );
    });
  };
};