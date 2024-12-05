const { body, validationResult } = require('express-validator');

const validateUser  = [
  body('nombres').notEmpty().withMessage('El nombre es requerido'),
  body('numDoc').isLength({ min: 10, max: 10 }).withMessage('El número de documento debe tener 10 caracteres'),
  // Agrega más validaciones según sea necesario
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { validateUser , handleValidationErrors };