import createLoadingPlugin from "@rematch/loading";

export const loadingPlugin = createLoadingPlugin({
  whitelist: [
    "Users/userLogin",
    "Auth/userVerify",
    "Auth/setUserPassword",
    "Auth/signUpReq",
    "Auth/forgotPassword",
    "Auth/login",
    "Product/getProductsListByPage",
    "Product/getProductDetails",
    "Offer/getAllProductRequestList"
  ]
});
