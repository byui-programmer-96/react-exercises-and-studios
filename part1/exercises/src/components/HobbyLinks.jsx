import React from "react";
import classes from "./HobbyLinks.module.css";

class HobbyLinks extends React.Component {
    render(){
        const hobbyLinks = ['https://www.goodreads.com/','https://www.chess.com/','<https://www.alltrails.com/','https://www.guitarworld.com/'];
    
    
    return (
    <div>
      <h2 className={classes.hobbylinks-heading}>"My Hobby Links"</h2>
      <ol>
      <li className={classes.hobbylinks-text}><a href = {hobbyLinks[0]}>Goodreads</a></li>
      <li className={classes.hobbylinks-text}><a href = {hobbyLinks[1]}>Chess</a></li>
      <li className={classes.hobbylinks-text}><a href = {hobbyLinks[2]}>Hiking on trails</a></li>
      <li className={classes.hobbylinks-text}><a href = {hobbyLinks[3]}>Playing guitar</a></li>
      </ol>
    </div>
  );

    }
}

export default HobbyLinks;