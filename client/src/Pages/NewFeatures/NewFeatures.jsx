import React  from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
// import { Link, useHistory } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Header from '../../Components/Header';

export default class NewFeatures extends React.Component {
   state = {
      firstRender: true, alanBtnHidden: true, alanBtnInstance: null
   }
   componentDidMount() {
      this.alanBtnInstance = alanBtn({
         key: '2261ebd22a2fd31af3071800c940abf72e956eca572e1d8b807a3e2338fdd0dc/stage',
         onCommand: (commandData) => {
            if (commandData.command === 'go:conversation') {
               this.props.history.push("/conversationapp")
            } else if (commandData.command === 'go:assistant') {
               this.props.history.push("/proassistant")
            } else if (commandData.command === 'go:newfeatures') {
               this.props.history.push("/newfeatures")
            } else if (commandData.command === 'go:about') {
               this.props.history.push("/about")
            }
         },
      });
   }
   render() {
      return (
         <>
            <Header />
         </>
      )
   }
}