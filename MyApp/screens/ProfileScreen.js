import React from "react";
import { View, Text, Button } from "react-native";
import { signOut } from "./auth";

export default function ProfileScreen({ navigation }) {
  const handleSignOut = async () => {
    try {
      await signOut();
      navigation.navigate("Auth");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>User Profile</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
}
