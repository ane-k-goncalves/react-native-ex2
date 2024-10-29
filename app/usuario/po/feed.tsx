import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function feed() {
  const posts = [
    {
      id: 1,
      post: "kkk"
    },
    {
      id: 2,
      post: "help"
    },
    {
      id: 3,
      post: "aaaaaaaaaaaaaaaaaaaaa"
    }
  ]

  return (
    
    <View>
      <Text>feed</Text>
      {posts.map((post)=> (
      <Link key={post.id}
        href={{
          pathname: "/posts/[id]",
          params: {
            id: post.id,
            title: post.post,
          },
        }}
      >
        <Text>Post: {post.id} </Text>
      </Link>
      ))}
    </View>
  );
}
