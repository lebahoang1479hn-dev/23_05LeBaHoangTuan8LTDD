import React from 'react';
import { Pressable } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Screen1({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome to Cafe World</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('./assets/hinh1.png')} />
        <Image style={styles.image} source={require('./assets/hinh2.png')} />
      </View>

      <Pressable style={styles.button} onPress={() => { navigation.navigate("Screen2") }}>
        <Text style={styles.buttonText}>GET STARTED</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20, // Tăng khoảng cách dưới tiêu đề
  },
  imageContainer: {
    marginTop: 40, // Tăng khoảng cách trên hình ảnh
  },
  image: {
    borderRadius: 10,
    width: 200,
    height: 140,
    marginBottom: 50, // Tăng khoảng cách dưới hình ảnh
  },
  button: {
    backgroundColor: '#00BDD6',
    width: 300,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40, // Tăng khoảng cách trên nút
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});