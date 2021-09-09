import {Select} from './select/select'
import './select/style.scss'

const select = new Select('#select', {
    placeholder: 'Choose element',
    selectedId: '1',
    data: [
        {id: '1', value: 'React'},
        {id: '2', value: 'Vue'},
        {id: '3', value: 'Angular'}
    ]
});

window.s = select; //посмотреть