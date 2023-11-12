
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Screen3({ navigation }) {
  const [data, setData] = useState([]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          style={styles.headerIcon}
          source={require('./assets/ButtonTV.png')}
        />
        <Text style={styles.headerText}>Drinks</Text>
        <Image
          style={styles.headerIcon}
          source={require('./assets/kinhlup.png')}
        />
      </View>

      

      {/* Go to Cart Button */}
      <View style={styles.cartButtonContainer}>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate('Screen4')}
        >
          <Text style={styles.cartButtonText}>GO TO CART</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIcon: {
    width: 25,
    height: 25,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 110,
  },
  itemContainer: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imageContainer: {
    margin: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  itemContent: {
    margin: 5,
  },
  itemName: {
    fontSize: 16,
  },
  
 
  cartButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartButton: {
    backgroundColor: '#EFB034',
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 20,
  },
});