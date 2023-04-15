import React from "react";
import { Button as OButton } from "react-native";
type ButtonProps = {
  children?: string;
  title?: string;
  onPress?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  children,
  title,
  onPress
}) => {

  return <OButton title={title || children || ""} onPress={onPress}></OButton>
}
export default Button;