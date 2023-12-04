import TextInput from './TextInput'

export default {
  title: 'Components/TextInput',
  component: TextInput
}

const Template = (args) => <TextInput {...args} />

export const Default = Template.binf({});
Default.args = {
  name: 'fname',
  label: 'First name',
  placeholder: 'Enter your name'
}