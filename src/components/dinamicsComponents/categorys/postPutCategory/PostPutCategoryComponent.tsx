
import React from "react";
import { Button, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './PostPutCategoryStyle'

export default function PostPutCategoryComponent() {
  const [text, onChangeText] = React.useState("Useless Text");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CategoryComponent</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <View style={styles.buttonSend}>
          <Button
            title="Send"
            color="#841584"
          />
        </View>


      </SafeAreaView>
    </View>
  );
}