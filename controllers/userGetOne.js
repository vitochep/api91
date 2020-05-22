const { number: numberValidate } = require('../validators');
const { 
	validate: validateError, 
	model: modelError, 
} = require('../errors');
const { User: UserModel } = require('../models');
const { user: userResponse } = require('../responses');

module.exports = async (req, res) => {
	let { id } = req.params;

	// parse request data
	try {
		id = numberValidate(id);
	}
	catch (err) {
		res.json(validateError(err));
	}

	// query to db
	try {
		const item = await UserModel.findOne({ 
			where: {
				id
			}, 
		});

		res.json(userResponse(item));
	}
	catch (err) {
		res.json(modelError(err));
	}
};

