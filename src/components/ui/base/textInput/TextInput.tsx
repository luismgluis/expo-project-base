import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { TextInput as TextInput_ } from 'react-native-paper';
interface TextInputProps {
  label: string;
  placeholder?: string;
  onChangeText?: (val: string) => void;
  containerStyles?: StyleProp<ViewStyle>;
}
const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  onChangeText,
  containerStyles,
}) => {
  return (
    <View
      style={{
        paddingBottom: 10,
        ...(containerStyles as any),
      }}
    >
      <TextInput_
        label={label}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};
export default TextInput;
