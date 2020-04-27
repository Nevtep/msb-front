/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
      `Hay actualizaciones en la aplicación. ` +
        `¿Recargar para ver la última versión??`
    )
    if (answer === true) {
      window.location.reload()
    }
  }
