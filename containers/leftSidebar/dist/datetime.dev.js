"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = dateTime;

function timeZone() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  var offset = date.getTimezoneOffset();
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  var minutesOut = minutes > 0 ? ":" + ("0" + minutes).slice(-2) : "";
  return (offset < 0 ? "+" : "-") + hours + minutesOut;
}

function dateTime() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$date = options.date,
      date = _options$date === void 0 ? new Date() : _options$date,
      _options$local = options.local,
      local = _options$local === void 0 ? true : _options$local,
      _options$showTimeZone = options.showTimeZone,
      showTimeZone = _options$showTimeZone === void 0 ? false : _options$showTimeZone,
      _options$showMillisec = options.showMilliseconds,
      showMilliseconds = _options$showMillisec === void 0 ? false : _options$showMillisec;

  if (local) {
    // Offset the date so it will return the correct value when getting the ISO string.
    date = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  }

  var end = "";

  if (showTimeZone) {
    end = " UTC" + (local ? timeZone(date) : "");
  }

  if (showMilliseconds && date.getUTCMilliseconds() > 0) {
    end = " ".concat(date.getUTCMilliseconds(), "ms").concat(end);
  }

  return date.toISOString().replace(/T/, " ").replace(/\..+/, end);
}