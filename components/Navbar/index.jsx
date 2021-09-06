import React, { useState } from 'react';
import Link from 'next/link';
import MenuIcon from 'public/assets/svg/menu.svg';

import classes from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={classes.navbar}>
      <div className={classes['nav-container']}>
        <div className={classes['nav-logo']}>
          <Link href="/">Riley Brown</Link>
        </div>
        <div className={classes['nav-items']}>
          <Link href="/">Home</Link>
          <a rel="noreferrer" href="https://riley.gg" target="_blank">
            My Website
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/Riley-Brown"
            target="_blank"
          >
            GitHub
          </a>
          <a
            rel="noreferrer"
            href="https://twitter.com/RileyB_96"
            target="_blank"
          >
            Twitter
          </a>
        </div>
        <div className={classes['mobile-menu']}>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <MenuIcon width={20} height={20} color="#222" fill="#222" />
          </button>
          <div
            className={classes['mobile-nav-items']}
            style={{ display: menuOpen ? null : 'none' }}
          >
            <button
              title="Close Navbar"
              aria-label="Close Navbar"
              className={classes.exit}
              onClick={() => setMenuOpen(false)}
            >
              &times;
            </button>
            <a rel="noreferrer" href="https://riley.gg" target="_blank">
              My Website
            </a>
            <a
              rel="noreferrer"
              href="https://github.com/Riley-Brown"
              target="_blank"
            >
              GitHub
            </a>
            <a
              rel="noreferrer"
              href="https://twitter.com/RileyB_96"
              target="_blank"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
