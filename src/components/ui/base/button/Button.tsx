import React from 'react';
import { View } from 'react-native';
import { Button as OButton } from 'react-native-paper';
import ButtonStyles from './Button.scss';
type ButtonProps = {
  children?: string;
  title?: string;
  onClick?: () => void;
  onPress?: () => void;
  loading?: boolean;
  variant?: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal';
};

const Button: React.FC<ButtonProps> = ({
  children,
  title,
  onClick,
  onPress = () => null,
  loading,
  variant = 'contained',
}) => {
  console.log('ButtonStyles', ButtonStyles.Button__container);

  return (
    <View
      style={{
        padding: 10,
      }}
    >
      <OButton
        // style={ButtonStyles.Button}
        loading={loading}
        mode={variant}
        onPress={onClick || onPress}
      >
        {title || children || ''}
      </OButton>
    </View>
  );
  // return <OButton title={title || children || ""} onPress={onPress}></OButton>
};
export default Button;
