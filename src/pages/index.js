import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import Carousel from 'nuka-carousel'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Gatsby Starter - Stellar" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About us</h2>
                </header>
                <p>
                Unlike other karaoke bars that
charge by the hour,We offer a flat rate room charge(ONE TIME CHARGE!) for three hours as long as you purchase food/ and or drinks equating to the amount of the room! 
Otherwise, hourly rates will be applied
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={require('../assets/images/4.jpg')} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Location</h2>
            </header>
            <ul className="features">
              <li>
                <img src={require('../assets/images/location1.jpeg')} alt="" style={{'height':'250px', 'width':'250px', 'borderRadius':'50%'}}/>
                <h3>In the heart of Garden Groove</h3>
                <p>
                  We are located at 9738 Garden Grove Blvd Ste 9 Garden Grove, CA 92844. 
                  Stop by and come experience a Karaoke Session.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Venue</h2>
              <p>
                Our Venue is one of a kind!, very spacious, lighting, and entertaing to keep your karaoke session top Notch!
              </p>
            </header>
            <center>
            <Carousel style={{ 'height':'600px', 'width':'750px' }} autoplay={true} speed={1}>
                <img src={require('../assets/images/venue1.jpeg')} style={{ 'height': '500px'}}/>
                <img src={require('../assets/images/venue2.jpeg')}  style={{ 'height': '500px'}}/>
                <img src={require('../assets/images/venue3.jpeg')}  style={{ 'height': '500px'}}/>
                <img src={require('../assets/images/venue4.jpeg')}  style={{ 'height': '500px'}}/>
                <img src={require('../assets/images/venue5.jpeg')}  style={{ 'height': '500px'}}/>
            </Carousel>
            </center>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Book Now For Your Karaoke Party!</h2>
            </header>
            <form method="POST">
    <label htmlFor="name" style={{'marginTop':'1cm'}}>Name</label>
    <input type="text" name="name" />

    <label htmlFor="email" style={{'marginTop':'1cm'}}>Email</label>
    <input type="email" name="email" />

    <label htmlFor="message" style={{'marginTop':'1cm'}}>Date/Time Reservation</label>
    <textarea name="message" rows="3"></textarea>

    <input type="submit" style={{'marginTop':'1cm'}}/>
  </form>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
