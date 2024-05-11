import { Wrapper } from "./styles";
import PropTypes from "prop-types";

function Header({ children }) {
  return (
    <Wrapper>
      <h1>{children}</h1>
    </Wrapper>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
