import React, { useState } from "react";
import ProductItem from "../ProductItem";
import { useProducts } from "../../hooks/useProducts";

import * as styles from "./index.module.scss";

const ProductGrid = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const { data = [], isLoading } = useProducts();
  const colors = Array.from(new Set(data.map((product) => product.color)));
  // Filter products based on selected color
  const filteredProducts = selectedColor
    ? data.filter((product) => product.color === selectedColor)
    : data;

  if (isLoading) {
    return <div className={styles.loadingContainer}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        <label htmlFor="colorFilter" className={styles.filterLabel}>
          Filter by color:
        </label>
        <select
          className={styles.filterSelect}
          id="colorFilter"
          value={selectedColor || ""}
          onChange={(e) => setSelectedColor(e.target.value || null)}
        >
          <option value="">All Colors</option>
          {colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <ul className={styles.productGrid}>
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductGrid;
