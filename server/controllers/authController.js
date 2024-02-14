const pool = require('../dbConfig');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretKeyAccess = 'FASF124FAS';
const secretKeyRefresh = 'TS644';

const generateAccessToken = (userId) => {
  return jwt.sign({userId}, secretKeyAccess, {expiresIn: '1h'});
};

const generateRefreshToken = (userId) => {
  return jwt.sign({userId}, secretKeyRefresh, {expiresIn: '7d'});
};

const verifyRefreshToken = (refreshToken) => {
  return jwt.verify(refreshToken, secretKeyRefresh);
};

const register = async (req, res) => {
  try {
    const {firstName, lastName, email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      'INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
      [firstName, lastName, email, hashedPassword],
    );
    const userId = result.rows[0].id;

    const accessToken = generateAccessToken(userId);
    const refreshToken = generateRefreshToken(userId);

    res.json({user: result.rows[0], accessToken, refreshToken});
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
};

const login = async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [
      email,
    ]);
    if (user.rows.length === 0) {
      return res.status(401).json({error: 'Invalid credentials'});
    }
    const passwordMatch = await bcrypt.compare(password, user.rows[0].password);
    if (!passwordMatch) {
      return res.status(401).json({error: 'Invalid credentials'});
    }
    const accessToken = generateAccessToken(user.rows[0].id);
    const refreshToken = generateRefreshToken(user.rows[0].id);
    res.json({accessToken, refreshToken});
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
};

// const refreshToken = async (req, res) => {
//   try {
//     const {refreshToken} = req.body;
//     const decoded = jwt.verify(refreshToken, secretKeyRefresh);
//
//     const newAccessToken = generateAccessToken(decoded.userId);
//
//     res.json({accessToken: newAccessToken});
//   } catch (error) {
//     console.error('Error refreshing token:', error);
//     res.status((401).json({error: 'Invalid refresh token'}));
//   }
// };

module.exports = {register, login};