/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
import DevTools from 'mobx-react-devtools'

import {configure} from 'mobx'
import {Provider} from 'mobx-react'

import Main from './src/stores/Main.tsx'

const isProduction = process.env.NODE_ENV === 'production'

configure({isolateGlobalState: true})

export const wrapRootElement = ({element}) => {
  const main = new Main()
  return (
    <Provider store={main}>
      <div>
        {element}
        {isProduction || <DevTools />}
      </div>
    </Provider>
  )
}
