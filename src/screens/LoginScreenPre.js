import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  Button,
} from "react-native";
import React from "react";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

const LoginScreenPre = () => {
  GoogleSignin.configure({
    webClientId:
      "884112919005-4fdqknkj7vhc4kl6o8lqofht9vdt39b4.apps.googleusercontent.com",
  });
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = React.useState(true);
  const [user, setUser] = React.useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onGoogleButtonPress = async () => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const user_sign_in = auth().signInWithCredential(googleCredential);
    user_sign_in
      .then((user) => {
        console.log("user", user);
      })
      .catch((error) => {
        console.log("error", error);
      });
    // return user_sign_in;
  };

  // if (initializing) return null;

  if (!user) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.srollViewContainer}>
            <View style={styles.ionContainer}>
              <Image
                style={styles.logo}
                source={require("../assets/images/logo.png")}
              />
            </View>
          </ScrollView>
        </View>
        <GoogleSigninButton
          style={{ width: 300, height: 65, marginTop: 300 }}
          onPress={onGoogleButtonPress}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.srollViewContainer}>
          <View style={styles.ionContainer}>
            <Image
              style={styles.logo}
              source={require("../assets/images/logo.png")}
            />
          </View>
        </ScrollView>
      </View>
      <View>
        <Text style={styles.text}>Welcome {user.email}</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreenPre;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  srollViewContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  ionContainer: {
    flexDirection: "row",
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
});
