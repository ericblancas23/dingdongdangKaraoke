import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <center>
    <section>
      <h2>Ding Dong Dang Karaoke</h2>
      <dl className="alt">
        <dt>Address</dt>
        <dd>9738 Garden Grove Blvd Ste 9 Garden Grove, CA 92844</dd>
        <dt>Phone</dt>
        <dd>(714) 636-6237</dd>
      </dl>
      <ul className="icons">
        <li>
          <a href="https://www.yelp.com/biz/ding-dong-dang-karaoke-garden-grove-3" className="icon fa-yelp alt">
            <span className="label">Yelp</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; 2017 <a href="https://html5up.net">Ding Dong Dang Karaoke</a>.
    </p>
    </center>
  </footer>
)

export default Footer
