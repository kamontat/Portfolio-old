/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react'

import {configure} from 'mobx'
import {Provider} from 'mobx-react'

import Main from './src/stores/Main.tsx'

configure({isolateGlobalState: true})

export const wrapRootElement = ({element}) => {
  return <Provider store={Main}>{element}</Provider>
}
