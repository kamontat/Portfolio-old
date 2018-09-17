import React from 'react'
import classNames from 'classnames'

import GatsbyLink from 'gatsby-link'

import {inject, observer} from 'mobx-react'

import {MainProps, MainStoreProps} from '../stores/main'

import './Layout.scss'
import icon from '../images/icon.png'

interface LProp {
  children: React.ReactNode;
}

const Container = ({children}) => (
  <div className="container is-fluid">{children}</div>
)

@inject((stores: MainStoreProps) => ({
  main: stores.store,
}))
@observer
class Navbar extends React.Component<MainProps> {
  render() {
    return (
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
            className={classNames({
              'navbar-burger': true,
              'is-active': this.props.main.hamburger,
            })}
            aria-label="menu"
            onClick={() =>
              this.props.main.toggleHamburger(!this.props.main.hamburger)
            }
            aria-expanded="false">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div
          className={classNames({
            'navbar-menu': true,
            'is-active': this.props.main.hamburger,
          })}
          id="navMenu">
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
  }
}

@inject((stores: MainStoreProps) => ({
  main: stores.store,
}))
@observer
class BodyComponent extends React.Component<MainProps> {
  render() {
    return (
      <section
        className="section"
        onClick={() => this.props.main.toggleHamburger(false)}>
        <div className="container">{this.props.children}</div>
      </section>
    )
  }
}

export default class Layout extends React.Component<LProp> {
  render() {
    return (
      <Container>
        <Navbar />
        <BodyComponent>{this.props.children}</BodyComponent>
      </Container>
    )
  }
}
