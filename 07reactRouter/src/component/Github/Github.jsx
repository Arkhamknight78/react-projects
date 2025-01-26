/**
 * Github component that displays GitHub user information.
 * It uses the `useLoaderData` hook to fetch and display user data.
 *
 * @component
 * @example
 * return (
 *   <Github />
 * )
 */

/**
 * Loader function to fetch GitHub user information.
 * This function is used in the route configuration to load data before rendering the component.
 *
 * @async
 * @function githubInfoLoader
 * @returns {Promise<Object>} The GitHub user data.
 */

/**
 * useLoaderData is a hook that returns the data passed to the loader function in the route configuration.
 * It can be used to load data before rendering the component.
 *
 * @function
 * @name useLoaderData
 * @returns {Object} The data returned by the loader function.
 */


import { useLoaderData } from 'react-router';
// useLoaderData is a hook that returns the data passed to the loader function in the route configuration.
// It can be used to load data before rendering the component.
// 

function Github() {
    // const [user, setUser]= useState({})

    const user= useLoaderData();
    
//    useEffect(()=>{
//     fetch("https://api.github.com/users/Arkhamknight78")
//     .then(res=> res.json())
//     .then(data=> {
//         console.log(data)
//         setUser(data)
//     })
//     .catch(err=> console.log(err))
//    }, [])
//    console.log(user)

  

//   if (!user) {
//     return <h1 className="text-center m-4 text-white">Loading...</h1>;
//   }

  const { login, followers, avatar_url, following } = user;

//    const { login, followers } = user
  return (
    <>
    <div className="flex flex-row text-center my-2 text-blue-950 bg-white">
    <img
      src={avatar_url}
      alt={`${login}'s avatar`}
      className="w-48 h-48 rounded-full mx-20 mb-4"
    />
    <h1 className="text-3xl font-bold text-center m-2">{login}</h1>
    <h1 className="text-3xl font-bold text-center m-2">|</h1>
    
    <h2 className="text-3xl font-bold text-center m-2">Followers: {followers}</h2>
    <h1 className="text-3xl font-bold text-center m-2">|</h1>
    
    <h2 className="text-3xl font-bold text-center m-2">Following: {following}</h2>
    </div>
    
    
    
  
  </>
  )
}

export default Github

// 
export const githubInfoLoader= async ()=>{
    const res= await fetch("https://api.github.com/users/Arkhamknight78")
    const data= await res.json()
    console.log(data);
    
    return data

}
