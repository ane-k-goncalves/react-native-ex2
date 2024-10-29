import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
   <Stack screenOptions={{headerStyle: { backgroundColor: '#6a5acd', }, headerTintColor:'#fff', animation: 'fade'}}>
    <Stack.Screen name='artigo' options={{
      title: 'Artigos ',
      headerTitleStyle: {
        fontWeight:'bold',
        fontSize: 25,
      }
    }} />
    <Stack.Screen name='noticia' options={{
      title: 'Notícias ',

      headerTitleStyle: {
        fontWeight:'bold',
        fontSize: 25,
      }
    }}/>
    

   </Stack>
  )
}