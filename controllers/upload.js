const fs = require('fs');

const {
    Dialog: DialogModel,
} = require('../models');

module.exports = async (req, res) => {
    const {avatar} = req.files;

    let dialogAvatar = avatar.md5;
    console.log(dialogAvatar);

    fs.rename(avatar.tempFilePath, process.env.TEMP_FILE_DIR + '/' + dialogAvatar, (err) => {
        console.log('err', err);
    });

    console.log(req);

    const dialogId = req.body.dialogId;


    const dialog = await DialogModel.findOne({
        where: {
            id: dialogId,
        }
    });

    res.json({test: true});
};

