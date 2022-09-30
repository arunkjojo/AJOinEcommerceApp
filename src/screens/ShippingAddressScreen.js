import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import updateCustomerAddress from "../api/putApi/updateCutomerAddress";
import AsyncStorageHelper from "../localStorage/AsyncStorageHelper";

const ShippingAddress = () => {
  const nameRef = React.useRef();
  const firstAddressRef = React.useRef();
  const secondAddressRef = React.useRef();
  const cityNameRef = React.useRef();
  const stateNameRef = React.useRef("");
  const pinCodeRef = React.useRef();

  const [name, setName] = React.useState();
  const [firstAddress, setFirstAddress] = React.useState();
  const [secondAddress, setSecondAddress] = React.useState();
  const [cityName, setCityName] = React.useState();
  const [stateName, setStateName] = React.useState();
  const [pinCode, setPinCode] = React.useState();
  const [customerId, setCustomerId] = React.useState();

  React.useEffect(() => {
    AsyncStorageHelper.getSingleData("name", setName);
    AsyncStorageHelper.getSingleData("firstAddress", setFirstAddress);
    AsyncStorageHelper.getSingleData("secondAddress", setSecondAddress);
    AsyncStorageHelper.getSingleData("cityName", setCityName);
    AsyncStorageHelper.getSingleData("stateName", setStateName);
    AsyncStorageHelper.getSingleData("pinCode", setPinCode);

    AsyncStorageHelper.getSingleData("customerId", setCustomerId);
  }, []);

  const shippingData = {
    first_name: name,
    last_name: "",
    company: "",
    address_1: firstAddress,
    address_2: secondAddress,
    city: cityName,
    state: stateName,
    postcode: pinCode,
    country: "IN",
  };

  const updateAddressDetails = (keyName, keyValue, setKeyValue) => {
    setKeyValue(keyValue);
    // console.log("updateAddressDetails",keyName, keyValue);
    AsyncStorageHelper.storeSingleData(keyName, keyValue);
  };

  const handleUpdateAddress = () => {
    console.log("handleUpdateAddress", shippingData);
    // AsyncStorageHelper.storeOjectData("shippingData", shippingData);

    // updateCustomerAddress(customerId, shippingData)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err));
  };
  const focusSet = () => {
    if (name != "") nameRef.focus();
    if (firstAddress != "") firstAddressRef.focus();
    if (secondAddress != "") secondAddressRef.focus();
    if (cityName != "") cityNameRef.focus();
    if (stateName != "") stateNameRef.focus();
    if (pinCode != "") pinCodeRef.focus();
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.container}
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          autoCapitalize="characters"
          returnKeyType={"next"}
          placeholder="Your Name"
          value={name}
          onChangeText={(text) => {
            updateAddressDetails("name", text, setName);
          }}
          onSubmitEditing={() => {
            focusSet();
          }}
          blurOnSubmit={false}
        />

        <TextInput
          style={styles.input}
          autoComplete="postal-address"
          returnKeyType={"next"}
          autoCapitalize="characters"
          placeholder="Address 1"
          value={firstAddress}
          onChangeText={(text) => {
            updateAddressDetails("address1", text, setFirstAddress);
          }}
          onSubmitEditing={() => {
            focusSet();
          }}
          blurOnSubmit={false}
        />

        <TextInput
          style={styles.input}
          autoCapitalize="characters"
          returnKeyType={"next"}
          placeholder="Address 2"
          value={secondAddress}
          onChangeText={(text) => {
            updateAddressDetails("address2", text, setSecondAddress);
          }}
          onSubmitEditing={() => {
            focusSet();
          }}
          blurOnSubmit={false}
        />

        <TextInput
          style={styles.input}
          autoCapitalize="characters"
          returnKeyType={"next"}
          placeholder="City"
          value={cityName}
          onChangeText={(text) => {
            updateAddressDetails("city", text, setCityName);
          }}
          onSubmitEditing={() => {
            focusSet();
          }}
          blurOnSubmit={false}
        />

        <TextInput
          style={styles.input}
          autoCapitalize="characters"
          returnKeyType={"next"}
          placeholder="State"
          value={stateName}
          onChangeText={(text) => {
            updateAddressDetails("state", text, setStateName);
          }}
          onSubmitEditing={() => {
            focusSet();
          }}
          blurOnSubmit={false}
        />

        <TextInput
          style={styles.input}
          keyboardType="numeric"
          returnKeyType={"done"}
          autoComplete="postal-code"
          placeholder="Pin Code"
          value={pinCode}
          onChangeText={(text) => {
            updateAddressDetails("pincode", text, setPinCode);
          }}
          onSubmitEditing={() => {
            focusSet();
          }}
          blurOnSubmit={true}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleUpdateAddress()}
      >
        <Text style={styles.buttonText}>Update Address</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ShippingAddress;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    marginTop: 10,
  },
  inputContainer: {
    width: "85%",
  },
  input: {
    backgroundColor: "#fff",
    color: "#000",
    fontSize: 15,
    marginTop: 20,
    height: 30,
    borderRadius: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#000",
    marginTop: 40,
    marginBottom: 20,
    height: 40,
    width: "90%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#666",
    borderWidth: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
