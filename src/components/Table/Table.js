import React from 'react'

// const Table = ({ data: { head, body } }) => {
const Table = ({ data, page }) => {
    let head = null;
    let body = null;
    let textHeader = [];
    console.log(data);
    if (data && data.length > 0) {
        textHeader = Object.keys(data[0]);
        console.log(textHeader);
        // head = textHeader.forEach((h, index) => {
        //     <tr key={ 'headtr' + index }>
        //         <th>
        //             { h }
        //         </th>
        //     </tr>
        // }); 
        body = data.map((dataText, index) => (
            <tr key={'bodytr' + index}>
                {
                    textHeader.forEach((t, index2) => {
                        <td key={'tr' + index + 'td' + index2}>{dataText[t]}</td>
                    })
                }
            </tr>
        ));
    }
    console.log(head, body);
    return (
        <div className="table">
            <table>
                <thead>
                    {
                        textHeader.forEach((h, index) => {
                                <tr key={ 'headtr' + index }>
                                    <th>
                                        { h }
                                    </th>
                                </tr>
                        })
                    }
                </thead>
                <tbody>
                    {body}
                </tbody>
            </table>
        </div>
    )
}

export default Table
