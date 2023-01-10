import * as yup from 'yup';

const emailValidation = yup.object().shape({
  value: yup
    .string()
    .email(() => 'El email no es valido.')
    .required(() => 'Este campo es requerido.'),
});

const requiredValidation = yup.object().shape({
  value: yup.string().required(() => 'Este campo es requerido.'),
});

const passwordValidation = yup.object().shape({
  value: yup
    .string()
    .required(() => 'La contraseña es requerida.')
    .min(8, 'Debe ingresar minimo 8 caracteres.'),
});

const confirmPasswordValidation = yup.object({
  password: yup.string(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas no son iguales.'),
});

const confirmPasswordEditValidation = yup.object({
  value: yup.string().min(8, 'Debe ingresar minimo 8 caracteres.'),
});

export default {
  emailValidation,
  requiredValidation,
  passwordValidation,
  confirmPasswordValidation,
  confirmPasswordEditValidation,
};
