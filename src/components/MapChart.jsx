import React, { useState, useEffect } from 'react';

const data = {
    "kitchen": 120,
    "Living_room": 200,
    "Bedroom": 242,
    "Bathroom": 178,
    "Balcony": 125,
    "Garage": 425,
    "xxxx": 520,
    "llll": 480,
    "yyyy": 852,
}

export default function MapChart() {

    const getMax = () => {
       return Object.keys(data).reduce((a, b) => data[a] > data[b] ? a : b);
    }

    const getHeight = () => {
        return (100 / Object.keys(data).length);
    }

    const renderTable = (value) => {
        let maxRate = data[getMax()];
        let eachRate = maxRate / 50;
        let rate = (value / eachRate).toFixed(0);
        let content = [];
        console.log("current: ",rate);

        for (let index = 0; index < rate; index++) {
            content.push(
                <td></td>
            )
        }

        let rest = 50 - rate;
        console.log("rest: ",rest);

        for(let index = rate; index < 50; index++) {
            content.push(
                <td className='rest'></td>
            )
        }

        return content;
    }

    const renderContent = (data) => {
        return (
            <tbody>
                {(() => {
                    let content = [];
                    for (const key in data) {
                        if (Object.hasOwnProperty.call(data, key)) {
                            const value = data[key];
                            content.push(
                                <tr key={key} style={{height:`${getHeight()}%`}}>
                                    <div className='left'>
                                        <td>{key}</td>
                                    </div>
                                    <div className='middle'>
                                        {renderTable(value)}
                                    </div>
                                    <div className='right'>
                                        {value} KWH
                                    </div>
                                </tr>
                                )
                        }
                    }
                    return content;
                })()}
            </tbody>
        )
    }

    return (
        <div className="map-container">
            <div className="header">
                <h6>Month Power Total</h6>
                <div>
                    <input type="month" />
                </div>
            </div>
            <div className="content">
                <table>
                    {renderContent(data)}
                </table>
            </div>
        </div>
    )
}