import { Link } from "react-router-dom";

const Excercise_01 = () => {
    return (
        <div className="exercise-container">
          <h1>Exercise 01</h1>
          <br/>
          <h2>Task 1: Dynamic Routing</h2>
          <h3>Retrieve url parameters: <Link to="/dynamic/">page</Link></h3>
          <ul>
            <li>fix the code to pull the id from "useParams"</li>
            <li>add another parameter to the url should handle url like '/dynamic/1/asdf'</li>
            <li>display the 2nd parameter (use any param name you like)</li>
          </ul>
          <br/>

          <h2>Task 2: Functional Components</h2>
          <h3>Update TitleUpdater component to handle user interactions: <Link to='/functional-example'>page</Link></h3>
          <ul>
            <li>fix the code to increment the counter for the "Increase Count" button click</li>
            <li>add another button to decrease the count</li>
            <li>display a message when the count reaches 10</li>
            <li>add a cleanup effect (eg. logging when component is unmounted)</li>
          </ul>

          <br/>
          <h2>Task 3: Class Components</h2>
          <h3>Do the same as Task 2 for "ClassTitleUpdater": <Link to='/class-example'>page</Link></h3>
          <ul>
            <li>fix the code to increment the counter for the "Increase Count" button click</li>
            <li>add another button to decrease the count</li>
            <li>display a message when the count reaches 10</li>
            <li>add a cleanup effect (eg. logging when component is unmounted)</li>
          </ul>
        </div>
    )
}

export default Excercise_01;
