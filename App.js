// Basic, Required compontents
import React from "react";
import "expo-dev-client";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "@expo/vector-icons/Feather";
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { IconButton } from "@react-native-material/core";
import { Badge } from "react-native-elements";

// Screen compontents
import HomeScreen from "./src/screens/HomeScreen";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";
import CartScreen from "./src/screens/CartScreen";
import AccountScreen from "./src/screens/AccountScreen";
import CheckOutScreen from "./src/screens/CheckOutScreen";
import ShippingAddressScreen from "./src/screens/ShippingAddressScreen";
import OrderListScreen from "./src/screens/OrderListScreen";
import OrderDetailsScreen from "./src/screens/OrderDetailsScreen";
import LoginScreen from "./src/screens/LoginScreen";

// redux compontents
import { Provider, useSelector } from "react-redux";
import { store } from "./src/redux/store";

import Loading from "./src/components/Loading";
import {
  clearAsyncStorage,
  getSingleData,
  removeSingleData,
  storeSingleData,
} from "./src/localStorage/localStorage";

const Stack = createNativeStackNavigator();

const CartHeaderIcons = () => {
  const productCart = useSelector((state) => state.cart);
  const getTotalQuantity = () => {
    let total = 0;
    if (productCart.cart !== []) {
      productCart.cart.forEach((item) => {
        total += item.quantity;
      });
    }
    return total;
  };

  const navigation = useNavigation();
  let totalQty = getTotalQuantity() || null;
  var qty = totalQty;
  if (totalQty > 99) {
    qty = "99+";
  }
  return (
    <IconButton
      style={{ alignItems: "center", fontSize: 20 }}
      color="primary"
      icon={(props) => (
        <View>
          <Icon name="shopping-bag" {...props} />
          {qty !== null && (
            <Badge
              containerStyle={{
                position: "absolute",
                left: 10,
                top: 0,
              }}
              status="warning"
              value={`${qty}`}
            ></Badge>
          )}
        </View>
      )}
      onPress={() => navigation.navigate("Cart")}
    />
  );
};

const FavHeaderIcons = () => {
  const navigation = useNavigation();
  return (
    <IconButton
      style={{ alignItems: "center", fontSize: 20 }}
      color="primary"
      icon={(props) => <Icon name="heart" {...props} />}
      onPress={() => navigation.navigate("Favorite")}
    />
  );
};

function Navigation() {
  // const [customerId, setCustomerId] = React.useState("");
  // React.useEffect(() => {
  //   clearAsyncStorage();
  //   removeSingleData("customerId");
  //   storeSingleData("customerId", "2");
  //   var customer_id = getSingleData("customerId");
  //   if (customer_id !== "") {
  //     setCustomerId(customer_id);
  //   } else {
  //     storeSingleData("customerId", "2");
  //     customer_id = getSingleData("customerId");
  //     setCustomerId(customer_id);
  //   }
  // }, []);
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // headerLeft: () => (
          //   <IconButton
          //     style={{ alignItems: "center", fontSize: 20 }}
          //     color="primary"
          //     icon={(props) => <Icon name="menu" {...props} />}
          //     onPress={() => alert("Clicked Menu Icon")}
          //   />
          // ),
          headerTitle: () => (
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#fff", //#4a06c9
                  backgroundColor: "#000",
                  paddingLeft: 2,
                  paddingRight: 2,
                  // marginHorizontal: 20,
                }}
              >
                Welcome
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#000",
                  backgroundColor: "#fff",
                  // marginHorizontal: 20,
                }}
              >
                {" "}
                AJOIN{" "}
              </Text>
            </View>
          ),
          headerRight: () => <CartHeaderIcons />,
          headerStyle: {
            flex: 1,
            elevation: 25,
            shadowColor: "#fff",
            alignContent: "space-between",
          },
        }}
      />

      <Stack.Screen
        name="Product Details"
        component={ProductDetailsScreen}
        options={{
          title: "",
          headerRight: () => <FavHeaderIcons />,
          headerStyle: {
            flex: 1,
            elevation: 25,
            shadowColor: "#fff",
            alignContent: "space-between",
          },
        }}
      />

      <Stack.Screen
        name="Favorite"
        component={AccountScreen}
        options={{
          // headerLeft: () => (
          //   <IconButton
          //     style={{ alignItems: "center", fontSize: 20 }}
          //     color="primary"
          //     icon={(props) => <Icon name="menu" {...props} />}
          //     onPress={() => alert("Clicked Menu Icon")}
          //   />
          // ),
          headerTitle: () => (
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#fff", //#4a06c9
                  backgroundColor: "#000",
                  paddingLeft: 2,
                  paddingRight: 2,
                  // marginHorizontal: 20,
                }}
              >
                Welcome
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#000",
                  backgroundColor: "#fff",
                  // marginHorizontal: 20,
                }}
              >
                {" "}
                AJOIN{" "}
              </Text>
            </View>
          ),
          headerRight: () => <CartHeaderIcons />,
          headerStyle: {
            flex: 1,
            elevation: 25,
            shadowColor: "#fff",
            alignContent: "space-between",
          },
        }}
      />

      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          // headerLeft: () => (
          //   <IconButton
          //     style={{ alignItems: "center", fontSize: 20 }}
          //     color="primary"
          //     icon={(props) => <Icon name="menu" {...props} />}
          //     onPress={() => alert("Clicked Menu Icon")}
          //   />
          // ),
          headerTitle: () => (
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#fff", //#4a06c9
                  backgroundColor: "#000",
                  paddingLeft: 2,
                  paddingRight: 2,
                  // marginHorizontal: 20,
                }}
              >
                Your
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#000",
                  backgroundColor: "#fff",
                  // marginHorizontal: 20,
                }}
              >
                {" "}
                Cart{" "}
              </Text>
            </View>
          ),
          headerRight: () => <CartHeaderIcons />,
          headerStyle: {
            flex: 1,
            elevation: 25,
            shadowColor: "#fff",
            alignContent: "space-between",
          },
        }}
      />

      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerTitle: () => (
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#fff", //#4a06c9
                  backgroundColor: "#000",
                  paddingLeft: 2,
                  paddingRight: 2,
                  // marginHorizontal: 20,
                }}
              >
                Welcome
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#000",
                  backgroundColor: "#fff",
                  // marginHorizontal: 20,
                }}
              >
                {" "}
                AJOIN{" "}
              </Text>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Checkout"
        component={CheckOutScreen}
        options={{
          // headerLeft: () => (
          //   <IconButton
          //     style={{ alignItems: "center", fontSize: 20 }}
          //     color="primary"
          //     icon={(props) => <Icon name="menu" {...props} />}
          //     onPress={() => alert("Clicked Menu Icon")}
          //   />
          // ),
          headerTitle: () => (
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#fff", //#4a06c9
                  backgroundColor: "#000",
                  paddingLeft: 2,
                  paddingRight: 2,
                  // marginHorizontal: 20,
                }}
              >
                Your
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#000",
                  backgroundColor: "#fff",
                  // marginHorizontal: 20,
                }}
              >
                {" "}
                Payment{" "}
              </Text>
            </View>
          ),
          headerRight: () => <CartHeaderIcons />,
          headerStyle: {
            flex: 1,
            elevation: 25,
            shadowColor: "#fff",
            alignContent: "space-between",
          },
        }}
      />
      <Stack.Screen
        name="Address"
        component={ShippingAddressScreen}
        options={{
          // headerLeft: () => (
          //   <IconButton
          //     style={{ alignItems: "center", fontSize: 20 }}
          //     color="primary"
          //     icon={(props) => <Icon name="menu" {...props} />}
          //     onPress={() => alert("Clicked Menu Icon")}
          //   />
          // ),
          headerTitle: () => (
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#fff", //#4a06c9
                  backgroundColor: "#000",
                  paddingLeft: 2,
                  paddingRight: 2,
                  // marginHorizontal: 20,
                }}
              >
                Your
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#000",
                  backgroundColor: "#fff",
                  // marginHorizontal: 20,
                }}
              >
                {" "}
                Address{" "}
              </Text>
            </View>
          ),
          headerRight: () => <CartHeaderIcons />,
          headerStyle: {
            flex: 1,
            elevation: 25,
            shadowColor: "#fff",
            alignContent: "space-between",
          },
        }}
      />
      <Stack.Screen
        name="Orders"
        component={OrderListScreen}
        options={{
          // headerLeft: () => (
          //   <IconButton
          //     style={{ alignItems: "center", fontSize: 20 }}
          //     color="primary"
          //     icon={(props) => <Icon name="menu" {...props} />}
          //     onPress={() => alert("Clicked Menu Icon")}
          //   />
          // ),
          headerTitle: () => (
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#fff", //#4a06c9
                  backgroundColor: "#000",
                  paddingLeft: 2,
                  paddingRight: 2,
                  // marginHorizontal: 20,
                }}
              >
                Your
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#000",
                  backgroundColor: "#fff",
                  // marginHorizontal: 20,
                }}
              >
                {" "}
                Orders{" "}
              </Text>
            </View>
          ),
          headerRight: () => <CartHeaderIcons />,
          headerStyle: {
            flex: 1,
            elevation: 25,
            shadowColor: "#fff",
            alignContent: "space-between",
          },
        }}
      />
      <Stack.Screen
        name="Order Details"
        component={OrderDetailsScreen}
        options={{
          title: "",
          headerRight: () => <FavHeaderIcons />,
          headerStyle: {
            flex: 1,
            elevation: 25,
            shadowColor: "#fff",
            alignContent: "space-between",
          },
        }}
      />
    </Stack.Navigator>
    // customerId !== ? () : (
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Login"
    //       component={LoginScreen}
    //       options={{
    //         headerShown: false,
    //       }}
    //     />
    //   </Stack.Navigator>
    // )
  );
}

// const wait = (timeout) => {
//   return new Promise(resolve => setTimeout(resolve, timeout));
// }

export default function App() {
  // const [refreshing, setRefreshing] = React.useState(false);

  // const onRefresh = React.useCallback(() => {
  //   setRefreshing(true);
  //   wait(2000).then(() => setRefreshing(false));
  // }, []);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    var timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [setLoading]);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
          <ScrollView
            contentContainerStyle={{ flex: 1, backgroundColor: "#fff" }}
            // refreshControl={
            // <RefreshControl
            //   refreshing={refreshing}
            //   onRefresh={onRefresh}
            // />
            // }
          >
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
              {/* <Loading /> */}
              {loading ? <Loading /> : <Navigation />}
            </View>
          </ScrollView>
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}
