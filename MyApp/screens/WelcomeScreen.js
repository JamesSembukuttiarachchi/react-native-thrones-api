import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import axios from "axios";

const ThronesScreen = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://thronesapi.com/api/v2/Characters")
      .then((response) => setCharacters(response.data))
      .catch((error) => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.characterCard}>
      <Text style={styles.characterName}>{item.fullName}</Text>
      <Text style={styles.characterTitle}>{item.title}</Text>
      <Text style={styles.characterFamily}>House: {item.family}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2A2A",
    padding: 20,
  },
  flatListContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  characterCard: {
    backgroundColor: "#3D3D3D",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  characterName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFD482",
    marginBottom: 5,
  },
  characterTitle: {
    fontSize: 16,
    color: "#CCCCCC",
    marginBottom: 5,
  },
  characterFamily: {
    fontSize: 14,
    color: "#CCCCCC",
  },
});

export default ThronesScreen;
