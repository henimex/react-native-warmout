import { StyleSheet, Text, View } from 'react-native'
import { Link } from "expo-router";
import React from 'react'

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Page</Text>

      <Link href="/" style={styles.link}>
        Home Page
      </Link>
       <Link href="/about" style={styles.link}>
        About Page
      </Link>
    </View>
  )
}

export default Contact

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
  link:{
    fontSize: 30,
    fontweight: 'bold',
    marginVertical: 20,
    borderBottomWidth: 1,
  }
})