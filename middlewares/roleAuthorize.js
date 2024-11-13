const createError = require('../utils/createError');
const authorize = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return createError(403, 'Forbidden');
    }
    next();
  };
};

module.exports = authorize;


// ส่ง role ที่ต้องการมาเป็น array เช่น   authorize(['Admin', 'BUYER'])
