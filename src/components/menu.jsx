import React from 'react';

export default function Menu(props) {
    const { items } = props;
    return (
        <ul className="list-unstyled">
            {items.map(
                (data) => <li key={data.index}><a href="." className="text-white">{data.text}</a></li>,
            )}
        </ul>
    );
}
