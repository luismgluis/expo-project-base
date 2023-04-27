import React, { useCallback, useState } from 'react';
import { View } from 'react-native';

import useNavigate from '../../../hooks/useNavigate/useNavigate';
import Button from '../../ui/base/button/Button';
import TextInput from '../../ui/base/textInput/TextInput';
type LoginScreenProps = {};
const LoginScreen: React.FC<LoginScreenProps> = ({}) => {
  const { goTo } = useNavigate();
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const handleLogin = useCallback(() => {
    console.log('logueado', form);
    // const newUser = new UserModel(form);
    // app.api.apiAuth.register(newUser);
    goTo('Home');
  }, [form]);

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        label="Usuario"
        onChangeText={(val) => setForm((old) => ({ ...old, username: val }))}
        placeholder="wick@business.com"
      ></TextInput>

      <TextInput
        label="Contraseña"
        onChangeText={(val) => setForm((old) => ({ ...old, password: val }))}
        placeholder="******"
      />
      <Button onPress={handleLogin}>Ingresar</Button>
      <Button variant="text" onPress={() => goTo('Register')}>
        Crear cuenta
      </Button>
    </View>
  );
};
export default LoginScreen;
