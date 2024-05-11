const { constants } = require("../constatnts");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VADLIDATION_ERROR:
      res.json({
        title: "Validation Failed!",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "NotFound",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.UNAUTHORIZED:
        res.json({
          title: "Unautohrized",
          message: err.message,
          stackTrace: err.stack,
        });
        break;
    case constants.FORBIDDEN:
            res.json({
              title: "Forbidden",
              message: err.message,
              stackTrace: err.stack,
            });
            break;
    case constants.SERVER:
                res.json({
                  title: "Server Error",
                  message: err.message,
                  stackTrace: err.stack,
                });
                break;
    default:
        console.error('No error, all good!');
      break;
  }
};

module.exports = errorHandler;
