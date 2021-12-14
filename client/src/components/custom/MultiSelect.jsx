import React from 'react';
import Select from 'react-select';

const materialOptions = [
    { value: 'concrete', label: 'Concrete' },
    { value: 'fabric', label: 'Fabric' },
    { value: 'glass', label: 'Glass' },
    { value: 'leather', label: 'Leather' },
    { value: 'metal', label: 'Metal' },
    { value: 'plastic', label: 'Plastic' },
    { value: 'stone', label: 'Stone' },
    { value: 'wood', label: 'Wood' },
    { value: 'organics', label: 'Organics' },
];

const colorOptions = [
    { value: 'white', label: 'White' },
    { value: 'black', label: 'Black' },
    { value: 'red', label: 'Red' },
    { value: 'green', label: 'Green' },
    { value: 'blue', label: 'Blue' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'beige', label: 'Beige' },
    { value: 'grey', label: 'Grey' },
    { value: 'orange', label: 'Orange' },
    { value: 'gold', label: 'Gold' },
    { value: 'brown', label: 'Brown' },
];

const MultiSelect = ({ name, onChange }) => {
    return (
        <Select
            isMulti
            name={name}
            options={(name === 'material' ? materialOptions : colorOptions)}
            onChange={onChange}
        />
    )
};

export default MultiSelect;
