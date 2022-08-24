import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { RefreshControl, SafeAreaView, ScrollView, Text, View } from "react-native";
import { IconButton } from "@react-native-material/core";

import HomeScreen from "./src/screens/Home";
import ProductListScreen from "./src/screens/ProductList";
import ProductDetailsScreen from "./src/screens/ProductDetails";
import CartScreen from './src/screens/Cart';
import AccountScreen from './src/screens/Account';
import React from "react";

const Stack = createNativeStackNavigator();

function Navigation() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ 
          headerTitle: () => <View><Text style={{fontSize:20, fontWeight: 'bold', color:'primary'}}>Welcome AJOIN</Text></View>,
          headerRight: () => <IconButton
            style={{ alignItems:'center' }}
            color='primary'
            icon={(props) => <Icon name="cart" {...props} />}
            onPress={()=> navigation.navigate("Cart")}
          />,
          headerStyle: {
            flex: 1,
            elevation: 25,
            shadowColor: "#fff",
            alignContent: 'space-between'
          }}}/>
      <Stack.Screen name="Product List" component={ProductListScreen} />
      <Stack.Screen name="Product Details" component={ProductDetailsScreen} />

      <Stack.Screen name="Favorite" component={AccountScreen} />

      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Account" component={AccountScreen} />
    </Stack.Navigator>
  );
}

function BottomNav() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        maxHeight: 50,
        flex: 1,
        flexDirection: "row",
        alignItems: "baseline",
      }}
    >
      <IconButton
        style={{ flex: 1 }}
        icon={(props) => <Icon name="home" {...props} />}
        color="primary"
        onPress={()=> navigation.navigate("Home")}
      />
      <IconButton
        style={{ flex: 1 }}
        icon={(props) => <Icon name="heart" {...props} />}
        color="primary"
        onPress={()=> navigation.navigate("Favorite")}
      />
      <IconButton
        style={{ flex: 1 }}
        icon={(props) => <Icon name="account" {...props} />}
        color="primary"
        onPress={()=> navigation.navigate("Account")}
      />
    </View>
  );
}

// const wait = (timeout) => {
//   return new Promise(resolve => setTimeout(resolve, timeout));
// }

export default function App(){
  // const [refreshing, setRefreshing] = React.useState(false);

  // const onRefresh = React.useCallback(() => {
  //   setRefreshing(true);
  //   wait(2000).then(() => setRefreshing(false));
  // }, []);
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{flex: 1}}
          // refreshControl={
            // <RefreshControl
            //   refreshing={refreshing}
            //   onRefresh={onRefresh}
            // />
          // }
        >
          <View style={{ flex: 1 }}>
            <Navigation />
          </View>
          <BottomNav />
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  )
};
