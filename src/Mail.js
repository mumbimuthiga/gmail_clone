import { Icon, IconButton } from '@material-ui/core';
import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, LabelImportantOutlined, MoveToInbox, Print, UnfoldMore, WatchLater } from '@material-ui/icons';
import React from 'react'
import './Mail.css';

function Mail() {
  return (
    <div className='mail'>
      <div className='mail__tools'>
        <div className='mail__toolsLeft'>
          <IconButton>
            <ArrowBack></ArrowBack>
          </IconButton>
          <IconButton>
            <MoveToInbox></MoveToInbox>
          </IconButton>
          <IconButton>
            <Error></Error>
          </IconButton>
          <IconButton>
            <Delete></Delete>
          </IconButton>
          <IconButton>
            <Email></Email>
          </IconButton>
          <IconButton>
            <WatchLater></WatchLater>
          </IconButton>
          <IconButton>
            <CheckCircle></CheckCircle>
          </IconButton>
          <IconButton>
            <LabelImportant></LabelImportant>
          </IconButton>


        </div>
        <div className='mail__toolsRight'>
          <IconButton>
            <UnfoldMore></UnfoldMore>
          </IconButton>

          <IconButton>
            <Print></Print>
          </IconButton>

          <IconButton>
            <ExitToApp></ExitToApp>
          </IconButton>

        </div>
        </div>
        <div className='mail__body'>
          <div className='mail_bodyHeader'>
            <h2>Subject</h2>
            <LabelImportantOutlined className='mail__important'></LabelImportantOutlined>
            <p className='mail__title'>Title</p>
            <p className='mail__time'>10pm</p>
          </div>
          <div className='mail__message'>
            <p>This is a message</p>
          </div>
        </div>
        </div>
  )
}

export default Mail