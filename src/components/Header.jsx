import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">
        <HighlightIcon />
        Keepit
      </h1>
    </header>
  );
}

export default Header;
