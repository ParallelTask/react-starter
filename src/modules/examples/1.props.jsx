import React from 'react';

export class PropsRoute extends React.Component {
    render() {
        return (
            <Props name='props-example' />
        );
    }
}

export class Props extends React.Component {

    constructor (props) {
        super(props);
        this.state = { count: 1 };
        this.clickMe = this.clickMe.bind(this);
    }

    clickMe() {
        // Even though we modify the props, it wont get updated
        // because props is read-only
        this.props = { name: 'Hello Props' };

        // However state gets updated
        this.setState({ count: 10 });
    }

    arg(i) {
        this.setState({ count: i });
    }

    render() {
        return (
            <div>
                <div>name: {this.props.name}, count: {this.state.count}</div>
                <br /> <br />
                <button onClick={this.clickMe}>Click Me for props example</button>
                <br /> <br />
                <button onClick={this.arg.bind(this, 2)}>Click Me for argument example</button>
                <br /> <br />
                <PropsChild inv={this.arg.bind(this)} />
            </div>
        );
    }
}

export class PropsChild extends React.Component {

    constructor (props) {
        super(props);
        this.state = {};
        this.run = this.run.bind(this);
    }

    run() {
        this.props.inv(6);
    }

    render() {
        return (
            <button onClick={this.run}>Click Me to invoke parent method from child example</button>
        );
    }
}
