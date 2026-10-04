import { Text, View, useColorScheme } from "react-native";
import { Stack } from "expo-router";
import { Colors } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  return (
    <>
      <StatusBar style="auto" />
      <View style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: theme.navBackground },
            headerTintColor: theme.title,
          }}
        >
          <Stack.Screen name="(auth)" options= {{
            headerShown: false,
          }}/>
          <Stack.Screen name="index" options={{ title: "Home Page" }} />
          <Stack.Screen name="about" options={{ title: "About Page" }} />
          <Stack.Screen
            name="contact"
            options={{ title: "Contact Page", headerShown: false }}
          />
        </Stack>
        <Text style={{ marginBottom: 50 }}>Footer 2</Text>
      </View>
    </>
  );
};

export default RootLayout;
