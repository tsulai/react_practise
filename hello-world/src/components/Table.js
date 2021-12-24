import React from 'react';
import Columns from './Columns'

function Table(props) {
    return (
        <table>
            <tbody>
                <tr>
                    <Columns />
                </tr>
            </tbody>
        </table>
    );
}

export default Table;