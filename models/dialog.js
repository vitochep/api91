const mysql = require('../mysql');

const create = async (name = '') => {
	const result = await mysql().query(`INSERT INTO dialogs (name) VALUES ('${name}');`);

	return {
		name,
		created_at: '10:00',
	};
};

module.exports = {
	// getOne,
	create,
};
