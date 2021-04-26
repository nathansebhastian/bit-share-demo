import React from "react";
import PropTypes from "prop-types";

export const Card = ({ variant, title, children }) => (
  <div
    style={{
      ...styles.card,
      background: variant === "primary" ? "#e9ecef" : "#c9f6cd",
    }}
  >
    <h1 style={styles.header}>{title}</h1>
    {children}
  </div>
);

Card.propTypes = {
  /**
   * card style variant
   */
  variant: PropTypes.string,
  /**
   * card title
   */
  title: PropTypes.string.isRequired,
  /**
   * the JSX element inside the card
   */
  children: PropTypes.node.isRequired,
};

const styles = {
  card: {
    width: "300px",
    padding: "1.25rem",
    borderRadius: "6px",
    color: "#000",
  },
  header: {
    fontWeight: "600",
    fontSize: "1.5rem",
    marginBottom: ".5rem",
  },
};

Card.defaultProps = {
  variant: "primary",
  title: "Card Title",
  children: <p>Card description here</p>,
};
