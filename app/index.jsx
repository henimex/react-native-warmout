import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import Logo from "../assets/img/logo4.webp";
import React from "react";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      {/* <Image source={Logo} style={styles.logo} /> */}

      <ThemedLogo style={styles.logo} />

      <Text style={[styles.title, { color: "purple" }]}>Title</Text>
      <Spacer height={20} />

      <Text style={{ color: "red", marginTop: 10, marginBottom: 10 }}>
        Number 2
      </Text>
      <Spacer />

      <ThemedText style={styles.title} title={true}>
        Number 3
      </ThemedText>

      <Link href="/login" style={styles.link}>
        <ThemedText>Login Page</ThemedText>
      </Link>

      <Link href="/register" style={styles.link}>
        <ThemedText>Register Page</ThemedText>
      </Link>

      <View style={styles.card}>
        <Text>Number 8</Text>
      </View>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
  },
  card: {
    marginTop: 20,
    backgroundColor: "#bebdbd",
    padding: 20,
    borderRadius: 10,
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  logo: {
    marginVertical: 20,
    height: 300,
    width: 300,
  },

  link: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20,
    borderBottomWidth: 1,
  },
});
