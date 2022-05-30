import { Checkbox ,IconButton } from '@material-ui/core';
import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, MoreVert, Redo, Settings } from '@material-ui/icons';
import React from 'react';
import './EmailList.css';
import Section from './Section';

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
        <Section title='Primary' Icon={ArrowDropDown} color='red' selected />
        <Section title='Social' Icon={ArrowDropDown} color='red'  />
        <Section title='Promotions' Icon={ArrowDropDown} color='red'  />

      </div>

    </div>
  )
}

export default EmailList