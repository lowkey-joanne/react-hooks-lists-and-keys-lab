import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const myList = links.map(link => <a key={link} href={"#" + link} >{link}</a>)
  
  return (
    <nav>
      {myList}
    </nav> 
  )
}

export default NavBar;
