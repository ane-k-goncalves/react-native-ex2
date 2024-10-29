import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function usuario() {
  return (
   <Tabs>
    <Tabs.Screen name="perfil" options={{ title: 'Meu perfil'}} />
    <Tabs.Screen name="po" options={{ title: 'Feed'}} />

   </Tabs>
  )
}