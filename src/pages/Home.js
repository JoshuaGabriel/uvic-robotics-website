import React from 'react';
import qhut from '../assets/qhut-banner.jpg';
import Banner from '../components/Banner';
import TextImageContainer from '../components/TextImageContainer';
import groupPhoto from '../assets/Robotic-Group Pic-April-2022.jpg';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Banner imageUrl={groupPhoto} alt={"qhut-banner"}/>
        <TextImageContainer title={"UVic Robotics"} text={"sample text"} imageUrl={qhut} alt={"qhut-banner"} background={'bg-white'}/>
        <TextImageContainer title={"UVic Robotics"} text={"sample text"} imageUrl={qhut} alt={"qhut-banner"} background={'bg-blue-50'}/>
      </div>
    );
  }
}
export default Home;