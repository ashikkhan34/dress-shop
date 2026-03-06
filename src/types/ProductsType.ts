export interface ProductVariant {
  color: string;
  size: string;
  image?: string;
}

export interface ProductsType {
  id: string;
  name: string;
  slug: string;
  description: string;
  price?: string;
  discountPrice?: string;
  category: string;
  brand: string;
  stock: number;
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
  variants: ProductVariant[];
}