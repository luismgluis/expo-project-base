import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import app from '../../../api/app';
import useNavigate from '../../../hooks/useNavigate/useNavigate';
import UserModel from '../../../models/UserModel';
import Button from '../../ui/base/button/Button';
import TextInput from '../../ui/base/textInput/TextInput';
type RegisterScreenProps = {};
const RegisterScreen: React.FC<RegisterScreenProps> = ({}) => {
  const { goTo } = useNavigate();
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const handleRegister = useCallback(() => {
    const newUser = new UserModel(form);
    app.api.apiAuth
      .register(newUser)
      .then((res) => {
        console.log('res', res);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }, [form]);
  return (
    <View style={{ padding: 20 }}>
      <TextInput
        label="Nombre"
        onChangeText={(val) => setForm((old) => ({ ...old, username: val }))}
        placeholder="John wick"
      ></TextInput>
      <TextInput
        label="Nombre"
        onChangeText={(val) => setForm((old) => ({ ...old, username: val }))}
        placeholder="John wick"
      ></TextInput>
      <TextInput
        label="Nombre"
        onChangeText={(val) => setForm((old) => ({ ...old, username: val }))}
        placeholder="John wick"
      ></TextInput>
      <TextInput
        label="Contraseña"
        onChangeText={(val) => setForm((old) => ({ ...old, password: val }))}
        placeholder="******"
      />
      <Button onPress={handleRegister}>Registrarse</Button>
      <Button variant="text" onPress={() => goTo('Login')}>
        Iniciar sesion
      </Button>
    </View>
  );
};
export default RegisterScreen;
