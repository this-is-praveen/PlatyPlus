const pathParams = [
  {
    path: `/PlatyPlus`,
    pageName: "HomePage",
    exact: true,
  },
  {
    path: `/PlatyPlus/product/:productId`,
    pageName: "Product",
  },
  {
    path: "*",
    pageName: "Page404",
    exact: false,
  },
];

export default pathParams;
