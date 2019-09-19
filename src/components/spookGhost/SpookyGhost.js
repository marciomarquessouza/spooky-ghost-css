import React, { Component } from 'react';
import './SpookyGhost.css';

class SpookyGhost extends Component {
    render() {
        return (
            <div className="container">
                <div className="spooky">
                    <div className="body">
                            <div className="eyes"></div>
                            <div className="mouth"></div>
                            <div className="feet">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                    </div>
                </div>
                <div className="shadow"></div>
            </div>
        );
    }
}

export default SpookyGhost;
