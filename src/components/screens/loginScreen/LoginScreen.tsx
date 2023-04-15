import React, { useCallback, useState } from "react";
import { Text, TextInput, View } from "react-native";
import app from "../../../api/app";
import Button from "../../ui/button/Button";
type LoginScreenProps = {}
const LoginScreen: React.FC<LoginScreenProps> = ({ }) => {
  const [form, setForm] = useState({
    username: "",
    password: ""
  })
  const handleLogin = useCallback(() => {
    console.log("logueado", form);
    const newUser = new UserModel(form);
    app.api.apiAuth.register(newUser)
  }, [form])

  return <View>
    <Text>Usuario</Text>
    <TextInput
      onChangeText={val => setForm(old => ({ ...old, username: val }))}
      placeholder="John wick"></TextInput>
    <Text>Contraseña</Text>
    <TextInput
      onChangeText={val => setForm(old => ({ ...old, password: val }))} placeholder="John wick"></TextInput>
    <Button onPress={handleLogin}>
      INICIAR2
    </Button>
  </View>
}
export default LoginScreen;