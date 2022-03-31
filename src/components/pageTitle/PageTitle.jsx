import React from "react";

import Styles from "./PageTitle.styles";

const PageTitle = ({ children }) => {
  return <Styles.Title>{children}</Styles.Title>;
};

export default PageTitle;
