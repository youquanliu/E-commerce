import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/logo192.png";
import { logout } from "../actions/userActions";
import { SearchBar } from "./SearchBar";

// const Header = () => {
//   const dispatch = useDispatch();
//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;

//   const logoutHandler = () => {
//     dispatch(logout());
//   };
//   return (
//     <header>
//       <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
//         <Container>
//           <LinkContainer to="/">
//             <Navbar.Brand>Frank's Toilet Paper Depot</Navbar.Brand>
//           </LinkContainer>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             {/* Direct access to the route props */}
//             <Route render={({ history }) => <SearchBar history={history} />} />

//             <Nav className="ml-auto">
//               <LinkContainer to="/cart">
//                 <Nav.Link className="mr-2">
//                   <i className="fas fa-shopping-cart mr-1"></i>Cart
//                 </Nav.Link>
//               </LinkContainer>
//               {userInfo ? (
//                 <NavDropdown
//                   title={userInfo.name}
//                   id="username"
//                   className="mr-3"
//                 >
//                   <LinkContainer to="/profile">
//                     <NavDropdown.Item>Profile</NavDropdown.Item>
//                   </LinkContainer>
//                   <NavDropdown.Item onClick={logoutHandler}>
//                     Log Out
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               ) : (
//                 <LinkContainer to="/login">
//                   <Nav.Link>
//                     <i className="fas fa-user mr-1 ml-3"></i>Sign In
//                   </Nav.Link>
//                 </LinkContainer>
//               )}
//               {userInfo && userInfo.isAdmin && (
//                 <NavDropdown title="ADMIN" id="adminmenu">
//                   <LinkContainer to="/admin/userList">
//                     <NavDropdown.Item>Users</NavDropdown.Item>
//                   </LinkContainer>
//                   <LinkContainer to="/admin/productList">
//                     <NavDropdown.Item>Products</NavDropdown.Item>
//                   </LinkContainer>
//                   <LinkContainer to="/admin/orderList">
//                     <NavDropdown.Item>Orders</NavDropdown.Item>
//                   </LinkContainer>
//                 </NavDropdown>
//               )}
//               <LinkContainer to="/admininfo">
//                 <Nav.Link>
//                   <i className="fas fa-question-circle mr-1"></i>Admin
//                 </Nav.Link>
//               </LinkContainer>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </header>
//   );
// };

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img className="logo" src={logo} alt="tioilet paper depot" />
              Frank's Toilet Paper Depot
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart /> Cart
                  <Badge
                    pill
                    bg="success"
                    style={{ marginLeft: "5px" }}
                  ></Badge>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <FaUser />
                  Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
