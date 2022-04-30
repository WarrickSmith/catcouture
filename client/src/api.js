const api = {
  getProducts: async (currentPage) =>
    // No 'limit' query parameter is required as the API uses 10 as a default
    // which matches the current application requirement and is fixed.
    await fetch(
      `${process.env.REACT_APP_API_URL}/products/?page=${currentPage}`
    ),
  getReports: async (accessToken) =>
    await fetch(`${process.env.REACT_APP_API_URL}/reports`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }),
};

export default api;
