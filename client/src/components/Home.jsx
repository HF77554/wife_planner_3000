import React from "react";

const Home = () => {

  return (
    <div className="container">
      <header className="jumbotron">
        <h2>Home</h2>
        <p>project for help in the daily life. We moved to a new place and my wife has a long set of chores for me. Instead of going bit by bit I want to create a task manager which allowed for her to post tasks for me to look at and mark by status.</p>
        <h3>General Concept:</h3>
        <li>Site must be accessible by two different users (wife and husband).</li>
        <li>The 'wife' will create a room and send a request to husband, husband can the choose to accept (this is in theory, he should always accept)</li>
        <li>After room creation 'wife' can then create tasks, she can also view completed tasks and choose weather the husband finished (mark as done) or needs to redo it (send back to tasks)</li>
        <li>After room creation 'husband' can check tasks, he can then mark them as done or in progress. If done 'wife' still needs to check on the work before task is removed.</li>
        <li>This is a small passion project. Always wanted to program and this is my first attempt at a full stack application. Thanks for your time and feel free to leave any comments! (go to contact us for info) </li>
      </header>
    </div>
  );
};

export default Home;