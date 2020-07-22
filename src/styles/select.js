import { colors } from '../constants'

const selectGroupStyles = {
  clearIndicator: base => ({
    ...base,
    '&:hover': {
      color: colors.alert,
    },
  }),
  control: (base, { isFocused }) => ({
    ...base,
    '&:hover': {
      borderColor: !isFocused && colors.gray.dark,
    },
    borderColor: isFocused ? colors.primary.dark : colors.gray.basic,
    boxShadow: 'none',
    cursor: 'pointer',
  }),
  dropdownIndicator: (base, { isFocused }) => ({
    ...base,
    '&:hover': {
      color: colors.primary.dark,
    },
    color: isFocused ? colors.primary.dark : colors.gray.basic,
  }),
  multiValue: base => ({
    ...base,
    backgroundColor: colors.gray.light,
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
      backgroundColor: colors.gray.basic,
    },
    backgroundColor: isFocused && colors.gray.light,
    cursor: 'pointer',
  }),
}

export default selectGroupStyles
