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
  fetchMenu: "/restaurant/menu-listing",

  // admin
  adminAllRestaurant: "/admin/all-restaurants",
  restaurantApproval: (id) => `/admin/restaurant-approve/${id}`,
  restaurantAdminDelete: (id) => `/admin/restaurant-delete/${id}`,

  // // restaurant
  // restaurantDropdown : `/restaurant/dropdown-restaurant`
};

export default apiEndPoints;
