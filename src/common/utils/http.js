const BaseUrl = 'http://localhost:8000/';

function PostUrl(url, data) {
	return fetch(`${BaseUrl}${url}`, {
		body: JSON.stringify(data),
		//body: data,
		method: 'POST',
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, same-origin, *omit
	}).then(response => response.json())
}

function GetUrl(url, data) {
	return fetch(`${BaseUrl}${url}`, {
		body: JSON.stringify(data),
		method: 'GET',
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, same-origin, *omit
	}).then(response => response.json())
}


function FileUploadUrl(url, data) {
	return fetch(`${BaseUrl}${url}`, {
		body: JSON.stringify(data),
		method: 'POST',
		headers: {
			'Content-Type': 'multipart/form-data'
		},
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, same-origin, *omit
	}).then(response => response.json())
}

const http={
	PostUrl,
	GetUrl,
	FileUploadUrl
}
export default http