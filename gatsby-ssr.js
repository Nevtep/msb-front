/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from 'react';

export { wrapRootElement } from './src/wrapRootElement'

export const onRenderBody = ({ path, setPostBodyComponents }) => {
    setPostBodyComponents([
        <script
            key={`https://www.paypal.com/sdk/js?client-id=${process.env.GATSBY_MSB_PP_CID}`}
            src={`https://www.paypal.com/sdk/js?client-id=${process.env.GATSBY_MSB_PP_CID}`}
        />
    ])
  }