import {StoryObj ,Meta} from '@storybook/react';
import InputLabel from '../components/inputLabel';

const meta:Meta<typeof InputLabel> ={

    component:InputLabel,
    title:"UI/TextInput",
}

export default meta


export const FirstComponent : StoryObj<typeof InputLabel> = {
    args:{
        label:"Name"
    }
}