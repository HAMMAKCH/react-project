import React, { useState } from "react";
import "../styles/navbar.css";
import AddBooks from "./AddBooks";

const Navbar = ({ size,setShowCart,AjouterNewBook }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShowCart(true)}>
          My Shopping Books
        </span>
        <div className="cart">
          <div>
            <button onClick={handleShow}> ADD BOOK </button>
            <AddBooks handleClose={handleClose}  show={show} AjouterNewBook={AjouterNewBook}/>
          </div>
        <br></br>
        <div className="cart" onClick={() => setShowCart(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
