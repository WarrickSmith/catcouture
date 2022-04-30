const express = require("express");
const Joi = require("joi");
const router = express.Router();
const queryParamValidationMiddleware = require("../middleware/queryParamValidationMiddleware");
const productRepository = require("./product.repository");

const queryParamsSchema = Joi.object().keys({
  page: Joi.number().integer().min(1),
  limit: Joi.number().integer().min(1),
});

router.get(
  "/",
  queryParamValidationMiddleware(queryParamsSchema),
  async (req, res, next) => {
    try {
      const { limit = 10, page = 1 } = req.query;
      const offset = limit * (page - 1);

      const products = await productRepository.getProducts(limit, offset);
      const totalItems = await productRepository.getTotalProducts();
      const totalPages = Math.ceil(totalItems / limit);

      const responseResults = {
        products,
        currentPage: parseInt(page),
        totalPages: totalPages,
        itemsPerPage: parseInt(limit),
        totalItems: totalItems,
      };
      return res.json(responseResults);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
