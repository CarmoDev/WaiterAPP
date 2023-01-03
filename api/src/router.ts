import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import { createCategories } from './App/useCases/categories/createCategories';
import { listCategories } from './App/useCases/categories/listCategories';
import { listProductsByCategories } from './App/useCases/categories/listProductsByCategories';
import { listProducts } from './App/useCases/products/listProducts';
import { createProducts } from './App/useCases/products/createProducts';
import { listOrders } from './App/useCases/orders/listOrders';
import { createOrder } from './App/useCases/orders/createOrders';
import { changeOrderStatus } from './App/useCases/orders/changeOrderStatus';
import { cancelOrder } from './App/useCases/orders/cancelOrder';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// Categories
//   List categories
router.get('/categories', listCategories);
//   Create Category
router.post('/categories', createCategories);

// Products
//   List products
router.get('/products', listProducts);

//   Create product
router.post('/products', upload.single('image'), createProducts);

//   Get product by category
router.get('/categories/:categoryId/products', listProductsByCategories);

// Orders
//   list Orders
router.get('/orders', listOrders);

//   Create Order
router.post('/orders', createOrder);

//   Change order status
router.patch('/orders/:orderId', changeOrderStatus);

//   Delete/Cancel order
router.delete('/orders/:orderId', cancelOrder);
