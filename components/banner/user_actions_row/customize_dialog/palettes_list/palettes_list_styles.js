"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../../../utils/styles/styles_utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var palette = theme.palette,
      spacing = theme.miscellaneous.spacing,
      screenSizes = theme.screenSizes;
  return _defineProperty({
    container: _objectSpread({
      maxHeight: '100%',
      overflowY: 'auto',
      overflowX: 'hidden',
      paddingRight: spacing * 4
    }, (0, _styles_utils.withCustomVerticalScrollbar)()),
    selectedPaletteContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    divider: {
      height: 1,
      width: '100%',
      maxWidth: 200,
      backgroundColor: palette.dark[100],
      margin: [spacing * 4, 0, spacing * 3]
    },
    selectablePaletteIndex: {
      width: spacing * 5,
      marginRight: spacing * 2
    },
    selectablePaletteContainer: {
      display: 'flex',
      alignItems: 'flex-end',
      margin: [spacing * 2, 0]
    },
    paletteVisualColor: {}
  }, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.xs), {
    paletteVisualColor: {
      height: 50,
      width: 50
    }
  });
};

exports.styles = styles;