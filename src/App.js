import React, { Component } from 'react';
import ProfileContainer from './containers/profilecontainer';
import Navbar from './components/navbar';
import ReviewList from './components/reviewlist';
import NotificationBadge from './components/notificationbadge';
import BookingCardLarge from './components/bookingcardlarge';
import Footer from './components/footer';
import './App.css';

const STYLIST = {
    "firstName": "Sarah",
    "lastName": "Leibowitz",
    "phoneNumber": "416-999-9999",
    "profilePhotoUrl": "http://res.cloudinary.com/dl12g2ws3/image/upload/v1506607219/qa1kk0rzxgpmirmy0dp8.jpg",
    "tags": ["special-fx", "costume", "editorial", "bridal", "photoshoot", "prom makeup", "smokey eye", "body painting", "gothic", "hollywood glam"],
    "services": [{"name": "special-fx", "price": 75}, {"name": "makeup application", "price": 100}],
    "certifications": [{"title": "Cosmetology Licence", "grantor": "State of New York"}],
    "bio": "A makeup artist with more than ten years’ experience in the areas of fashion, creative studio, bridal and makeup education, Erin has learnt from her clients one universal rule: women want to look fresh, flawless and beautiful. It’s this principle that drives a signature style that is feminine and natural, yet in keeping with modern style inspiration drawn from her many creative sources, from the world’s best fashion magazines to time out at the beach with her young daughter.",
    "portfolioImages": [{src: "http://res.cloudinary.com/dl12g2ws3/image/upload/v1506607571/bubycgq0e7wowf7txzbe.jpg", width: 1, height: 1 },
        {src: "http://res.cloudinary.com/dl12g2ws3/image/upload/v1506607568/csov6lg81mamuxmm02c5.jpg", width: 1, height: 1 },
        {src: "http://res.cloudinary.com/dl12g2ws3/image/upload/v1506607570/d8xsx5zhyjk5lod4w9di.jpg", width: 1, height: 1 },
        {src: "http://res.cloudinary.com/dl12g2ws3/image/upload/c_fill,h_300,w_300/v1506607567/mn7kgdeef6xjgszaqgdj.jpg", width: 1, height: 1 },
        {src: "http://res.cloudinary.com/dl12g2ws3/image/upload/v1506607566/jphrrpsb8hmys9upwuvg.jpg", width: 1, height: 1 },
        {src: "http://res.cloudinary.com/dl12g2ws3/image/upload/v1506607225/l2xohprooqaatyghtvsx.jpg", width: 1, height: 1 },
        {src: "http://res.cloudinary.com/dl12g2ws3/image/upload/c_fill,h_300,w_300/v1506593756/mppu44yelbc87rb69hib.jpg", width: 1, height: 1 },
        {src: "http://res.cloudinary.com/dl12g2ws3/image/upload/v1506607219/qa1kk0rzxgpmirmy0dp8.jpg", width: 1, height: 1 },
        {src: "http://res.cloudinary.com/dl12g2ws3/image/upload/v1506607217/hj3nx6bmtycma5b8hdyl.jpg", width: 1, height: 1 }],
    "reviews": [
        {
          client: {name: "Angelo", photo: "http://res.cloudinary.com/dl12g2ws3/image/upload/v1506607224/qomnxgepexiaebhk331l.jpg"},
          content: "She was the best makeup artist ever. ",
          rating: 5,
          dateCreated: "2 Dec 2017"
        },
        {
          client: {name: "Jennifer", photo: "http://res.cloudinary.com/dl12g2ws3/image/upload/v1506593775/essrsebxlfgjrny2iqqm.jpg"},
          content: "She was nice, did a good job, but she came 12 minutes late. Messed up my schedule. I liked how I looked though",
          rating: 4,
          dateCreated: "6 Jan 2018"
        }],
    "terms": "if you're late you pay me $1000 in late fees."
}

const CLIENT = {
    firstName: "Angelo",
    lastName: "Cervantes",
    profilePhotoUrl: "http://res.cloudinary.com/dl12g2ws3/image/upload/v1506607224/qomnxgepexiaebhk331l.jpg",
    phoneNumber: "416-555-5555"
}

const BOOKING = {
  date: "12 Feb 2018",
  time: "4:00pm",
  duration: "2 hours",
  address: "123 Fake Street, Toronto, ON  M6K 3A5",
  service: "Makeup Application",
  price: 100,
  status: "unconfirmed",
  stylist: STYLIST,
  client: CLIENT
}

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
        <Navbar />
        <ProfileContainer
            section="about"
            stylist={STYLIST} />
          <NotificationBadge amount={15} iconType="envelope" iconColor="pink" />
          <NotificationBadge amount={3} iconType="bell" iconColor="pink" />
          <BookingCardLarge
            userType="client"
            date="12 Feb 2018"
            time="4:00pm"
            duration="2 hours"
            address="123 Fake Street, Toronto, ON  M6K 3A5"
            service="Makeup Application"
            price={100}
            status="unconfirmed"
            stylist={STYLIST}
            client={CLIENT}
            terms={STYLIST.terms} />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
