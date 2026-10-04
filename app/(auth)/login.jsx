import {Pressable, StyleSheet, Text} from "react-native";
import {Link} from "expo-router";

import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import {Colors} from "../../constants/Colors";
import ThemedButton from "../../components/ThemedButton";

const handleSubmit = () => {
    console.log("Login Button Pressed!");
}

const Login = () => {
    return (
        <ThemedView style={styles.container}>

            <Spacer height={50}/>

            <ThemedText title={true} styles={styles.title}>
                Login to your account
            </ThemedText>

            <Spacer height={50}/>

            <ThemedButton onPress={ handleSubmit }>
                <Text style={{color: '#f2f2f2'}}>Login</Text>
            </ThemedButton>

            <Spacer height={50}/>

            <Link href="/register" style={styles.link}>
                <ThemedText style={{textAlign: "center"}}>
                    Don't have an account? Register here
                </ThemedText>
            </Link>
        </ThemedView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30,
    },
    button: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5
    },
    pressed: {
        opacity: 0.8
    }
});
