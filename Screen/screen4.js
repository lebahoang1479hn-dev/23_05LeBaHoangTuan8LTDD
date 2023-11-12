import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Screen4() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headerIcon}
          source={require("./assets/ButtonTV.png")}
        />
        <Text style={styles.headerText}>Your Orders</Text>
        <Image
          style={styles.headerIcon}
          source={require("./assets/kinhlup.png")}
        />
      </View>

      <View style={styles.orderContainer}>
        <View style={styles.orderInfo}>
          <Text style={styles.orderInfoText}>CAFE DELIVERY</Text>
          <Text style={styles.orderInfoText}>ORDER 18#</Text>
        </View>
        <Text style={styles.orderAmount}>$5</Text>
      </View>

      <View style={[styles.orderContainer, { backgroundColor: '#8353E2', marginVertical: 5 }]}>
        <View style={styles.orderInfo}>
          <Text style={styles.orderInfoText}>CAFE</Text>
          <Text style={styles.orderInfoText}>ORDER 18#</Text>
        </View>
        <Text style={styles.orderAmount}>$25</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
    marginHorizontal: 90,
  },
  orderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00BDD6',
    borderRadius: 10,
    width: 330,
    height: 100,
  },
  orderInfo: {
    justifyContent: 'center',
  },
  orderInfoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginHorizontal: 10,
  },
  orderAmount: {
    fontSize: 18,
    color: '#fff',
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
});