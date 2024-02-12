import LoadingBar from './components/LoadingBar'

/* this special file is used to tell next.js to wrap our layout in a 
React Suspense and display the specified loading screen while we wait for loading
In this case, we just show a loading bar fixed at the top of the screen as well as 
as fill 100% of the page height to prevent the page from jumping
*/
export default function Loading() {
  return <LoadingBar />
}
