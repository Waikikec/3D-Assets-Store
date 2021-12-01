import React, { useState } from 'react';
import Select from 'react-select';

const options = [
    { value: 'concrete', label: 'Concrete' },
    { value: 'fabric', label: 'Fabric' },
    { value: 'glass', label: 'Glass' },
    { value: 'leather', label: 'Leather' },
    { value: 'metal', label: 'Metal' },
    { value: 'plastic', label: 'Plastic' },
    { value: 'stone', label: 'Stone' },
    { value: 'wood', label: 'Wood' },
];

const MultiSelect = () => {
    const [valueState, setValueState] = useState([]);

    const handleChange = (event) => {
        let tokens = event.map(i => i.value);
        setValueState(tokens);
    };

    console.log(valueState);

    return (
        <Select
            isMulti
            name="material"
            options={options}
            onChange={(e) => handleChange(e)}
        />
    )
};

export default MultiSelect;