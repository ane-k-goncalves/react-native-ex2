import { View, Text } from 'react-native'
import React from 'react'
import { useGlobalSearchParams } from 'expo-router';

export default function post() {
    const params = useGlobalSearchParams();
    return (
      <View>
        <Text>{params.id}</Text>
        <Text>{params.post}</Text>
        
      </View>
    );
}