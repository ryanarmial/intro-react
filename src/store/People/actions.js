import axios from 'axios'
export const getPeople = () => {
	return {
		types: 'PEOPLE',
		method: 'GET',
		url: 'https://swapi.co/api/people'
	}
}