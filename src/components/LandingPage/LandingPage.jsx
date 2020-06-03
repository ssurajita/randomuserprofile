import './LandingPage.css';
import React from 'react';

function template() {
  const data = this.state.data;
  var pwd = this.state.toggle ? this.state.data.password : '*********';
  return (
    <div className='landing-page'>
      <img className='person-picture' src={data.img} alt='' />
      <br />

      <div className='person-name'>
        <span>{data && data.fname}</span> {'   '}
        <span>{data && data.lname}</span>
      </div>

      <div className='person-info'>
        <label>Birthday : </label>
        <span>{data && data.dob}</span>
        <br />
        <label>Email : </label>
        <span>{data && data.email}</span>
        <br />
        <label>Password : </label>
        <span>{pwd}</span>
      </div>
      <button className='btn' onClick={this.showHidePassword}>
        Show/Hide Password
      </button>
      <br />
      <button className='btn' onClick={this.getNewUser}>
        Get New User
      </button>
    </div>
  );
}

export default template;
