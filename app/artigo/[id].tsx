import { View, Text } from "react-native";
import React from "react";
import { Link, useGlobalSearchParams, useRouter } from "expo-router";

export default function art() {
  const params = useGlobalSearchParams();
  return (
    <View>
      <Text>{params.id}</Text>
      <Text>{params.title}</Text>
      <Text>{params.assunto}</Text>
    </View>
  );
}
