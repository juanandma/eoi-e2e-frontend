import * as PropTypes from "prop-types";


export const Button = ({ children, onClick, ...props }) => (
  <button {...props} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
