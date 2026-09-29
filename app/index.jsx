import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";
import Logo from "../assets/img/logo4.webp";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />

      <Text style={[styles.title, { color: "purple" }]}>Number 1</Text>
      <Text style={{ color: "red", marginTop: 10, marginBottom: 10 }}>
        Number 2
      </Text>
      <Text>Number 3</Text>
      <Text>Number 4</Text>
      <Text>Number 5</Text>
      <Text>Number 6</Text>

      <Link href="/about" style={styles.link}>
        About Page
      </Link>

      <Link href="/contact" style={styles.link}>
        Contact Page
      </Link>

      <View style={styles.card}>
        <Text>Number 8</Text>
        <Text>Number 9</Text>
        <Text>Number 10</Text>
      </View>
    </View>
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
  },

  link: {
    fontSize: 30,
    fontweight: "bold",
    marginVertical: 20,
    borderBottomWidth: 1,
  },
});
