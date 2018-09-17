import React from 'react'

import AnnouncementLayout from '../../components/announcement/announcement'

import withRoot from '../../withRoot'

const Page404 = () => (
  <AnnouncementLayout
    title="404"
    subtitle="PAGE"
    detail="This path is not exist."
  />
)

export default withRoot(Page404)
