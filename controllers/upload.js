const fs = require('fs');

const {
    Dialog: DialogModel,
} = require('../models');

const { dialogOne: dialogOneResponse } = require('../responses');

module.exports = async (req, res) => {
    const {avatar} = req.files;

    let dialogAvatar = avatar.md5;
    console.log(dialogAvatar);

    fs.rename(avatar.tempFilePath, process.env.TEMP_FILE_DIR + '/' + dialogAvatar + '.jpg', (err) => {
        console.log('err', err);
    });

    const dialogId = req.body.dialogId;

    const dialog = await DialogModel.findOne({
        where: {
            id: dialogId,
        }
    });

    console.log(dialog)

    dialog.update({avatar:dialogAvatar + '.jpg'});

    res.json(dialogOneResponse(dialog));
};