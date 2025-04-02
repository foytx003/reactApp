import { useLocation } from 'react-router'

function WelcomePage() {
  const location = useLocation()
  const { firstName } = location.state || { firstName: 'Guest' } // Default to 'Guest' if no state is passed


  if (firstName === 'Emily') {
  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
      <p>This page is customized just for you.</p>
    </div>
  )
} else {
  return (
    <div>
      <h1>Hey hey hey!, {firstName}!</h1>
      <p>This is a generic welcome message.</p>
    </div>
  )
}
}

export default WelcomePage