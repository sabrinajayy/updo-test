import React, { Component } from 'react';
import ProfileBanner from './containers/profilebanner';
import ProfileBannerContent from './components/profilebannercontent';
import FrontBanner from './components/frontbanner';
import Navbar from './components/navbar';
import Avatar from './components/avatar';
import Button from './components/button';
import Logo from './components/logo';
import Icon from './components/icon';
import TagSelect from './components/tagselect';
import Tag from './components/tag';
import Rating from './components/rating';
import SearchResultCard from './components/searchresultcard';
import SortMenu from './components/sortmenu';
import Footer from './components/footer';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
        <Navbar />
        <FrontBanner tagline="The Salon. Anytime. Anywhere." />
        <ProfileBanner />


        <h1>This is the Updo test</h1>

        <h2>Avatars</h2>
        <Avatar size="small" url="http://ghost.skillshub.info/content/images/2017/01/profile-girl-square.png" />
        <Avatar size="medium" url="http://ghost.skillshub.info/content/images/2017/01/profile-girl-square.png" />
        <Avatar size="large" url="http://ghost.skillshub.info/content/images/2017/01/profile-girl-square.png" />

        <h2>Logos</h2>
          <Logo size="small" />
          <Logo size="medium" />
          <Logo size="large" />

        <h2>Buttons</h2>
          <Button text="testing" color="green" />
          <Button text="full width" color="red" fullWidth />

        <h2>Icons</h2>
          <Icon type="empty-star" size="extra-small" color="yellow" />
          <Icon type="envelope" size="small" color="black" />
          <Icon type="bell" size="medium" color="black" />
          <Icon type="pencil" size="large" color="blue" />
          <Icon type="star" size="medium" color="yellow" />

        <h3>Dropdown Menu</h3>
          <NavDropdown
            eventKey="4"
            title={<Icon type="bell" size="small" color="black" />}
            id="nav-dropdown" noCaret >
            You have no notifications
          </NavDropdown>

          <h3>Rating</h3>
          <Rating stars={5} mode="user" />
          <Rating stars={5} mode="review" />

          <h3>Clickable Tags - for profile creation and search/filters</h3>
          <ul className="list-inline">
            <li><TagSelect text="special-fx" /></li>
            <li><TagSelect text="editorial" /></li>
            <li><TagSelect text="film" /></li>
            <li><TagSelect text="bridal" /></li>
            <li><TagSelect text="highlights" /></li>
          </ul>
          <h3>Regular Tags (for artist profile, search results, gigs)</h3>
            <ul className="list-inline">
              <li><Tag text="special-fx" /></li>
              <li><Tag text="editorial" /></li>
              <li><Tag text="film" /></li>
              <li><Tag text="bridal" /></li>
              <li><Tag text="highlights" /></li>
            </ul>

          <h3>Sort Menu</h3>
          <SortMenu />
          <h3>Stylist Search Result Card</h3>
          <SearchResultCard
            name="Sarah Leibowitz"
            photo="http://ghost.skillshub.info/content/images/2017/01/profile-girl-square.png"
            rating={5}
            city="Barcelona"
            category="Makeup Artist"
            tags={["special-fx", "costume", "editorial"]} />

          <h3>Footer</h3>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
