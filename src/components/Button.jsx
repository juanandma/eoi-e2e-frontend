import * as PropTypes from "prop-types";


export const Button = ({ children, ...props }) => (
  <button {...props} >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
