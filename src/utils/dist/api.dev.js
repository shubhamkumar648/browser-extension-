"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getImage = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getImage = function getImage(setImageData) {
  var _ref, _ref$data, urls, location, discrptions;

  return regeneratorRuntime.async(function getImage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("https://api.unsplash.com/photos/random/?client_id=".concat(process.env.REACT_APP_UNSPLASH_API_KEY), {
            params: {
              orientation: "landscape"
            }
          }));

        case 3:
          _ref = _context.sent;
          _ref$data = _ref.data;
          urls = _ref$data.urls;
          location = _ref$data.location;
          discrptions = _ref$data.discrptions;
          setImageData({
            url: urls.regular,
            location: location.name,
            description: discrptions
          });
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

exports.getImage = getImage;