import axios from 'axios';
const ApiUrl= 'https://60740264066e7e0017e78ce6.mockapi.io';
// const ApiUrl= 'http://localhost:3000';

export default function callApi(endpoint, method = 'GET', body){
	return axios({
		method: method,
		url: `${ApiUrl}/${endpoint}`,
		data: body
	}).catch(err => {
		console.log(err);
	});
};