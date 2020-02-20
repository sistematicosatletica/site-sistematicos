import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
  Button,
  Container,
  Icon,
  Image,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';
import { isAuthenticated } from './services/auth';
import { Redirect } from 'react-router-dom'
import logo from './logo.png';
import { Link, withRouter } from 'react-router-dom';
import { throws } from 'assert';
import { BackTop } from 'antd';



const links = [
  { route: "/", label: "Home" },
  { route: "/modalidades", label: "Modalidades" },
  { route: "/produtos", label: "Produtos" },
  //{ route: "/associacao", label:"Associação"},
  /*{ route: "/parceiros", label:"Parceiros"},*/
  { route: "/eventos", label: "Eventos" },
  { route: "/developers", label: "Developers" },
  { route: "/contato", label: "Contato" },

  // { route: "/login", label:"Login"}
];
// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
// const SomeComponent = withRouter(props => <DesktopContainer {...props}/>);
class DesktopContainer extends Component {

  state = {
    redirect: false,
    fixed: true
  }
  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name })
  hideLoginButton = () => this.setState({ visible: isAuthenticated() })
  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  renderLink = (activeItem) => {
    return links.map(link =>
      // <Link key={link.route} className="nav-link" to={link.route}>
      // </Link>
      <Menu.Item key={link.route} as={Link} name={link.route} to={link.route} active={activeItem === link.route} onClick={this.handleItemClick} >{link.label} </Menu.Item>

    )
  }

  logout = () => {
    localStorage.clear()

    this.setState({ redirect: true })

    //localStorage.removeItem('@airbnb-Token')
    //console.log(this.props.history.push("/associacao"))
    console.log(localStorage)

  }



  redirectLogin = () => {
    if (this.state.redirect) {
      this.setState({ redirect: false })
      return <Redirect to='/login' />

    }
  }



  verificarLogin = () => {

    if (!localStorage.getItem('@airbnb-Token')) {
      return <Menu.Item position='right'> <Button as={Link} to="/login" inverted={!this.state.fixed}>
        Entrar
    </Button>
        <Button as={Link} to="/cadastro" inverted={!this.state.fixed} primary={this.state.fixed} style={{ marginLeft: '0.5em' }}>
          Cadastrar
    </Button>

      </Menu.Item>


    } else {
      return <Menu.Item position='right'>
        <p>{localStorage.getItem('name')}</p>
        <Button onClick={this.logout} inverted={!this.state.fixed} style={{ marginLeft: '0.5em' }}>
          Logout
  </Button>
      </Menu.Item>

    }
  }

  render() {
    const { children } = this.props
    const { fixed } = this.state
    const { activeItem } = this.state
    const { visible } = this.state

    return (

      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.showFixedMenu}
        >
          <Segment
            inverted
            pointing
            textAlign='center'
            style={{ minHeight: 70, padding: '1em 0em', background: '#252839', borderTop: 'none' }}
            vertical
          >
            <Menu
              fixed={fixed}
              inverted={fixed}
              pointing={fixed}
              secondary={fixed}
              size='medium'
              style={{border: 'none'}}
              
            >
              <Container >
                <Menu.Item as='a' style={{ padding: '0 12px 0 0' }} ><Image src={logo} size='small' verticalAlign='bottom' rounded /></Menu.Item>
                {this.renderLink(activeItem)}
                <BackTop />
                {/* <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as={Link} to={links[1].route} active>Parceiros</Menu.Item>
                <Menu.Item as='a'>Associe-se</Menu.Item>
                <Menu.Item as='a'>Contato</Menu.Item> */}

                {/*this.verificarLogin()*/}
                {/*this.redirectLogin()*/}

              </Container>
            </Menu>
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  renderLink = (activeItem) => {
    return links.map(link =>
      // <Link key={link.route} className="nav-link" to={link.route}>
      // </Link>
      <Menu.Item key={link.route} as={Link} name={link.route} active={activeItem === link.route} to={link.route}  onClick={this.handleItemClick} >{link.label} </Menu.Item>

    )
  }

  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { activeItem } = this.state
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        > <Container >
            <Menu.Item as='a'  style={{ padding: '0 12px 0 0' }} ><Image src={logo} height='small' verticalAlign='bottom' rounded /></Menu.Item>
            {this.renderLink(activeItem)}
            <BackTop />
            {/*<Menu.Item as='a' style={{ padding: '0 12px 0 0' }} ><Image src={logo} size='small' verticalAlign='bottom' rounded /></Menu.Item>
            <Menu.Item as='a' active>
              Home
          </Menu.Item>
            <Menu.Item as='a'>Modalidades</Menu.Item>
            <Menu.Item as='a'>Eventos</Menu.Item>
            <Menu.Item as='a'>Developers</Menu.Item>
            <Menu.Item as='a'>Contato</Menu.Item>*/}
          </Container>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ height: '50px', padding: '0em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                {/*<Menu.Item position='right'>
                  <Button as='a' inverted>
                    Entrar
                  </Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                    Cadastrar
                  </Button>
                </Menu.Item>*/}
              </Menu>
            </Container>
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}








MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}
export default ResponsiveContainer