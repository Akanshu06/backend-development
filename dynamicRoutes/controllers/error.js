const path=require('path');
const routerDir = require("../helper/path");

exports.get404 = (req, res, next) => {
  res.status(404).sendFile(path.join(routerDir,'views','404.html'));
};
