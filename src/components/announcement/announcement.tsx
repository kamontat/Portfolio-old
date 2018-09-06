import React from 'react'

import { Link } from 'gatsby';

import { Typography, IconButton } from '@material-ui/core'
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
      <IconButton color="inherit" aria-label={iconLabel}>
        {children}
      </IconButton>
    </a>
    <Typography>{text}</Typography>
  </Column>
)

const HomeIcon: React.StatelessComponent<SIProp> = ({ children, iconLabel, text, link }) => (
  <Column style={{ minWidth: "70px" }}>
    <Link to={link}>
      <IconButton color="primary" aria-label={iconLabel}>
        {children}
      </IconButton>
    </Link>
    <Typography>{text}</Typography>
  </Column>
)

const AnnouncementLayout: React.StatelessComponent<AnnounceProp> = ({ title, subtitle }) => (
  <Root>
    <CenterContainer>
      <InsideCenterContainer>
        <Typography variant="display2" >{title}</Typography>
        <Shift />
        <Typography variant="caption" >{subtitle}</Typography>

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

        <Typography variant="caption" >K. Chantrachirathumrong</Typography>
      </InsideCenterContainer>
    </CenterContainer>
  </Root>
)

export default AnnouncementLayout
