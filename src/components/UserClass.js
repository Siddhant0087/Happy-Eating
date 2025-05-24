import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: 'Dummy Name',
        location: 'Default',
        avatar_url:
          'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png',
      },
    };

    // console.log('Child  Constructor');
  }

  async componentDidMount() {
    const data = await fetch('https://api.github.com/users/Siddhant0087');
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    // console.log('Component Did Update');
  }

  componentWillUnmount() {
    // console.log('Component Will Unmount');
  }

  render() {
    // console.log('Child render');

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className='user-card'>
        <img className='profile-img' src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: siddhant_0087</h4>
      </div>
    );
  }
}

export default UserClass;
