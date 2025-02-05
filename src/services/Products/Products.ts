import { ApiHttps } from "../Api"

export const getAllProducts = async (): Promise<any> => {
	try {
		
		const response = await ApiHttps.get('products');
		return {success: true, response: response};

	}catch (error) {
		console.log(error);
		return {success: false, error: error};
	}
}