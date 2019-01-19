import React from 'react';
import './News.css';
import { DCard } from '../shared/DCard';

export class News extends React.Component {
    render() {
        // const params = new URLSearchParams(this.props.location.search);
        // const tags = params.get('q');
        return (
            <div>
                <DCard />
                <DCard />
                <DCard />
                <DCard />
                <DCard />
            </div>
        );
    }
}
