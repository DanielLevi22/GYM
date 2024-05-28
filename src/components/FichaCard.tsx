import React from "react";
import { ImageBackground, Text, StyleSheet } from "react-native";

interface FichaCardProps {
  nome: string;
  src: string;
}

export function FichaCard({ nome, src }: FichaCardProps) {
  return (
    <ImageBackground source={{ uri: src }} style={styles.imageBackground}>
      <Text style={[styles.text, styles.textShadow]}>{nome}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    height: 100,
    borderRadius: 8,
    backgroundColor: "#4A5568", // bg-gray-600
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16, // mb-4
  },
  text: {
    fontSize: 16, // text-base
    color: "#F9FAFB", // text-gray-50
  },
  textShadow: {
    textShadowColor: "#000000", // Cor preta
    textShadowOffset: { width: -1, height: -1 },
    textShadowRadius: 1,
    textShadowColor: "#000000", // Cor preta
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
});
