import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<header className='bg-slate-300 py-5'>
			<div className='flex justify-between items-center align-elements'>
				{/* LOGO */}
				<Link className='text-3xl font-bold' to='/'>
					Logo
				</Link>
				<nav className='flex'>
					<ul>
						<li>
							<Link className='font-medium' to='/'>
								Home
							</Link>
						</li>
						<li>
							<Link className='font-medium' to='/abut'>
								About
							</Link>
						</li>
						<li>
							<Link className='font-medium' to='/contact'>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
