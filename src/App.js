import React, { Component } from 'react';
import ReactStateDemo from './react-state-demo';
import ReduxStateDemo from './redux-state-demo';
import ReduxStateRefinedDemo from './redux-state-refined-demo';

const reactStateHash = '#react-state';
const reduxStateHash = '#redux-state';
const reduxStateRefinedHash = '#redux-state-refined';

class App extends Component {
    state = {
        hash: window.location.hash || '',
    }

    render() {
        return (
            <div>
                <div>
                    <a
                        href={ reactStateHash }
                        onClick={ () => this.setState({ hash: reactStateHash }) }
                    >
                        React State
                    </a>
                </div>

                <div>
                    <a
                        href={ reduxStateHash }
                        onClick={ () => this.setState({ hash: reduxStateHash }) }
                    >
                        Redux State
                    </a>
                </div>

                <div>
                    <a
                        href={ reduxStateRefinedHash }
                        onClick={ () => this.setState({ hash: reduxStateRefinedHash }) }
                    >
                        Redux State Refined
                    </a>
                </div>

                {
                    (() => {
                        switch (this.state.hash) {
                            case reactStateHash:
                                return <ReactStateDemo />;

                            case reduxStateHash:
                                return <ReduxStateDemo />;

                            case reduxStateRefinedHash:
                                return <ReduxStateRefinedDemo />;

                            default:
                                return null;
                        }
                    })()
                }
            </div>
        );
    }
}

export default App;
