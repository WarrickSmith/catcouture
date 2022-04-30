import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const StyledLoader = styled.div`
  text-align: center;
  font-size: xxx-Large;
  font-weight: bold;
`;

const Loader = () => {
  return (
    <StyledLoader>
      <FontAwesomeIcon icon={faSpinner} spin title="Loading" />
    </StyledLoader>
  );
};

export default Loader;
