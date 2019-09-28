import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import pic04 from '../assets/images/pic04.jpg'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Generic Page Title" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={require('../assets/images/venue1.jpeg')} alt="" /></span>
            <h2>Learn About Our Rates And Specials!</h2>
            <p>Our Specials consists of Happy hours and also Birthday Specials!. With outstanding service and your enjoyment 
              we will always accomodate to make your experience enjoyable!
            </p>
            {/* <img src={require('../assets/images/specials1.jpeg')} alt='' style={{'height':'250px', 'width':'250px'}}/> */}
            <Modal trigger={<img src={require('../assets/images/specials1.jpeg')} alt='' style={{'height':'250px', 'width':'250px'}}/>}>
    <Modal.Header>Rates and Specials</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={require('../assets/images/specials1.jpeg')} />
      <Modal.Description>
        <Header>Our Room rates per hour!</Header>
      </Modal.Description>
    </Modal.Content>
  </Modal>
  <Modal trigger={<img src={require('../assets/images/specials2.jpeg')} alt='' style={{'height':'250px', 'width':'250px'}}/>}>
    <Modal.Header>Rates and Specials</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={require('../assets/images/specials2.jpeg')} />
      <Modal.Description>
        <Header>Birthday coming up? Let Us Know!</Header>
      </Modal.Description>
    </Modal.Content>
  </Modal>
            {/* <img src={require('../assets/images/specials2.jpeg')} alt='' style={{'height':'250px', 'width':'250px'}}/> */}
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
