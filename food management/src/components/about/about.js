import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="aboutDiv">
        <p className="aboutP">
          Food is more important for the survival of life. This web application
          is mainly used for minimizing the wastage of food in hotels, hostels,
          restaurants and function halls by transferring food to orphanages. It
          contains the details of, hostels, restaurants and function halls and
          orphanages. Most of the food is getting wasted in restaurants and
          function halls and many children who are living in some orphanages are
          killing their hunger due to different reasons, so to minimize the
          wastage of food and make it available to the people who are in hunger
          this web application is used to donate food to the hungers.
        </p>
        <p className="aboutP">
          Whenever if excess food is available at donors they just add to the
          website. The orphanages and the one who needs the food can see the
          list of available donors and if they wish to have they just click the
          accept button. A notification will be send to the donor. The
          orphanages can also see the location of the donors with the help of
          google maps. We also maintain the history of donations
        </p>
      </div>
    </>
  );
};
export default About;
