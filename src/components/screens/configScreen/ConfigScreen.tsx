import React, { FC, useCallback } from 'react';
import { Button, Text, View } from 'react-native';
import useNavigate from '../../../hooks/useNavigate/useNavigate';
type ConfigScreenProps = {};
const ConfigScreen: FC<ConfigScreenProps> = () => {
  const { goTo } = useNavigate();
  const handleClick = useCallback(() => {
    goTo('Home');
  }, [goTo]);
  return (
    <View>
      <Text>ConfigScreen</Text>
      <Button title="Go to Home" onPress={handleClick} />
    </View>
  );
};
export default ConfigScreen;
