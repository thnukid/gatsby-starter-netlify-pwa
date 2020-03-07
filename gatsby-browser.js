import wrapWithProvider from "./wrap-with-provider"
export const onServiceWorkerUpdateFound = () => {
  if (
    window.confirm(
      'This site has been updated with new data. Do you wish to reload the site to get the new data?'
    )
  ) {
    window.location.reload(true)
  }
}
export const wrapRootElement = wrapWithProvider
