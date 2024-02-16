const pool = require('../dbConfig');
const jwt = require('jsonwebtoken');

const getUserById = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
    if (!token) {
      return res.status(401).json({error: 'Access token not provided'});
    }

    const decodedToken = jwt.verify(token, 'FASF124FAS');
    const userId = decodedToken.userId;

    const result = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);
    if (result.rows.length === 0) {
      return res.status(404).json({error: 'User not found'});
    }

    const user = result.rows[0];
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
};

module.exports = {getUserById};
