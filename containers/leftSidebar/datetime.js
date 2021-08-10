function timeZone(date = new Date()) {
  const offset = date.getTimezoneOffset();
  const absOffset = Math.abs(offset);
  const hours = Math.floor(absOffset / 60);
  const minutes = absOffset % 60;
  const minutesOut = minutes > 0 ? ":" + ("0" + minutes).slice(-2) : "";
  return (offset < 0 ? "+" : "-") + hours + minutesOut;
}

export default function dateTime(options = {}) {
  let {
    date = new Date(),
    local = true,
    showTimeZone = false,
    showMilliseconds = false,
  } = options;

  if (local) {
    // Offset the date so it will return the correct value when getting the ISO string.
    date = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  }

  let end = "";

  if (showTimeZone) {
    end = " UTC" + (local ? timeZone(date) : "");
  }

  if (showMilliseconds && date.getUTCMilliseconds() > 0) {
    end = ` ${date.getUTCMilliseconds()}ms${end}`;
  }

  return date.toISOString().replace(/T/, " ").replace(/\..+/, end);
}
