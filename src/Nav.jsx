import {NavLink} from 'react-router-dom'
import {routes} from './routes'

export default function Nav() {
	return (
		<nav>
			<ul>
				{routes
					.filter(r => r.label)
					.map(({path, label, end}) => (
						<li key={path}>
							<NavLink key={path} to={path} end={end}>{label}</NavLink>
						</li>
					))}
			</ul>
		</nav>
	)
}
