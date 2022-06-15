const { Router } = require('express');
const { check } = require('express-validator');

const { 
  getUsers,
  postUser,
  putUser,
  patchUser,
  deleteUser } = require('../controllers/users.controller');

const router = Router();

router.get('/', getUsers)
//adding middleware, if we need to use only one, it's not required to put it in an array
router.post('/',[
  check('email', 'el correo no es válido').isEmail(), //this will send the error to the controller
  check('name', 'El nombre es obligatorio').not().isEmpty(),
  check('lastName', 'El apellido es obligatorio').not().isEmpty(),
  check('password', 'La contraseña debe ser al menos 6 caracteres').isLength({ min: 6 }),
  check('role', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),

], postUser)
router.put('/:id', putUser)
router.patch('/', patchUser)
router.delete('/', deleteUser)


module.exports = router;