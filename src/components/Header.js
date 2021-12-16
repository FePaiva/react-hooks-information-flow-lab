import React from "react";

function Header ({onDarkModeClick, whatMode}){

return (
  <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {whatMode ? "Dark" : "Light"} Mode
        </button>
      </header>
)
}





export default Header;