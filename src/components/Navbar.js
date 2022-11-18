import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div class="logo">
        <h2>BlockChains</h2>
      </div>
      <ul class="navLinks">
        <li>マーケット</li>
        <li>交換</li>
        <li>ブロックチェーン</li>
        <li>ウォレット</li>
      </ul>
      <button>ログイン</button>
    </nav>
  );
};

export default Navbar;
