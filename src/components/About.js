import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import React from "react";

// const About = () => {
//   return (
//     <>
//       <h1> About Component</h1>
//       <Profile name="anshika" color="red" />
//       <ProfileClass name="anshika class" color="blue" />
//     </>
//   );
// };

class About extends React.Component {
  constructor() {
    super();

    console.log("parent constructor called");
  }

  componentDidMount() {
    console.log("parent component mounted");
  }

  componentWillUnmount() {
    console.log("parent component unmounted");
  }

  render() {
    console.log("parent render called");
    return (
      <>
        <h1> About Component</h1>
        <Profile name="anshika" color="red" />
        {/* <ProfileClass name="anshika class" color="blue" /> */}
      </>
    );
  }
}

export default About;

/**
 * Parent constructor is called
 * Parent render function is called
 * Child constructor is called
 * Child render is called
 * Child component is mounted
 * Parent component is mounted
 *
 * Parent component gets unmounted
 * Child component gets unmounted
 */
