import WooCommerceAPI from "react-native-woocommerce-api";
import { WooCommerceConfig } from "../config/Constant";

// WooCommerceAPI configurations
const WooCommerceApi = new WooCommerceAPI(...WooCommerceConfig);

export default WooCommerceApi;
