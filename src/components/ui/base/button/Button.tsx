import React from "react";
import { View } from "react-native";
import { Button as OButton } from "react-native-paper";
import ButtonStyles from "./Button.scss";
type ButtonProps = {
  children?: string;
  title?: string;
  onClick?: () => void;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  title,
  onClick,
  onPress = () => null
}) => {
  console.log("ButtonStyles", ButtonStyles.Button__container);

  return <View style={ButtonStyles.Button__container}>
    <OButton style={ButtonStyles.Button} loading mode="outlined" onPress={onClick || onPress} >
      {title || children || ""}
    </OButton>
  </View>
  // return <OButton title={title || children || ""} onPress={onPress}></OButton>
}
export default Button;