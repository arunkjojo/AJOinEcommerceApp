import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import * as Google from "expo-google-app-auth";
import { storeObjectData, storeSingleData } from "../localStorage/localStorage";

const LoginScreen1 = () => {
  const [accessToken, setAccessToken] = React.useState(null);
  const [user, setUser] = React.useState(null);

  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        iosClientId:
          "884112919005-5jf7u4c88bp90v6m2470i6hel0bv4dqn.apps.googleusercontent.com",
        androidClientId:
          "884112919005-n4q4h5vd32j31obubk3esumlrvnmjbam.apps.googleusercontent.com",
      });
      if (result.type === "success") {
        setAccessToken(accessToken);
        storeSingleData("accessToken", accessToken);
        accessToken && getUserData();
      } else {
        console.log("Permission denied");
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  const getUserData = async () => {
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    response.json().then((data) => {
      setUser(data);
      storeObjectData("userInfo", data);
    });
  };

  const ShowUserInfo = () => {
    if (user) {
      return (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.ionContainer}>
              <Text style={styles.text}>Welcome {user.name}</Text>
              <Image style={styles.logo} source={{ uri: user.picture }} />
            </View>
          </ScrollView>
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {user && <ShowUserInfo />}
      {user === null && (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.ionContainer}>
              <Text style={styles.text}>Welcome To AJOin</Text>
              <Image
                style={styles.logo}
                source={require("../assets/images/logo.png")}
              />
            </View>
            <TouchableOpacity
              disabled={!request}
              style={styles.signin_btn}
              onPress={() => {
                signInWithGoogleAsync();
              }}
            >
              <Image
                source={require("../assets/images/btn_google_signin.png")}
              />
            </TouchableOpacity>
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

export default LoginScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollViewContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  ionContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 400,
    height: 400,
  },
  text: {
    fontSize: 23,
    fontWeight: "bold",
  },
  signin_btn: {
    height: 100,
  },
});
