import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "./AuthScreen";
import HomeScreen from "./HomeScreen";
import { onAuthStateChanged } from "./auth";

const Stack = createStackNavigator();

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      setUser(user);
      if (initializing) setInitializing(false);
    });
    return unsubscribe;
  }, [initializing]);

  if (initializing) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <Stack.Screen name="Auth" component={AuthScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
