import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { signUp, signIn } from "./auth";

export default function AuthScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);

  const handleAuth = async () => {
    try {
      if (isSignUp) {
        await signUp(email, password);
      } else {
        await signIn(email, password);
      }
      navigation.navigate("Home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title={isSignUp ? "Sign Up" : "Sign In"} onPress={handleAuth} />
      <Text onPress={() => setIsSignUp(!isSignUp)}>
        {isSignUp
          ? "Already have an account? Sign In"
          : "Don't have an account? Sign Up"}
      </Text>
    </View>
  );
}
