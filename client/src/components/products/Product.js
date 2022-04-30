import styled from "styled-components";
import DiscountBadge from "./DiscountBadge";

const StyledProduct = styled.li`
  display: grid;
  align-content: space-between;
  grid-row-gap: 0.5rem;
  position: relative;
  text-align: center;
  background-color: #f6f3f3;
  box-shadow: 0.25rem 0.25rem 0.25rem grey;

  * {
    margin: 0;
  }

  .product-image {
    max-width: 100%;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  h2 {
    font-size: x-large;
    padding: 0 0.25rem;
  }

  &:hover {
    transition: 0.25s;
    box-shadow: 0.4rem 0.4rem 0.4rem grey;
  }

  @media (min-width: 42rem) {
    h2 {
      font-size: large;
    }
  }
`;

const StyledDiscountBadge = styled(DiscountBadge)`
  position: absolute;
  top: 0;
  left: 0;
  font-size: large;
  color: white;
  background-color: crimson;
  border-radius: 0.5rem;
`;

const StyledPrice = styled.p`
  color: #3168ce;
  font-weight: bold;
`;

const StyledText = styled.p`
  text-align: left;
  padding: 0 0.25rem 0.5rem 0.25rem;
`;

const StyledButton = styled.button`
  background-color: #437070;
  color: white;
  font-size: large;
  width: 100%;
  padding: 1rem 0;
  border: none;

  &:hover {
    transition: 0.25s;
    background-color: #568f8f;
  }
`;

const Product = ({
  name,
  description,
  price,
  imageName,
  imageDescription,
  discountType,
  discountValue,
}) => {
  return (
    <StyledProduct>
      <div>
        {imageName ? (
          <img
            src={`./img/${imageName}`}
            alt={imageDescription}
            className="product-image"
          />
        ) : (
          <img
            src="./img/cat-photo-default.jpg"
            alt="Default product cat"
            className="product-image"
          />
        )}
        {discountValue && discountType && (
          <StyledDiscountBadge
            discountValue={discountValue}
            discountType={discountType}
          />
        )}
      </div>
      <h2>{name}</h2>
      <StyledPrice>Price {price}</StyledPrice>
      <StyledText data-testid="product-description">{description}</StyledText>
      <StyledButton>Add to Cart</StyledButton>
    </StyledProduct>
  );
};

export default Product;
