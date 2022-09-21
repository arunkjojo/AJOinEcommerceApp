import WooCommerceAPI from 'react-native-woocommerce-api'

// WooCommerceAPI configurations
const WooCommerceApi = new WooCommerceAPI({
  url: 'https://123koin.com', // Your store URL
  consumerKey: 'ck_e3277b1b5ea1fd74f0a3d65c5500894a15adf568', // Your consumer key
  consumerSecret: 'cs_c9fe962981454ac13951e5fa111b8092a999a761', // Your consumer secret
  version: 'wc/v3', // WooCommerce WP REST API version
  wpAPI: true, // Enable the WP REST API integration
  ssl: true,
  queryStringAuth: true
});

export default WooCommerceApi;