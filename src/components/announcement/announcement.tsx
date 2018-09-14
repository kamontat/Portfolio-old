import React from 'react'
import classNames from 'classnames';

import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'

import styles from './announcement.module.scss'

interface SIProp {
  children: React.ReactNode
  link: string
}

interface AnnounceProp {
  title: string
  subtitle: string
  detail: string
}

const SocialIcon: React.StatelessComponent<SIProp> = ({ children, link }) => (
  <div className={styles.column}>
    <a href={link} className="icon">
      {children}
    </a>
  </div>
)

const HomeIcon: React.StatelessComponent<SIProp> = ({ children, link }) => (
  <div className={styles.column}>
    <Link to={link} className="icon">
      {children}
    </Link>
  </div>
)

const AnnouncementLayout: React.StatelessComponent<AnnounceProp> = ({ title, subtitle, detail }) => (
  <div className={styles.full}>
    <div className={styles.container}>
      <div className={styles.center}>
        <h1 className="is-size-1">
          <strong className={classNames("has-margin-right-2", styles.colorImprove)}>
            {title}
          </strong>
          {subtitle}
        </h1>
        <span className="is-size-5">{detail}</span>
        <div className={classNames(styles.row, "has-margin-bottom-2", "has-margin-top-4")}>
          <SocialIcon
            link="https://facebook.com/kamontatc">
            <FontAwesomeIcon className={styles.colorImprove} icon={faFacebookF} size="2x" fixedWidth />
          </SocialIcon>

          <HomeIcon
            link="/">
            <FontAwesomeIcon className={styles.colorImprove} icon={faHome} size="2x" fixedWidth />
          </HomeIcon>

          <SocialIcon
            link="https://github.com/kamontat">
            <FontAwesomeIcon className={styles.colorImprove} icon={faGithub} size="2x" mask={['far', 'circle']} fixedWidth />
          </SocialIcon>
        </div>
        <small>K. Chantrachirathumrong</small>
      </div>
    </div>
  </div>
)

export default AnnouncementLayout
