import { Header, HeaderNav, NavigationLink } from './Navbar.styled';

export default function Navbar() {
  return (
    <Header>
      <div className="container">
        <HeaderNav>
          <NavigationLink to="/" end>
            Home
          </NavigationLink>
          <NavigationLink to="/movies">Movies</NavigationLink>
        </HeaderNav>
      </div>
    </Header>
  );
}
