function qs(query, root = document) {
	return root.querySelector(query);
}

function qsAll(query, root = document) {
	return root.querySelectorAll(query);
}

export {
	qs,
	qsAll
};