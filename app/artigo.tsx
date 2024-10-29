import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router/build/exports";
import { StatusBar } from "expo-status-bar";

export default function Artigo() {
    const arts = [
        {
          id: 1,
          title: "Bom dia",
          assunto: "Previsão do tempo"
        },
        {
          id: 2,
          title: "Boa tarde",
          assunto: "Trânsito"
        },
        {
          id: 3,
          title: "Bom dia",
          assunto: "Acidentes de trânsito"
        }
      
      ];

  return (
    <View style={styles.container}>
        
    {arts.map((art)=> (
      <Link key={art.id}
        href={{
          pathname: "/artigo/[id]",
          params: {
            id: art.id,
            title: art.title,
            assunto: art.assunto
          },
        }}
      >
        <View style={styles.items} >
          <Text>{art.id}</Text>
          <Text>{art.title}</Text>
          <Text>{art.assunto}</Text>
        </View>
      </Link>
    ))}

    </View>
  );
}


const styles = StyleSheet.create ({
  container: {
    flex: 1,
    padding: 20,
    marginHorizontal: 20
  },
  items: {
    padding: 20,
    
  }
  
})