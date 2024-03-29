import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const OnBoardingScreen = () => {
  const navigation = useNavigation();
  const handleDone = () => {
    navigation.navigate("Home");
  };

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text style={{alignItems: 'center'}}>Done</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        DoneButtonComponent={doneButton}
        bottomBarHighlight={false}
        containerStyles={{ padding: 15 }}
        pages={[
          {
            backgroundColor: "#a7f3d0",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  style={{ height: "100%" }}
                  source={require("../../assets/animations/Animation - 1711715160339.json")}
                  autoPlay={true}
                  loop={true}
                />
              </View>
            ),
            title: "Boost Productivity",
            subtitle: "Sign up to work and boost your productivity",
          },
          {
            backgroundColor: "#fef3c7",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  style={{ flex: 1 }}
                  source={require("../../assets/animations/Animation - 1711716066283.json")}
                  autoPlay={true}
                  loop={true}
                />
              </View>
            ),
            title: "Work Seamlessly",
            subtitle: "Get your work done seamlessly without interruption",
          },
          {
            backgroundColor: "#a78bfa",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  style={{ flex: 1 }}
                  source={require("../../assets/animations/Animation - 1711716169537.json")}
                  autoPlay={true}
                  loop={true}
                />
              </View>
            ),
            title: "Achieve Higher  Goals",
            subtitle:
              "By boosting your productivity, we help you achieve your goals",
          },
        ]}
      />
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
  doneButton: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 25,
    marginHorizontal: 10,
    textAlign: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 100
  },
});
