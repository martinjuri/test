export const isValidEmail = (email: string): boolean => {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(String(email).toLowerCase());
};

export const isEmpty = (str: string): boolean => {
	return !str || str.trim() === '';
};
