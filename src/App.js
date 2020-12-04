import { Component } from 'react';
// import MyForm from './components/MyForm';
import authContext from './context/auth-context';
import AppBar from './components/AppBar';
import avatar from './avatar.png';

console.log(authContext);

export default class App extends Component {
  state = {
    isLoggedIn: false,
    user: { name: 'Манго', avatar },
    onLogIn: () => this.setState({ isLoggedIn: true }),
    onLogOut: () => this.setState({ isLoggedIn: false }),
  };

  render() {
    return (
      <authContext.Provider value={this.state}>
        <div>
          <AppBar />
        </div>
      </authContext.Provider>
    );
  }
}
