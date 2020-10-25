import React from 'react';
import './App.scss';
//import '../Styles/styles.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home';
import ConversationApp from '../Pages/ConversationApp';
import ProAssistant from '../Pages/ProAssistant';
import NewFeatures from '../Pages/NewFeatures';
import TeacherAssistant from '../Pages/TeacherAssistant';
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
                                <Route exact path="/" component={Home} />
                                <Route exact path="/conversationapp" component={ConversationApp} />
                                <Route exact path="/proassistant" component={ProAssistant} />
                                <Route exact path="/newfeatures" component={NewFeatures} />
                                <Route exact path="/newfeatures/teacherassistant" component={TeacherAssistant} />
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