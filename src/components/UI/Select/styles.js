const selectStyles = {
  clearIndicator: base => ({
    ...base,
    '&:hover': {
      color: '#e53e3e',
    },
    padding: '5px',
  }),
  control: (base, { isFocused }) => ({
    ...base,
    '&:hover': {
      borderColor: !isFocused && '#a0aec0',
    },
    borderColor: isFocused ? '#38b2ac' : '#cbd5e0',
    boxShadow: 'none',
    cursor: 'pointer',
    minHeight: '2rem',
  }),
  dropdownIndicator: (base, { isFocused }) => ({
    ...base,
    '&:hover': {
      color: '#38b2ac',
    },
    color: isFocused ? '#38b2ac' : '#cbd5e0',
    padding: '5px',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  input: base => ({
    ...base,
    margin: '0',
  }),
  multiValue: base => ({
    ...base,
    backgroundColor: '#e2e8f0',
  }),
  multiValueLabel: base => ({
    ...base,
    padding: '2px',
  }),
  multiValueRemove: base => ({
    ...base,
    '&:hover': {
      backgroundColor: 'transparent',
      cursor: 'pointer',
    },
  }),
  option: (base, { isFocused }) => ({
    ...base,
    '&:active': {
      backgroundColor: '#cbd5e0',
    },
    backgroundColor: isFocused && '#e2e8f0',
    cursor: 'pointer',
  }),
  placeholder: base => ({
    ...base,
    color: '#a0aec0',
  }),
}

export default selectStyles
