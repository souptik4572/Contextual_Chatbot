export const setWithExpiry = (key, value, expiryTime) => {
	const now = new Date();
	const item = {
		value,
		expiryTime: now.getTime() + expiryTime,
	};
	localStorage.setItem(key, JSON.stringify(item));
};

export const getWithExpiry = (key) => {
	const itemStr = localStorage.getItem(key);
	if (!itemStr) return null;
	const item = JSON.parse(itemStr);
	const now = new Date();
	if (now.getTime() > item.expiryTime) {
		localStorage.removeItem(key);
		return null;
	}
	return item.value;
};
