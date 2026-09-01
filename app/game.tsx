import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";
import ColeteOrbe from "@/components/ColeteOrbe";

export default function Game() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ColeteOrbe />
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 10,
    borderRadius: 10,
  },
  backButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
});
