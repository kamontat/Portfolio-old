import React from 'react'

import AnnouncementLayout from '../components/announcement/announcement';

import withRoot from '../withRoot';

const Page404 = () => (
  <AnnouncementLayout title="Page 404" subtitle="This path is not exist in this website" />
)

export default withRoot(Page404)
