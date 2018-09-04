/* eslint-disable react/no-danger */

const React = require('react')
const { _server, renderToString } = require('react-dom/server')
const { JssProvider } = require('react-jss')
const getPageContext = require('./src/context')

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

const _emotionServer = require('emotion-server')
const _react = _interopRequireDefault(require('react'))

exports.replaceRenderer = function ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) {
  // Get the context of the page to collected side effects.
  // Ternary to support Gatsby@1 and Gatsby@2 at the same time.
  const muiPageContext = getPageContext.default ? getPageContext.default() : getPageContext();

  const _extractCritical = (0, _emotionServer.extractCritical)((0, _server.renderToString)(bodyComponent)),
    html = _extractCritical.html,
    ids = _extractCritical.ids,
    css = _extractCritical.css;

  const bodyHTML = renderToString(
    <JssProvider
      registry={muiPageContext.sheetsRegistry}
      generateClassName={muiPageContext.generateClassName}
    >
      {React.cloneElement(html, {
        muiPageContext,
      })}
    </JssProvider>,
  );

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

  replaceBodyHTMLString(bodyHTML);
  setHeadComponents([criticalStyle, criticalIds, materialStyle]);
}
