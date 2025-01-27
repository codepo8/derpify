const derpify = (str, randomness = 0.3) => {
	return str.toLowerCase().split('').map(
		c => (Math.random() < randomness) ? c : c.toUpperCase()
	).join('');
};
export { derpify };