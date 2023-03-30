import Product from './Product';
import styled from 'styled-components';

// CODE CITATION:
// This source was referenced to better understand css-grid minmax usage specifically with card layouts.
// The usage is in line 15 below.
// Source Link: https://getflywheel.com/layout/card-layout-css-grid-layout-how-to/
// Source: Website called 'Flywheel' focused on wordpress hosting.
// Author: Abbey Fitzgerald.
// Date Published: Dec 3rd 2018.
// Date Referenced: Mar29th 2022.

const StyledProductsGridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2.5rem 1.5rem;
  list-style: none;
  padding: 0 1rem;
  margin: 0;

  @media screen and (min-width: 54rem) {
    padding: 0 5rem;
  }
`;

const ProductList = ({ products, className }) => {
  return (
    <StyledProductsGridContainer>
      {products.map((product) => (
        <Product
          name={product.name}
          key={product.id + product.name}
          description={product.description}
          price={product.price}
          imageName={product.imageName}
          imageDescription={product.imageDescription}
          discountValue={product.discountValue}
          discountType={product.discountType}
        />
      ))}
    </StyledProductsGridContainer>
  );
};

export default ProductList;
