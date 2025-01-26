import { useParams } from "react-router";
// useParams is a hook that returns an object of key/value pairs of URL parameters.
// // A hook to access the match object of the current route.
// // useParams returns an object of key/value pairs of URL parameters.
// // Use it to access match.params of the current <Route>.
// // You can access the match object provided by the <Route> component using the useParams hook. 


/*
useParams

is a hook provided by the react-router-dom library in React. It allows you to access the parameters of the current route. These parameters are typically defined in the route path and can be used to dynamically render content based on the URL.

For example, if you have a route defined as /user/:id, the id parameter can be accessed using useParams within the component rendered by this route.

Here's a brief summary of how useParams works:

Import the Hook: You need to import useParams from react-router-dom.
Access Parameters: Call useParams within your functional component to get an object containing all the route parameters.
Use Parameters: Destructure the object to access specific parameters and use them in your component.
Example:

In this example, if the URL is /user/123, the id parameter will be 123, and the component will render "User: 123".


 */

export default function User() {
    const { id } = useParams();

  return (
    <div className="bg-gray-600 text-5xl" >User: {id}</div>
  )
}
