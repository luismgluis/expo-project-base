import { View, Text, Button } from "react-native";
import React, { FC, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
type ConfigScreenProps = {};
const ConfigScreen: FC<ConfigScreenProps> = () => {
  const navigation = useNavigation();
  const handleClick = useCallback(() => {
    (navigation as any).navigate("Home");
  }, [navigation]);
  return (
    <View>
      <Text>ConfigScreen</Text>
      <Button title="Go to Home" onPress={handleClick} />
    </View>
  );
};
export default ConfigScreen;
