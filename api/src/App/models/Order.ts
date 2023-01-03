import { model, Schema } from 'mongoose';

export const Order = model(
  'Order',
  new Schema({
    table: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['Waiting', 'in_Production', 'Done'],
      default: 'Waiting',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    products: {
      require: true,
      type: [
        {
          product: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Product',
          },
          quantity: {
            type: Number,
            default: 1,
          },
        },
      ],
    },
  })
);
