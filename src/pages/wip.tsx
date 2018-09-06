import React from 'react'

import AnnouncementLayout from '../components/announcement/announcement';

import withRoot from '../withRoot';

const Page404 = () => (
  <AnnouncementLayout title="Coming soon" subtitle="Stay tune, work on progress." />
)

export default withRoot(Page404)
