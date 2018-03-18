import React from 'react';
import { StyleSheetServer } from 'aphrodite';
import ReactDOMServer from 'react-dom/server';
import HtmlToReact from 'html-to-react';
import PropTypes from 'prop-types';
import Layout from './Layout.jsx';
import Demo from './Demo.jsx';

// Contains the generated html, as well as the generated css and some
// rehydration data.
const { html, css } = StyleSheetServer.renderStatic(() =>
  ReactDOMServer.renderToStaticMarkup(<Demo />));

export { html, css };

export default function Index(props) {
  return (<Layout
    bluemixAnalytics={props.bluemixAnalytics}
    css={css}
  >{(new HtmlToReact.Parser(React)).parse(html)}
  </Layout>);
}

Index.defaultProps = {
  bluemixAnalytics: false,
};

Index.propTypes = {
  bluemixAnalytics: PropTypes.bool,
};
