import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FlatList } from "react-native-web";

export default function Screen2({ navigation }) {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          style={styles.headerIcon}
          source={require("./assets/ButtonTV.png")}
        />
        <Text style={styles.headerText}>Shop Near Me</Text>
        <Image
          style={styles.headerIcon}
          source={require("./assets/kinhlup.png")}
        />
      </View>

      
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require("./assets/hinh1.png")}
        />
      </View>
      <View style={styles.additionalView}>
        <Image
          style={styles.additionalImage}
          source={require("./assets/tichV.png")}
        />
        <Text style={styles.additionalText}>Additional Text</Text>
        <View style={styles.timeContainer}>
          <Image
            style={styles.timeIcon}
            source={require("./assets/khoa.png")}
          />
          <Text style={styles.timeText}>10:00 AM</Text>
        </View>
        <Image
          style={styles.additionalImage}
          source={require("./assets/map.png")}
        />
      </View>

      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require("./assets/hinh2.png")}
        />
      </View>
      <View style={styles.additionalView}>
        <Image
          style={styles.additionalImage}
          source={require("./assets/tichV.png")}
        />
        <Text style={styles.additionalText}>Additional Text</Text>
        <View style={styles.timeContainer}>
          <Image
            style={styles.timeIcon}
            source={require("./assets/khoa.png")}
          />
          <Text style={styles.timeText}>10:00 AM</Text>
        </View>
        <Image
          style={styles.additionalImage}
          source={require("./assets/map.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  headerIcon: {
    width: 25,
    height: 25,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 90,
  },
  imageView: {
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: 350,
    height: 100,
  },
  additionalView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  additionalImage: {
    width: 25,
    height: 25,
  },
  additionalText: {
    marginTop: 5,
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  timeIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  timeText: {
    color: "red",
  },
});