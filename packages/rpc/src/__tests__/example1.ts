export type Product = {
  id: string;
  name: string;
  /**
   * Product categories
   */
  categories: string[];
};

// export type HasMany<T> = T[];
// export type HasOne<T> = T;
//
// export type Product = {
//   id: string;
//   name: string;
//   brand: string;
//   description: string;
//   categories: string[];
//   images: Image[];
//   tags: string[];
//   skus: HasMany<SKU>;
// };
//
// // SKU.ts (Stock Keeping Unit)
// export interface SKU {
//   id: string;
//   product: HasOne<Product>;
//   variationAttributes: VariationAttribute[];
//   price: number;
//   images: Image[];
//   inventoryLevel: number;
// }
//
// // VariationAttribute.ts
// export interface VariationAttribute {
//   name: string;
//   value: string;
// }
//
// // Image.ts
// export interface Image {
//   url: string;
//   altText?: string;
// }
//
// // InventoryItem.ts
// export interface InventoryItem {
//   id: string;
//   skuId: string; // Reference to SKU
//   warehouseId: string; // Reference to Warehouse
//   quantity: number;
//   geohash: string;
//   status: 'available' | 'reserved' | 'sold';
// }
//
// // Warehouse.ts
// export interface Warehouse {
//   id: string;
//   name: string;
//   address: Address;
//   geohash: string;
// }
//
// // Address.ts
// export interface Address {
//   street1: string;
//   street2?: string;
//   city: string;
//   state: string;
//   country: string;
//   postalCode: string;
// }
//
// // Order.ts
// export interface Order {
//   id: string;
//   userId: string; // Reference to User (buyer)
//   createdAt: Date;
//   status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
//   items: OrderItem[];
//   deliveryAddress: Address;
//   paymentDetails: PaymentDetails;
//   shippingMethod: string;
// }
//
// export interface OrderItem {
//   skuId: string; // Reference to SKU
//   quantity: number;
//   unitPrice: number; // Price per item, fixed at the time of purchase
// }
//
// // Store.ts
// export interface Store {
//   id: string;
//   name: string;
//   description: string;
//   ownerId: string; // Reference to User (seller)
//   ratingAverage: number;
//   ratingCount: number;
//   policies: StorePolicy[];
// }
//
// // StorePolicy.ts
// export interface StorePolicy {
//   title: string;
//   description: string;
// }
//
// // User.ts
// export interface User {
//   id: string;
//   name: string;
//   email: string;
//   userType: 'buyer' | 'seller';
//   authenticationData: AuthenticationData;
//   preferences?: UserPreferences;
// }
//
// // AuthenticationData.ts
// export interface AuthenticationData {
//   hashedPassword: string; // Consider using more secure ways to handle authentication/authorization
// }
//
// // UserPreferences.ts
// export interface UserPreferences {
//   language: string;
//   currency: string;
// }
//
// // PaymentDetails.ts
// export interface PaymentDetails {
//   method: 'credit_card' | 'paypal' | 'bank_transfer' | 'crypto';
//   status: 'pending' | 'completed' | 'failed';
//   transactionId?: string;
// }
//
// // Review.ts
// export interface Review {
//   id: string;
//   productId: string; // Reference to Product or Store
//   userId: string; // Reference to User
//   rating: number;
//   comment: string;
//   createdAt: Date;
// }
