import React, { Component } from 'react';
import ReactStateDemo from './react-state-demo';
import ReduxStateDemo from './redux-state-demo';
import ReduxStateRefinedDemo from './redux-state-refined-demo';
import ReduxStateThunkDemo from './redux-state-thunk-demo';

const reactStateHash = '#react-state';
const reduxStateHash = '#redux-state';
const reduxStateRefinedHash = '#redux-state-refined';
const reduxStateThunkHash = '#redux-state-thunk';

const style = {
    link: {
        alignItems: 'center',
        border: '1px solid white',
        color: 'black',
        display: 'flex',
        height: '1.5rem',
        justifyContent: 'center',
        padding: 10,
        textDecoration: 'none',
        width: 200,
    },
    linkContainer: {
        display: 'flex',
        flexFlow: 'row wrap',
    },
    activeLink: {
        border: '1px solid blue',
    },
};

const Link = ({ active, hash, label, updateHash }) => (
    <div>
        <a
            href={ hash }
            onClick={ () => updateHash(hash) }
            style={{
                ...style.link,
                ...(active === hash ? style.activeLink : {}),
            }}
        >
            { label }
        </a>
    </div>
);

class App extends Component {
    state = {
        hash: window.location.hash || '',
    }

    updateHash = hash => this.setState({ hash })

    render() {
        return (
            <div>
                <div style={ style.linkContainer }>
                    <Link
                        active={ this.state.hash }
                        hash={ reactStateHash }
                        label="React State"
                        updateHash={ this.updateHash }
                    />
                    <Link
                        active={ this.state.hash }
                        hash={ reduxStateHash }
                        label="Redux State"
                        updateHash={ this.updateHash }
                    />
                    <Link
                        active={ this.state.hash }
                        hash={ reduxStateRefinedHash }
                        label="Redux State Condensed"
                        updateHash={ this.updateHash }
                    />
                    <Link
                        active={ this.state.hash }
                        hash={ reduxStateThunkHash }
                        label="Redux State Thunk"
                        updateHash={ this.updateHash }
                    />
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
