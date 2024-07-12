import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 3000); //3 seconds

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MyApp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2A2A2A", // Adjust the background color as needed
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFFFFF",
  },
});

export default SplashScreen;
