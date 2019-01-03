import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

class App extends React.Component {
    renderButton() {
        if(this.props.auth){
            return(
                <button>
                    Sign Out
                </button>
            );
        }
        return(
            <button>
                Sign in
            </button>
        )
    }
    renderHeader() {
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/post">Post a comment</Link>
                </li>
                <li>
                    {this.renderButton()}
                </li>
            </ul>
        )
    }

    render() {
        return(
            <div>
                {this.renderHeader()}
                <Route path="/post" component={CommentBox} />
                <Route path="/" exact component={CommentList} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(App);