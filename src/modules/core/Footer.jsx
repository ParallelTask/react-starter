import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="main-footer">
                <div className="float-left site-label">
                    The Complete HRMS Suite
                </div>
                <div className="float-right">© 2019&nbsp;
                    <strong>
                        <a
                            rel="noreferrer noopener"
                            target="_blank"
                            href="http://www.ggktech.com">GGK Technologies
                        </a>
                    </strong> All Rights Reserved.
                </div>
            </footer>
        );
    }
}
