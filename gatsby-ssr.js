/* eslint-disable react/no-danger */
const React = require('react')
const { renderToString } = require('react-dom/server')
const { JssProvider } = require('react-jss')
const getPageContext = require('./src/context')

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

const _emotionServer = require('emotion-server')
const _react = _interopRequireDefault(require('react'))

exports.replaceRenderer = function ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) {
  // Get the context of the page to collected side effects.
  // Ternary to support Gatsby@1 and Gatsby@2 at the same time.
  const muiPageContext = getPageContext.default ? getPageContext.default() : getPageContext();

  const FullReactElement = (
    <JssProvider
      registry={muiPageContext.sheetsRegistry}
      generateClassName={muiPageContext.generateClassName}
    >
      {React.cloneElement(bodyComponent, {
        muiPageContext,
      })}
    </JssProvider>
  )

  const { html, ids, css } = _emotionServer.extractCritical(renderToString(FullReactElement));

  const criticalStyle = _react.default.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: css
    }
  });

  const criticalIds = _react.default.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "window.__EMOTION_CRITICAL_CSS_IDS__ = " + JSON.stringify(ids) + ";"
    }
  });

  const materialStyle = _react.default.createElement("style", {
    type: "text/css",
    id: "server-side-jss",
    key: "server-side-jss",
    dangerouslySetInnerHTML: {
      __html: muiPageContext.sheetsRegistry.toString()
    }
  });

  replaceBodyHTMLString(html);
  setHeadComponents([materialStyle, criticalStyle, criticalIds]);
}
