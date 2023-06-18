import React from 'react';

import './TableStyle.css'

function Table({data, deleteItem, openFormUpdate, columnsObj}) {
    return (
        <section className="ftco-section">
            <div className="container">
                <table id="employees">
                    <thead>
                    <tr>
                        {columnsObj.map((item) => {
                            return (
                                <th key={item.id}>{item.name}</th>
                            )
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data?.map((item) => {
                            return (
                                <tr key={item.id}>
                                    {columnsObj?.map((key) => {
                                        let result
                                        if (key.dataKey !== 'Delete' && key.dataKey !== 'Update') {
                                            result = item[key.dataKey]
                                        } else if (key.dataKey === 'Delete') {
                                            result = <button className="button button3"
                                                             onClick={() => deleteItem(item.id)}>{key.dataKey}</button>
                                        } else if (key.dataKey === 'Update') {
                                            result = <button className="button button2"
                                                             onClick={() => openFormUpdate(item)}>{key.dataKey}</button>
                                        }
                                        return (
                                            <td>{result}</td>

                                        )

                                    })}
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </section>

    )
}

export default Table
