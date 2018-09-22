import Axios from 'axios';

let instance;

export function getData() {

	let url = window.location.href.split('/');
	let user = url[url.length - 1];
	return getInstance().get(`http://localhost:3001/profile/${user}`);
}

function getInstance() {
	if(!instance) {
		instance = Axios.create({
			baseURL: 'http://localhost:3001',
		});
	}
	return instance;
}
