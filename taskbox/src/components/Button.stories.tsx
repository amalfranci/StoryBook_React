import Button from "./Button";

import {action}  from '@storybook/addon-actions'

export default {
    title: "Components/Button",
    component: Button,
};

export const Primary = {
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['red', 'green', 'blue', 'white']
        },
        label: { control: 'text' }
    }
}

export const Secondary = {
    args: {

        label: "Secondary Button",
        variant: "primary"
    }
}

export const WithClick = {

    args:{

        label:'Click Me',
        onClick:action('button-clicked')
    }
}