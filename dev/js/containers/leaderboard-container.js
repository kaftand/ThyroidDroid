import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectMode} from '../actions/index'
import Leaderboard from '../components/leaderboard'
import * as firebase from 'firebase';


firebase.initializeApp({
  apiKey: "AIzaSyCo2EkqIecK5DFdiI1rVI2SAJT2EVxOpKU",                             // Auth / General Use
  authDomain: "uterine-pathology.firebaseapp.com",         // Auth with popup/redirect
  databaseURL: "https://uterine-pathology.firebaseio.com", // Realtime Database
  storageBucket: "uterine-pathology.appspot.com",          // Storage
});

class LeaderboardContainer extends Component {
  constructor(props) {
    super(props)
  }
  retrieveLeaders()
  {
    var userRef = this.props.dataBaseRef.child("users");
    userRef.orderByChild("totalScore").limitToLast(this.props.numEntries).on("value", this.updateData.bind(this))
  }
  updateData(snapshot) {
    for (var iLeader = 0, len = snapshot.length; iLeader < len; iLeader++) {
      leaderData = snapshot[i].exportVal();
      
    }
    snapshot.forEach(this.buildList.bind(this))
  }
  parseUsername(email) {
    var dotNotation = email.substring(0,email.indexOf("@"));
    return dotNotation.substring(0,dotNotation.indexOf('.'))+dotNotation.substring(dotNotation.indexOf('.')+1)
  }
  render() {
    return <Leaderboard />
  }
}

export default LeaderboardContainer
