import React from 'react';
import "./header.css"

import {auth} from "./firebaseUtils"

export default function Header({currentUser}) {
	console.log('Header currentUser is ', currentUser);
	return (<>
		<nav>
			<li>Home</li>
			<li>Syllabus</li>
			<li>FAQ</li>
			{currentUser ? 
				<button onClick={() => auth.signOut()}>SignOut</button> : 
				<a>SignIn</a>
			}
		</nav>
	</>)
}