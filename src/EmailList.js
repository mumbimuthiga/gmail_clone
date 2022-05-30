import { Checkbox ,IconButton } from '@material-ui/core';
import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, InboxOutlined, KeyboardHide, LabelImportant, LocalOffer, MoreVert, People, Redo, Settings, StarBorderOutlined } from '@material-ui/icons';
import React from 'react';
import './EmailList.css';
import Section from './Section';
import EmailRow from './EmailRow';

function EmailList() {
  return (
    <div className='emailList'>
      <div className='emailList_settings'>
        <div className='emailList_settingsLeft'>
          <Checkbox />
          <IconButton>
            <ArrowDropDown></ArrowDropDown>
          </IconButton>
         <IconButton>
            <Redo></Redo>
          </IconButton>

          <IconButton>
            <MoreVert></MoreVert>
          </IconButton>

        </div>
        <div className='emailList_settingsRight'>
          <IconButton>
            <ChevronLeft></ChevronLeft>
          </IconButton>

          <IconButton>
            <ChevronRight></ChevronRight>
          </IconButton>

          <IconButton>
            <KeyboardHide></KeyboardHide>
          </IconButton>

          <IconButton>
            <Settings></Settings>
          </IconButton>

        </div>
      </div>
      <div className='emailList__sections'>
        <Section  Icon={InboxOutlined} title='Primary' color='red' selected />
        <Section Icon={People} title='Social'  color='green'  />
        <Section Icon={LocalOffer} title='Promotions'  color='blue'  />

      </div> 

      <div className='emailList__list'>
         <EmailRow
         title="Twitch"
         subject="Meeting"
         description="This is a description"
         time="10pm"></EmailRow>

        <EmailRow
         title="Twitch"
         subject="Meeting"
         description="This is a description"
         time="10pm"></EmailRow>

         <EmailRow
         title="Twitch"
         subject="Meeting"
         description="This is a description"
         time="10pm"></EmailRow>

<EmailRow
         title="Twitch"
         subject="Meeting"
         description="This is a description"
         time="10pm"></EmailRow>

<EmailRow
         title="Twitch"
         subject="Meeting"
         description="This is a description
         This is a description
         This is a description
         This is a description"
         time="10pm"></EmailRow>

      </div>

    </div>
  )
}

export default EmailList