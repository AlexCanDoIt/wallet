import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AuthRegisterForm from '../AuthRegisterForm/AuthRegisterForm';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/\w+[@]\w+\.\w+/)
    .required(),
  password: Yup.string().min(6).max(12).required(),
  passwordConfirm: Yup.string().when('password', (password, field) =>
    password ? field.required().oneOf([Yup.ref('password')]) : field,
  ),
  userName: Yup.string().min(1).max(12).required(),
});

function RegistrationForm() {
  const buttonsSettings = {
    btn_1_text: 'Регистрация',
    btn_1_type: 'submit',
    btn_2_child: <NavLink to="/login">Вход</NavLink>,
  };

  const fieldsSettings = [
    {
      fieldName: 'email',
      placeholder: 'E-mail',
      type: 'text',
      iconType: 'email',
    },
    {
      fieldName: 'password',
      placeholder: 'Пароль',
      type: 'password',
      iconType: 'lock',
    },
    {
      fieldName: 'passwordConfirm',
      placeholder: 'Подтвердите пароль',
      type: 'password',
      iconType: 'lock',
    },
    {
      fieldName: 'userName',
      placeholder: 'Ваше имя',
      type: 'text',
      iconType: 'account',
    },
  ];
  const dispatch = useDispatch();
  const onRegisterSubmit = values => {
    const { email, password } = values;
    console.log(email, password);
  };

  return (
    <AuthRegisterForm
      validationSchema={validationSchema}
      onSubmit={onRegisterSubmit}
      buttonsSettings={buttonsSettings}
      fieldsSettings={fieldsSettings}
    />
  );
}

export default RegistrationForm;
