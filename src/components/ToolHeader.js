import React from 'react';
import PropTypes from 'prop-types';

export const ToolHeader = ({headerText}) => {
    return (
        <header>
            <h1>{headerText}</h1>
        </header>
    );
};

ToolHeader.defaultProps = {
    headerText: 'The tool',
};

ToolHeader.propTypes = {
    headerText: PropTypes.string,
};