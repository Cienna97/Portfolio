import React from 'react';
import coverImage from "../../assets/cover/wp2141407-1.jpg";

function About() {
return (
    <section className="my-5">
    <h1 id="about">Who am I?</h1>
    <h2>Hello! My name is Cienna and I am currently a coding bootcamp student at the University of Oregon, looking to become a wed developer</h2>
    <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
  </section>
  );
}
export default About;