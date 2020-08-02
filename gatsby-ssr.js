/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from 'react';

export { wrapRootElement } from './src/wrapRootElement'

export const onRenderBody = ({ path, setPostBodyComponents }) => {
    console.log(path)
    setPostBodyComponents([
        <script
            key="https://www.paypal.com/sdk/js?client-id=AbwJsf3ow9jJcDecmEZ1b4oosA1rBia8KopJZBz-qluVndkSq7FKPIlYDkGZH-m8_J2BZvMbU7dBxlE6"
            src="https://www.paypal.com/sdk/js?client-id=AbwJsf3ow9jJcDecmEZ1b4oosA1rBia8KopJZBz-qluVndkSq7FKPIlYDkGZH-m8_J2BZvMbU7dBxlE6"
        />
    ])
  }