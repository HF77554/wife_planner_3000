import React from "react";

const Home = () => {

  return (
    <div className="container">
      <header className="jumbotron">
        <h2>Home</h2>
        <p>
        project for help in the daily life. We moved to a new place and my wife has a long set of chores for me. Instead of going bit by bit I want to create a todo list which I can improve in overtime. 
        Current criteria:
        </p>
        <p>
          Site must be accessible by two different users under one auth [one combined sign in with two users?]

          Todo items must have a name, description, and date posted

          Todo items must have three settings: pending, in progress, awaiting confirmation. 
              pending: husband has not started the item
              in progress: husband has seen the item and started work on item.
              awating confirmation: husband has finished item, wife[original creator] must sign off on duty
              Items on list must be able to be dragged to ensure wife priority order is met

          **For urgent element color code element in list to RED
        </p>
      </header>
    </div>
  );
};

export default Home;