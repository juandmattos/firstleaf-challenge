import React from "react";
import * as styles from "./index.module.scss";

type Product = {
  id: number;
  special_notes?: string;
  name: string;
  tag_line: string;
  vintage: string;
  origin: string;
  fanciful_varietal: string;
  msrp: number;
  price: number;
  display_msrp: string;
  display_price: string;
  award_highlights?: {
    "silver-medal"?: number;
  };
  pairings: string;
  color: string;
  images: string;
  ratings_pct: number;
  display_name: string;
};

type ProductItemProps = {
  product: Product;
};

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <li className={styles.productItem}>
      <img
        src={product.images}
        alt={product.name}
        className={styles.productImage}
      />
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{product.display_name}</h3>
        <p
          className={styles.productVintage}
        >{`${product.origin}, ${product.vintage}`}</p>
        <p className={styles.productPrice}>{product.display_price}</p>
        <p className={styles.productTagline}>{product.tag_line}</p>
      </div>
    </li>
  );
};

export default ProductItem;
