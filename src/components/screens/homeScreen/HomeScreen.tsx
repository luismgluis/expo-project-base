import React, { useCallback } from 'react';
import { Image, Text, View } from 'react-native';

import useNavigate from '../../../hooks/useNavigate/useNavigate';
import Button from '../../ui/base/button/Button';
import homeStyles from './HomeScreen.scss';

type HomeScreenProps = {};
const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { goTo } = useNavigate();
  const handleClick = useCallback(() => {
    goTo('Config');
  }, [goTo]);
  return (
    <View>
      <Text style={homeStyles.title}>Home</Text>
      <Image
        style={{ width: 50, height: 50 }}
        source={{ uri: 'https://ui-avatars.com/api/?name=John+Doe' }}
      ></Image>
      <Button onPress={handleClick}>Go to Config</Button>
    </View>
  );
};
export default HomeScreen;
