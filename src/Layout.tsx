import React from 'react'

import GatsbyLink from 'gatsby-link'

import './Layout.scss'
import styles from './Layout.module.scss'
import icon from './images/icon.png'

interface LProp {
  children: React.ReactNode
}

const Container = ({ children }) => <div className="container is-fluid">{children}</div>

const Navbar = () => (
  <nav className="level has-margin-top-4">
    <p className="level-item has-text-centered">
      <a className="link is-info">Home</a>
    </p>
    <p className="level-item has-text-centered">
      <a className="link is-info">Menu</a>
    </p>
    <p className="level-item has-text-centered">
      <GatsbyLink to="/">
        <img src={icon} alt="" style={{ height: '50px' }} />
      </GatsbyLink>
    </p>
    <p className="level-item has-text-centered">
      <a className="link is-info">Reservations</a>
    </p>
    <p className="level-item has-text-centered">
      <a className="link is-info">Contact</a>
    </p>
  </nav>
)

const Body = ({ children }) => (
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
