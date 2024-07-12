import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import axios from "axios";

export default function ThronesScreen() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://thronesapi.com/api/v2/Characters")
      .then((response) => setCharacters(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.fullName}</Text>
          </View>
        )}
      />
    </View>
  );
}
