import mongoose, { Document, Schema, models } from "mongoose";

export interface IOrder extends Document {
  user: mongoose.Schema.Types.ObjectId;
  products: {
    product: mongoose.Schema.Types.ObjectId;
    quantity: number;
    price: number;
  }[];
  totalPrice: number;
  status: "pending" | "delivered" | "cancelled";
  createdAt: Date;
  phoneNo: number;
  address: string;
}

const OrderSchema = new Schema<IOrder>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "delivered", "cancelled"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  phoneNo: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Order = models.Order || mongoose.model<IOrder>("Order", OrderSchema);

export default Order;
