import WooCommerceAPI from 'react-native-woocommerce-api'
import { WooCommerce } from '../config/Constant'

const WooCommerceMainApi = new WooCommerceAPI({
  url: WooCommerce.url, // Your store URL
  consumerKey: WooCommerce.cunsumer_key, // Your consumer key
  consumerSecret: WooCommerce.cunsumer_secret, // Your consumer secret
  version: WooCommerce.varsion, // WooCommerce WP REST API version
  wpAPI: true, // Enable the WP REST API integration
  ssl: true,
  queryStringAuth: true
});

export default WooCommerceMainApi;