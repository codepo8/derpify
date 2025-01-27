const derpify = (str, rand = 0.3) => {
	return str.toLowerCase().split('').map(
		c => (Math.random() < rand) ? c : c.toUpperCase()
	).join('');
};