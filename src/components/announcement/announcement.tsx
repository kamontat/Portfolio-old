import React from 'react'

import { Link } from 'gatsby';

import { Button, Icon } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'

import {
  Root,
  CenterContainer,
  InsideCenterContainer,
  Row,
  Column,
  Shift
} from './announcement.style'

import '../../styles/style.scss'

interface SIProp {
  children: React.ReactNode
  iconLabel: string
  text: string
  link: string
}

interface AnnounceProp {
  title: string
  subtitle: string
}

const SocialIcon: React.StatelessComponent<SIProp> = ({ children, iconLabel, text, link }) => (
  <Column style={{ minWidth: "70px" }}>
    <a href={link} target="_blank">
      <Button type="primary" size="large" aria-label={iconLabel}>
        {children}
      </Button>
    </a>
    <h4>{text}</h4>
  </Column>
)

const HomeIcon: React.StatelessComponent<SIProp> = ({ children, iconLabel, text, link }) => (
  <Column style={{ minWidth: "70px" }}>
    <Link to={link}>
      <Button type="primary" size="large" aria-label={iconLabel}>
        {children}
      </Button>
    </Link>
    <h4>{text}</h4>
  </Column>
)

const AnnouncementLayout: React.StatelessComponent<AnnounceProp> = ({ title, subtitle }) => (
  <Root>
    <CenterContainer>
      <InsideCenterContainer>
        <h1>{title}</h1>
        <Shift />
        <small>{subtitle}</small>

        <Row>
          <SocialIcon
            iconLabel="link to facebook"
            text="Facebook"
            link="https://facebook.com/kamontatc">
            <FontAwesomeIcon color="#3B5998" icon={faFacebookF} />
          </SocialIcon>

          <HomeIcon
            iconLabel="go to Home page"
            text="Home"
            link="/">
            <FontAwesomeIcon icon={faHome} />
          </HomeIcon>

          <SocialIcon
            iconLabel="go to Home page"
            text="Github"
            link="https://github.com/kamontat">
            <FontAwesomeIcon color="#000" icon={faGithub} />
          </SocialIcon>
        </Row>

        <small>K. Chantrachirathumrong</small>
      </InsideCenterContainer>
    </CenterContainer>
  </Root>
)

export default AnnouncementLayout
