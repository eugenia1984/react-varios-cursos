import PropTypes from 'prop-types'

const TextInput = ({ name, type, label, placeholder }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  )
}

TextInput.propTypes = {
  /**
   * name attr for input
   */
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string
}

export default TextInput
