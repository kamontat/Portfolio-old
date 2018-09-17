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
  return <Provider store={Main}>{element}</Provider>
}
