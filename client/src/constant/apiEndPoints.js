// auth endpoints
const apiEndPoints = {
  signup: "/auth/signup",
  login: "/auth/login",
  uploadImage: "/imagels/upload",

  //vendor
  createRestaurant: "/restaurant/create-restaurant",
  editRestaurant: "/restaurant/create-restaurant",
  selectRestaurant: "/restaurant/select-restaurant",
  createMenu: "/restaurant/create-menu",
  editMenu: (id) => `/menu/menu-edit/${id}`,
  deleteMenu: (id) => `/menu/menu-delete/${id}`,
  fetchMenu: "/restaurant/menu-listing",
  fecthAllOrders : "/order/vendor-order",
  //client
  userGetRes: "/client/all-restaurants",
  userGetMenu: "/client/all-menu",
  makeOrder: "/client/make-order",
  vendorOrderStatus: (id) => `/order/vendor-order/${id}`,


  // admin
  adminAllRestaurant: "/admin/all-restaurants",
  restaurantApproval: (id) => `/admin/restaurant-approve/${id}`,
  restaurantAdminDelete: (id) => `/admin/restaurant-delete/${id}`,

  // // restaurant
  // restaurantDropdown : `/restaurant/dropdown-restaurant`
};

export default apiEndPoints;
