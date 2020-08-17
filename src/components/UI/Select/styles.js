const colors = {
  alert: '#e53e3e',
  gray300: '#e2e8f0',
  gray400: '#cbd5e0',
  gray500: '#a0aec0',
  primary: '#38b2ac',
}

const selectStyles = {
  clearIndicator: base => ({
    ...base,
    '&:hover': {
      color: colors.alert,
    },
    padding: '5px',
  }),
  control: (base, { isFocused }) => ({
    ...base,
    '&:hover': {
      borderColor: !isFocused && colors.gray500,
    },
    borderColor: isFocused ? colors.primary : colors.gray400,
    boxShadow: 'none',
    cursor: 'pointer',
    fontSize: '.875rem',
    minHeight: '2rem',
  }),
  dropdownIndicator: (base, { isFocused }) => ({
    ...base,
    '&:hover': {
      color: colors.primary,
    },
    color: isFocused ? colors.primary : colors.gray400,
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
    backgroundColor: colors.gray300,
  }),
  multiValueLabel: base => ({
    ...base,
    fontSize: '0.875rem',
    padding: '2px',
  }),
  multiValueRemove: base => ({
    ...base,
    '&:hover': {
      backgroundColor: 'transparent',
      cursor: 'pointer',
    },
  }),
  noOptionsMessage: base => ({
    ...base,
    color: colors.gray500,
  }),
  option: (base, { isFocused }) => ({
    ...base,
    '&:active': {
      backgroundColor: colors.gray400,
    },
    backgroundColor: isFocused && colors.gray300,
    color: '#000',
    cursor: 'pointer',
    fontSize: '0.875rem',
  }),
  placeholder: base => ({
    ...base,
    color: colors.gray500,
  }),
}

export default selectStyles
