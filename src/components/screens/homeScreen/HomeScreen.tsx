import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { Image, Text, View } from "react-native";

import Button from "../../ui/button/Button";
// import styles from "./HomeScreen.scss";

type HomeScreenProps = {};
const HomeScreen: React.FC<HomeScreenProps> = () => {
  const navigation = useNavigation();
  const handleClick = useCallback(() => {
    (navigation as any).navigate("Config");
  }, [navigation]);
  return (
    <View
    // style={styles.HomeScreen__container}
    >
      <Text>Home</Text>
      <Image
        style={{ width: 50, height: 50 }}
        source={{ uri: "https://ui-avatars.com/api/?name=John+Doe" }}
      ></Image>
      <Button onPress={handleClick}>
        Go to Configgg
      </Button>
    </View>
  );
};
export default HomeScreen;
