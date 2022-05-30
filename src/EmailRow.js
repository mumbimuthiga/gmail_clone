import React from 'react';
import './EmailRow.css';
import { Checkbox ,IconButton } from '@material-ui/core';
import {useHistory} from "react-router-dom";
import { LabelImportant, StarBorderOutlined} from '@material-ui/icons';

function EmailRow({id ,title ,subject ,description,time}) {
    const history=useHistory();
  return (
    <div onClick={()=>history.push("/Mail")} className='emailRow'>
     <div className='emailRow__options'>
         <Checkbox></Checkbox>
         <IconButton>
            <StarBorderOutlined></StarBorderOutlined>
         </IconButton>
         <IconButton>
             <LabelImportant></LabelImportant>
         </IconButton>

     </div>
     <h3 className='emailRow__title'>
         {title}
    </h3>
     <div className='emailRow__message'>
         <h4>
             {subject} { " "}
             <span className='emailRow__description'>-
             {description}   
             </span>
         </h4>

     </div>

     <p className='emailRow__time'>
         {time}

     </p>

    </div>
  )
}

export default EmailRow