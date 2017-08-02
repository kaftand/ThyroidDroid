import React, {Component} from 'react';
import LoginContainer from '../containers/login-container';
import {lessonPanelStyles} from '../styles.js'

class LoggedInView extends Component
{
  constructor (props)
  {
    super(props)
  }
  render ()
  {
   return (
    <div>
      <LoginContainer />
      <img style={{
        display: 'block',
        margin: 'auto',
        maxHeight: '50%',
        maxWidth: '50%',
      }} src={'./UNMCEditedLogo.png'} />
      <p> {'Funding provided by an award from the Office of the Vice Chancellor \
      for Academic Affairs at the University of Nebraska Medical Center 2017. \
      The content of this app was based on a presentation created by Dr. John Baker. \
      Text was organized and edited by Adam Kaftan, Mitch Nohner, and Jacob Franklin. \
      Peer review of this content was conducted by Dr. Maheswari (Manju) Mukherjee, \
      Dr. John Baker, and Dr. Amber Donnelly. Images were obtained from the \
      libraries of Dr. Maheswari (Manju) Mukherjee, Dr. John Baker, and from \
      the generous users of Wikimedia Commons who provide freely-licensed \
      educational media content to the public domain. Special thanks to E-learning \
      Program Director Peggy Moore, faculty advisor Dr. Maheswari (Manju) Mukherjee, \
      and the rest of the E-learning Department faculty for their expertise, \
      guidance, and encouragement in the creation of this application.'}
      </p>
    </div>)
  }

}

export default LoggedInView
