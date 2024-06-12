import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ImageBackground, Text, StyleSheet, View, TouchableOpacity } from "react-native";

interface FichaCardProps {
  id: string;
  nome: string;
  src: string;
}

export function FichaCard({ nome, src }: FichaCardProps) {
 const navigate = useNavigation()
  return (
    <TouchableOpacity className=" overflow-hidden" onPress={() => navigate.navigate("Treino")}>
    <ImageBackground source={{ uri: src }} style={styles.imageBackground} className="overflow-hidden ">
      <Text style={[styles.text, styles.textShadow]}>{nome}</Text>
    </ImageBackground>
    </TouchableOpacity>
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
  },
});
