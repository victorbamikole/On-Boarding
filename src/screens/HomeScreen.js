import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { deleteItem } from "../../utils/storage";
import { useNavigation } from "@react-navigation/core";

const { width, height } = Dimensions.get("window");



const HomeScreen =  () => {
  const navigation = useNavigation();

  const handleReset = async () => {
    await deleteItem("onBoarded");
    navigation.navigate("OnBoardingScreen");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lottie}>
        <LottieView
          style={{ height: "100%" }}
          source={require("../../assets/animations/Animation - 1711719144416.json")}
          autoPlay={true}
          loop={true}
        />
      </View>

      <Text style={styles.text}>Home Page</Text>
      <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
  text: {
    fontSize: width * 0.09,
    marginBottom: 20,
  },
  resetButton: {
    backgroundColor: "#34d399",
    padding: 10,
    borderRadius: 10,
  },
});
