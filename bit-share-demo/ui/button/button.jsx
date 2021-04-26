import React from "react";
import PropTypes from "prop-types";

export const Button = ({ variant, disabled, children, ...rest }) => {
  let backgroundColor = "#0c7df7";
  if (variant === "secondary") {
    backgroundColor = "#db7093";
  }
  if (disabled) {
    backgroundColor = "#a5a5a5";
  }
  return (
    <button
      style={{
        ...styles.button,
        background: backgroundColor,
      }}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

const styles = {
  button: {
    cursor: "pointer",
    color: "white",
    fontSize: "1em",
    margin: "1em",
    padding: "0.25em 1em",
    "&:hover": {
      opacity: "0.8",
    },
    "&:disabled": {
      borderColor: "#a5a5a5",
      cursor: "not-allowed",
    },
  },
};

Button.propTypes = {
  /**
   * button variant style
   */
  variant: PropTypes.oneOf(["primary", "secondary"]),
  /**
   * disabled attribute
   */
  disabled: PropTypes.bool,
  /**
   * The text inside the button
   */
  children: PropTypes.string,
};

Button.defaultProps = {
  variant: "primary",
  disabled: false,
  children: "click me",
};
