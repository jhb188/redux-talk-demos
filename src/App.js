import React, { Component } from 'react';
import ReactStateDemo from './react-state-demo';
import ReduxStateDemo from './redux-state-demo';
import ReduxStateRefinedDemo from './redux-state-refined-demo';
import ReduxStateThunkDemo from './redux-state-thunk-demo';

const reactStateHash = '#react-state';
const reduxStateHash = '#redux-state';
const reduxStateRefinedHash = '#redux-state-refined';
const reduxStateThunkHash = '#redux-state-thunk';

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

                <div>
                    <a
                        href={ reduxStateThunkHash }
                        onClick={ () => this.setState({ hash: reduxStateThunkHash }) }
                    >
                        Redux State Thunk
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

                            case reduxStateThunkHash:
                                return <ReduxStateThunkDemo />;

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
