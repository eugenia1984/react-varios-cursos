import Counter from './Counter'

export default {
    title: 'Example/Counter',
    component: Counter,
    argTypes: {
        color: { control:'color', presetsColors:['#000000', '#2B860B']}
    }
}

const Template = (args) => <Counter {...args} />

export const Default = Template.bind({})