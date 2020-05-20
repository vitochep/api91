const { string: stringValidate } = require('../validators');
const { 
	validate: validateError, 
	model: modelError, 
} = require('../errors');
const { dialog: dialogModel } = require('../models');
const { dialog: dialogResponse } = require('../responses');

module.exports = async (req, res) => {
	let { name, email, password } = req.body;

	// parse request data
	try {
		name = stringValidate(name);
	}
	catch (err) {
		res.json(validateError(err));
	}

	// query to db
	try {
		const item = await dialogModel.create(name);

		res.json(dialogResponse(item));
	}
	catch (err) {
		res.json(modelError(err));
	}
};

