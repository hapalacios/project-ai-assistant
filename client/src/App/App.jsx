import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Pages/Home';
import ConversationApp from '../Pages/ConversationApp';
import ProAssistant from '../Pages/ProAssistant';
import NewFeatures from '../Pages/NewFeatures';
import About from '../Pages/About';
import PageNotFound from '../Pages/PageNotFound';
import { Layout } from '../Components/Layout/Layout';
class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Layout>
                    <div className="App">
                        <BrowserRouter>
                            <Switch>
                                <Route exact path="/linkedin" render={() => (window.location = "https://linkedin.com/in/hectorpalacios")} />
                                <Route exact path="/github" render={() => (window.location = "https://github.com/hapalacios")} />
                                <Route exact path="/mail" render={() => (window.location = "mailto:hapalacios@gmail.com")} />
                                <Route exact path="/github/proassistant" render={() => (window.location = "https://github.com/hapalacios/project-ai-assistant")} />
                                <Route exact path="/github/adidashackaton4d" render={() => (window.location = "https://github.com/hapalacios/adidas4dhackathon")} />

                                <Route exact path="/" component={Home} />
                                <Route exact path="/conversationapp" component={ConversationApp} />
                                <Route exact path="/proassistant" component={ProAssistant} />
                                <Route exact path="/newfeatures" component={NewFeatures} />
                                <Route exact path="/about" component={About} />
                                <Route component={PageNotFound} />    
                            </Switch>
                        </BrowserRouter>
                    </div>
                </Layout>
            </React.Fragment>
        );
    }
};
export default App;