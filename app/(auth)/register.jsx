import {StyleSheet, Text} from "react-native";
import {Link} from "expo-router";

import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import ThemedButton from "../../components/ThemedButton";

const handleSubmit = () => {
    console.log("Register Button Pressed!");
}

const Register = () => {
    return (
        <ThemedView style={styles.container}>

            <Spacer height={50}/>

            <ThemedText title={true} styles={styles.title}>
                Register for an account
            </ThemedText>

            <Spacer height={50}/>

            <ThemedButton onPress={handleSubmit}>
                <Text style={{color: '#f2f2f2'}}>Register</Text>
            </ThemedButton>

            <Spacer height={50}/>

            <Link href="/login" style={styles.link}>
                <ThemedText style={{textAlign: "center"}}>
                    Do you have an account? Login here
                </ThemedText>
            </Link>
        </ThemedView>
    );
};

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 58,
        marginBottom: 30,
    },
    link: {}
});
