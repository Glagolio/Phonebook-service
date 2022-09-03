import FormStyled from './Register.styled';
import InputName from '../Phonebook/Input/InputName/InputName';
import InputMail from '../Phonebook/Input/InputMail/inputMail';
import InputPassword from 'components/Phonebook/Input/InputPassword/InputPassword';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperation from 'redux/auth/auth-operation';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'mail':
        setEmail(e.currentTarget.value);
        break;
      case 'password':
        setPassword(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperation.register({ name, email, password }));
    resetForm();
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <label>
        Name
        <InputName value={name} onChange={handleChange} />
      </label>
      <label>
        E-mail
        <InputMail value={email} onChange={handleChange} />
      </label>
      <label>
        Password
        <InputPassword value={password} onChange={handleChange} />
      </label>
      <button type="submit">Sign up</button>
    </FormStyled>
  );
};

export default Register;
