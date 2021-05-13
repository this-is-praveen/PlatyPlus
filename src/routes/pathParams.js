const pathParams = [
  {
    path: `/`,
    pageName: "HomePage",
  },
  {
    path: `/product/:productId`,
    pageName: "Product",
  },
  {
    path: "*",
    pageName: "Page404",
  },
];

export default pathParams;
