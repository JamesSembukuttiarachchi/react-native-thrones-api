import React, { useState, useEffect } from "react";
import { View, Button, Text } from "react-native";
import Voice from "@react-native-voice/voice";

export default function VoiceToTextScreen() {
  const [result, setResult] = useState("");

  useEffect(() => {
    Voice.onSpeechResults = (e) => {
      setResult(e.value[0]);
    };
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startListening = async () => {
    try {
      await Voice.start("en-US");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View>
      <Button title="Start Listening" onPress={startListening} />
      <Text>{result}</Text>
    </View>
  );
}
