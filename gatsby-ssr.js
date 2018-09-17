/**
 * Implement Gatsby's SSR APIs in this file.
 */
import React from 'react'

import {configure} from 'mobx'
import {Provider, useStaticRendering} from 'mobx-react'

import Main from './src/stores/Main.tsx'

configure({isolateGlobalState: true})
useStaticRendering(true)

export const wrapRootElement = ({element}) => {
  const main = new Main()
  return <Provider store={main}>{element}</Provider>
}
