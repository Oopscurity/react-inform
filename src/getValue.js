const getSelectedValues = (options) => {
  const result = [];
  if (options) {
    for (let index = 0; index < options.length; index += 1) {
      const option = options[index];
      if (option.selected) {
        result.push(option.value);
      }
    }
  }
  return result;
};

const isEvent = candidate => !!(candidate && candidate.stopPropagation && candidate.preventDefault);

export default function getValue(event) {
  if (isEvent(event)) {
    const { target: { type, value, checked, files }, dataTransfer } = event;
    if (type === 'checkbox') {
      return checked;
    }
    if (type === 'file') {
      return files || (dataTransfer && dataTransfer.files);
    }
    if (type === 'select-multiple') {
      return getSelectedValues(event.target.options);
    }
    return value;
  }
  // not an event, so must be either our value or an object containing our value in the 'value' key
  return event && typeof event === 'object' && event.value !== undefined ?
    event.value : event;
}
