import React from "react";
import { Link } from "react-router-dom";

import styles from "./Nav.module.css";
import cartImg from "../../img/cart.png";

import Container from "components/Container/Container";
import ProductCounterContainer from "../../container/ProductCounterContainer";

const Nav = () => (
  <nav className={styles.Navbar}>
    <Container>
      <ul className={styles.Nav}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </Container>
    <div>
      <Link to="/cart">
        <img src={cartImg} className={styles.CartImg} alt="cart" />
      </Link>

      <ProductCounterContainer />
    </div>
  </nav>
);

export default Nav;
