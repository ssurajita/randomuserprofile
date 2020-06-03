import React from 'react';
import template from './LandingPage.jsx';
import axios from 'axios';
class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        fname: '',
        lname: '',
        dob: '',
        email: '',
        password: '',
        img: '',
      },
    };
    this.showHidePassword = this.showHidePassword.bind(this);
    this.getNewUser = this.getNewUser.bind(this);
  }

  componentDidMount() {
    this.getNewUser();
  }
  showHidePassword() {
    this.setState({
      toggle: !this.state.toggle,
    });
  }
  getNewUser() {
    axios
      .get('https://randomuser.me/api/')
      .then((result) => {
        console.log(result.data.results[0], 'result');
        const { name, dob, email, login, picture } = result.data.results[0];
        console.log(name, dob, email, login);
        this.setState({
          data: {
            ...this.state.data,
            fname: name.first,
            lname: name.last,
            dob: dob.date,
            password: login.password,
            img: picture.large,
            email,
          },
          toggle: true,
        });
      })
      .catch((e) => {});
  }
  render() {
    console.log(this.state.data, 'data');
    return template.call(this);
  }
}

export default LandingPage;
