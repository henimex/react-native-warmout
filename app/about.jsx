import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";


const About = () => {

  return (
    <View style={[styles.container]}>
      <Text style={styles.title}>{'Your are in now "About Page"'}</Text>
      <Link href="/" style={styles.link}>
        Home Page
      </Link>
    </View>
  );
};

export default About;

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
    fontWeight: "bold",
    marginVertical: 20,
    borderBottomWidth: 1,
  },
});
