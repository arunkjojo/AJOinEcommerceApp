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
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { storeObjectData, storeSingleData } from "../localStorage/localStorage";

// web : 884112919005-bvrig4009oht3cpec0ej880hp4etep8t.apps.googleusercontent.com
// iOS : 884112919005-5jf7u4c88bp90v6m2470i6hel0bv4dqn.apps.googleusercontent.com
// andoid: 884112919005-n4q4h5vd32j31obubk3esumlrvnmjbam.apps.googleusercontent.com

WebBrowser.maybeCompleteAuthSession();

const LoginScreenNew = () => {
  const [accessToken, setAccessToken] = React.useState(null);
  const [user, setUser] = React.useState(null);

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    expoClientId:
      "884112919005-jhhnqqavsh487eagmvk9tgl8ndbf80gb.apps.googleusercontent.com",
    clientId:
      "884112919005-bvrig4009oht3cpec0ej880hp4etep8t.apps.googleusercontent.com",
    iosClientId:
      "884112919005-5jf7u4c88bp90v6m2470i6hel0bv4dqn.apps.googleusercontent.com",
    androidClientId:
      "884112919005-n4q4h5vd32j31obubk3esumlrvnmjbam.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
      storeSingleData("accessToken", response.authentication.accessToken);

      accessToken && fetchUserInfo();
    }
  }, [response, accessToken]);

  const fetchUserInfo = async () => {
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const useInfo = await response.json();
    setUser(useInfo);
    storeObjectData("userInfo", useInfo);
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
                promptAsync();
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

export default LoginScreenNew;

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
