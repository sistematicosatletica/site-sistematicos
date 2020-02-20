import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
    Container,
    Grid,
    Header,
    List,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react';

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
class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { children } = this.props
        const { fixed } = this.state

        return (
            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment inverted vertical style={{ padding: '5em 0em' }}>
                        <Container >
                            <Grid divided inverted stackable>
                                <Grid.Row>
                                    <Grid.Column width={3}>
                                        <Header inverted as='h4' content='Sobre nós' />
                                        <List link inverted>
                                            <List.Item as='a' href="/">Home</List.Item>
                                            <List.Item as='a' href='/contato' >Contate-nos</List.Item>
                                        </List>
                                    </Grid.Column>
                                    <Grid.Column width={10}>
                                        <p>
                                            Associação Atlética Acadêmica de Sistemas de Informação - Sistemáticos - Todos os direitos reservados ©
                                        </p>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Container>
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
    state = {}

    handleSidebarHide = () => this.setState({ sidebarOpened: false })

    handleToggle = () => this.setState({ sidebarOpened: true })

    render() {
        const { children } = this.props
        const { sidebarOpened } = this.state

        return (
            <Responsive
                as={Sidebar.Pushable}
                getWidth={getWidth}
                maxWidth={Responsive.onlyMobile.maxWidth}
            >
                <Segment inverted vertical style={{ padding: '5em 0em' }}>
                    <Container >
                        <Grid divided inverted stackable>
                            <Grid.Row>
                                <Grid.Column width={2}>
                                    <Header inverted as='h4' content='Sobre nós' />
                                    <List link inverted>
                                        <List.Item as='a' href="/">Home</List.Item>
                                        <List.Item as='a' href='/contato' >Contate-nos</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={10}>
                                    <p>
                                        Associação Atlética Acadêmica de Sistemas de Informação - Sistemáticos - Todos os direitos reservados ©
                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
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