import React from "react";
import classes from "./HobbyLinks.module.css";

class HobbyLinks extends React.Component {
    render(){
        const Hobbies = ['https://www.goodreads.com/','https://www.chess.com/','<https://www.alltrails.com/','https://www.guitarworld.com/'];
    
    
    return (
    <div>
      <h2 className={"hobby-links"}>"My Hobby Links"</h2>
      <ol>
      <li><a href = {hobbyLinks[0]}>Goodreads</a></li>
      <li><a href = {hobbyLinks[1]}>Chess</a></li>
      <li><a href = {hobbyLinks[2]}>Hiking on trails</a></li>
      <li><a href = {hobbyLinks[3]}>Playing guitar</a></li>
      </ol>
    </div>
  );

    }
}

