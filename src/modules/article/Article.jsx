import React from 'react';

export default class Article extends React.Component {
    render() {
        // Refer
        // https://stackoverflow.com/questions/29852998/getting-query-parameters-from-react-router-hash-fragment
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
