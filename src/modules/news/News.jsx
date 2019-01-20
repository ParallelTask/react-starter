/**
 * @typedef {import('../shared/models/DCardModel').IDCardModel} IDCardModel
 */

import React from 'react';
import './News.css';
import { DCard } from '../shared/DCard';

export class News extends React.Component {
    render() {
        // const params = new URLSearchParams(this.props.location.search);
        // const tags = params.get('q');
        /** @type {IDCardModel} */
        let p = {
            linkText: `
                H & T Seafood, Inc. Recalls Siluriformes Products Produced without
                H & T Seafood, Inc. Recalls Siluriformes Products Produced without
            `,
            body: `
                Whats going on at Ewood throughout Saturday? We host Ipswich Town at Ewood Park
                and heres our matchday timetable for the main event
                Whats going on at Ewood throughout Saturday? We host Ipswich Town at Ewood Park
            `,
            time: '07-Jan-2019'
        };
        return (
            <div>
                <DCard data={p} />
                <DCard />
                <DCard />
                <DCard />
                <DCard />
            </div>
        );
    }
}
