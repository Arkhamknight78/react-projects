import { Container, Logo, LogoutBtn, Button } from "../index"
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const authName = useSelector((state) => {
    if(authStatus) return state.auth.user.name
  });
  console.log(authName);
  
  //Allows you to extract data from the Redux store state for use in this component, using a selector function.
  const navigate = useNavigate();
  //The useNavigate hook returns a navigate function that you can use to programmatically navigate around your application.

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <header className="py-3 shadow bg-gray-800">
      <Container>
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-white">
              <Logo />
              MegaBlog
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <h1>
              {authStatus ? `Welcome, ${authName ? authName: ""}` : "Welcome"}
              {/* If the user is logged in, display the username, otherwise display "Welcome" */}
            </h1>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <Button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px—13 py—6 duration—200 rounded—full m-2 hover:bg-blue-900"
                  >
                    {item.name}
                  </Button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li className="my-auto">
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
