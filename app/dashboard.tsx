import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function dashboard() {
  return (
    <View>
      <Text style={styles.title}>NOTICIA</Text>
      <Text style={styles.subtitle}>This is the first page of your app.</Text>
    </View>
  )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 64,
        fontWeight: "bold",
      },
      subtitle: {
        fontSize: 36,
        color: "#38434D",
      },
});