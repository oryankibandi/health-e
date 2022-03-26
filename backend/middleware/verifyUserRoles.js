import ROLES from '../config/roles.js';

function verifyUserRoles(...allowedRoles) {
  return (req, res, next) => {
    const roles = [...allowedRoles];
    console.log('roles', roles);
    console.log('req roles', req.roles);
    const allowed = req.roles
      .map((role) => roles.includes(role))
      .find((value) => value === true);

    console.log('allowed', allowed);

    if (!allowed) {
      return res.json({
        error: 'unauthorized page',
      });
    }

    next();
  };
}

export default verifyUserRoles;
