import { useState } from 'react';

export const useForm = (initialFrom) => {

    const [form, setForm] = useState(initialFrom);

    const change = ({ target: { name, type, value } }) => {
        setForm({
            ...form,
            [name]: type === 'number'
                ? Number(value)
                : value,
        });
    };

    // 0 - form data
    // 1 - chnage function for input controls
    // 2 - reset the form function 

    return [form, change, () => setForm(initialFrom)];
};
