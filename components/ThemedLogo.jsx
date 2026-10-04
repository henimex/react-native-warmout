import { useColorScheme, Image } from "react-native";
import { Colors } from "../constants/Colors";

import LightLogo from "../assets/img/logo4.webp";
import DarkLogo from "../assets/img/logo5.jpg";

const ThemedLogo = ({ ...props }) => {
  const colorScheme = useColorScheme();
  const logo = Colors[colorScheme] =='dark' ? DarkLogo : LightLogo;
  return (
    <Image source= {logo} {...props} />
  );
};

export default ThemedLogo;
