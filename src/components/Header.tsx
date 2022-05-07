import styled from '@emotion/styled'
import { useState } from 'react'

const S: any = {}
S.Header = styled.header`
  width: 100%;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);

  nav {
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    color: #fff;
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    font-weight: var(--font-bold);

    img {
      width: 0.75rem;
    }
  }

  .toggle {
    color: #fff;
    display: inline-flex;
    font-size: 1.15rem;
    cursor: pointer;
  }

  @media screen and (max-width: 767px) {
    .menu {
      position: fixed;
      background-color: var(--black-color);
      top: 0;
      right: -100%;
      width: 100%;
      height: 100%;
      transition: 0.3s;
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    text-align: center;
    row-gap: 3rem;
    padding-top: 9rem;
  }

  .link {
    text-transform: uppercase;
    color: var(--text-color-light);
    font-size: var(--h2-font-size);
    transition: 0.3s;

    &:hover {
      color: #fff;
    }
  }

  .close {
    font-size: 2rem;
    color: #fff;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }

  .show-menu {
    right: 0;
  }

  &.scroll-header {
    background-color: var(--body-color);
    box-shadow: 0 1px 4px hsla(0, 4%, 15%, 0.1);

    .logo,
    .toggle {
      color: var(--title-color);
    }

    .logo img {
      mix-blend-mode: difference;
    }
  }

  .active-link {
    color: #fff;
  }

  @media screen and (min-width: 767px) {
    nav {
      height: calc(var(--header-height) + 1.5rem);
    }

    .toggle,
    .close {
      display: none;
    }

    .list {
      padding-top: 0;
      flex-direction: row;
      column-gap: 4rem;
    }

    .link {
      position: relative;
      font-size: var(--normal-font-size);
      text-transform: initial;

      &::after {
        content: '';
        position: absolute;
        width: 1px;
        height: 12px;
        background-color: var(--text-color-light);
        transform: translateX(1.25rem);
        top: 0;
        bottom: 0;
        margin: auto 0;
      }
    }

    .scroll-header .link {
      color: var(--text-color);
    }

    .scroll-header .active-link {
      color: var(--title-color);
    }

    .scroll-header .active-link::after {
      background-color: var(--title-color);
    }
  }
`

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleToggle = () => {
    setShowMenu(!showMenu)
  }

  const NavLink = ({ href, name }) => (
    <a href={href} className="link" onClick={handleToggle}>
      {name}
    </a>
  )

  return (
    <S.Header id="header">
      <nav id="nav" className="container">
        <a href="#" className="logo">
          <img src="/img/logo.png" alt="" />
          Coffeee.
        </a>
        <div className={`menu ${showMenu ? 'show-menu' : null}`}>
          <ul className="list">
            <li className="item">
              <NavLink href="#home" name="Home" />
            </li>
            <li className="item">
              <NavLink href="#products" name="Products" />
            </li>
            <li className="item">
              <NavLink href="#premium" name="Premium" />
            </li>
            <li className="item">
              <NavLink href="#blog" name="Blog" />
            </li>
          </ul>

          <div className="close" onClick={handleToggle}>
            <i className="bx bx-x"></i>
          </div>
        </div>

        <div className="toggle" onClick={handleToggle}>
          <i className="bx bx-grid-alt"></i>
        </div>
      </nav>
    </S.Header>
  )
}

export default Header
