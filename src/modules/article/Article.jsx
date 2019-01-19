import React from 'react';

export class Article extends React.Component {
    render() {
        const params = new URLSearchParams(this.props.location.search);
        const tags = params.get('q');
        return (
            <div>
                <h1>{tags}</h1>
                <div>title</div>
                <div>content</div>
                <div>tags</div>
            </div>
        );
    }
}
