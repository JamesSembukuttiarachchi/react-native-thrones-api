import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const LoginScreen = () => {
  const navigation = useNavigation();

  const goToSignup = () => {
    navigation.navigate("Signup");
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>MyApp</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#CCCCCC"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#CCCCCC"
          secureTextEntry
          autoCompleteType="password"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity onPress={goToSignup}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2A2A2A",
    padding: 20,
  },
  content: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 0,
    marginBottom: 50,
    color: "white",
  },
  input: {
    width: "100%",
    height: 60,
    borderColor: "#cccccc",
    backgroundColor: "#3D3D3D",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 50,
    marginBottom: 10,
  },
  button: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFD482",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 100,
    marginBottom: 100,
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  signupContainer: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: 50,
  },
  signupText: {
    marginRight: 5,
    fontSize: 15,
    color: "#FFFFFF",
  },
  signupLink: {
    fontSize: 16,
    color: "#FFD482",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
