import { View, Text, Button, StyleSheet} from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function noticia() {
    const router = useRouter();

    const handleDismiss = () => {
        router.push('/dashboard')
    }
  
  
  return (

    <View style={styles.container}>
       <Text style={styles.title}>Notícia aqui</Text>
       <Text style={styles.subtitle}>Últimas notícias do Brasil e do mundo, sobre política, economia, emprego, educação, saúde, meio ambiente, tecnologia, ciência, cultura e carros.</Text>
      <Button title='ver mais' onPress={() => handleDismiss()} />
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
      },
      subtitle: {
        fontSize: 15,
        color: "#38434D",
      },
      container: {
        flex: 1,
        padding: 20,
        marginHorizontal: 20
      },
  
});