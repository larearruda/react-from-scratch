import axios from 'axios';

enum Urls {
	BASE_URL_HTTPS = 'https://fakestoreapi.com/'
}

export const ApiHttps = axios.create({
	baseURL: Urls.BASE_URL_HTTPS,
});

// export s