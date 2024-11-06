import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='bg-slate-400 text-center text-white py-2 fixed inset-x-0 z-50'>
        <Link to={''}>Home</Link>
    </div>
  )
}
