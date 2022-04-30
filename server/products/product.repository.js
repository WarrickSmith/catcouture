const pool = require("../db");

module.exports = {
  getProducts: async (limit, offset) => {
    try {
      const result = await pool.query(
        `SELECT
            p.id,
            p.name,
            p.description,
            p.price,
            pc.name AS "categoryName",
            pi.name AS "imageName",
            pi.description AS "imageDescription",
            pd.value AS "discountValue",
            dt.type AS "discountType"
          FROM product p
          LEFT JOIN product_category pc ON p.product_category_id = pc.id
          LEFT JOIN product_image pi ON p.product_image_id = pi.id
          LEFT JOIN product_discount pd ON pd.product_id = p.id 
          LEFT JOIN discount_type dt ON pd.discount_type_id = dt.id
          ORDER BY
            p.id
          LIMIT $1
          OFFSET $2;
            `,
        [limit, offset]
      );
      return result.rows;
    } catch (error) {
      throw Error(error);
    }
  },

  // This function is used to provide the totalItems count for
  // the paginated response object on /api/products endpoint
  getTotalProducts: async () => {
    try {
      const result = await pool.query(
        `SELECT COUNT(*) 
        FROM
        product;
            `
      );
      return Number(result.rows[0].count);
    } catch (error) {
      throw Error(error);
    }
  },
};
