import { View, Text, Button } from "react-native";
import React from "react";
import getCustomer from "../api/getApi/getCustomer";
import AsyncStorageHelper from "./../localStorage/AsyncStorageHelper";

const Account = () => {
  const [user, setUser] = React.useState({});
  const [customerId, setCustomerId] = React.useState("0");

  const customerIdSelector = () => {
    var id = parseInt(customerId);
    id++;
    AsyncStorageHelper.storeSingleData("customerId", id.toString());
    AsyncStorageHelper.getSingleData("customerId", setCustomerId);
  };
  React.useEffect(() => {
    AsyncStorageHelper.getSingleData("customerId", setCustomerId);
  }, []);
  React.useEffect(() => {
    // console.log(customerId);
    getCustomer(customerId).then((res) => {
      setUser(res);
    });
  }, [getCustomer, customerId]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Text style={{ fontSize: 15, margin: 20, fontWeight: "700" }}>
        ID : {customerId}
      </Text>
      <Button
        style={{ fontSize: 15 }}
        onPress={() => customerIdSelector()}
        title="Add Id Value"
      />
    </View>
  );
};

export default Account;
