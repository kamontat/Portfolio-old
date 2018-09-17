import React from 'react'

import GatsbyLink from 'gatsby-link'

import './Layout.scss'
import styles from './Layout.module.scss'
import icon from '../images/icon.png'

interface LProp {
  children: React.ReactNode;
}

const Container = ({children}) => (
  <div className="container is-fluid">{children}</div>
)

const Navbar = () => (
  <nav
    className="navbar has-margin-top-3"
    role="navigation"
    aria-label="main navigation">
    <div className="navbar-brand">
      <GatsbyLink to="/">
        <img src={icon} alt="" style={{height: '50px'}} />
      </GatsbyLink>

      <a
        role="button"
        className="navbar-burger"
        aria-label="menu"
        aria-expanded="false">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div className="navbar-menu" id="navMenu">
      <div className="navbar-end">
        <a className="navbar-item">Profiles</a>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-item">Experiences</a>

          <div className="navbar-dropdown is-right">
            <a className="navbar-item">Educations</a>
            <a className="navbar-item">Works</a>
            <a className="navbar-item">Projects</a>
          </div>
        </div>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-item">Settings</a>

          <div className="navbar-dropdown is-right">
            <a className="navbar-item">Themes</a>
            <a className="navbar-item">Languages</a>
            <a className="navbar-item">Others</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

const Body = ({children}) => (
  <section className="section">
    <div className="container">{children}</div>
  </section>
)

export default class Layout extends React.Component<LProp> {
  render() {
    return (
      <Container>
        <Navbar />
        <Body>{this.props.children}</Body>
      </Container>
    )
  }
}
