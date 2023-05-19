import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='main'>
        <h1>Resume Details</h1>
        <NavLink className='content' to="/">View Resume</NavLink>
        <NavLink className='content' to="/createResume">Create Resume</NavLink>
    </div>
  )
}

export default Header