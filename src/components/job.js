import React from "react";
import {FormattedDate, FormattedNumber, FormattedMessage } from 'react-intl';

const Job = (props) => {
  if(props.offer.salary ===1 ){
    return (
      <tr>
        <th scope="row">{props.offer.id}</th>
        <td>{props.offer.name}</td>
        <td>{props.offer.company}</td>
        <td>
          <FormattedMessage
          id ="app.greeting"
          description="Salario"
          defaultMessage="$ {salary} "
          values={{salary: props.offer.salary,}}/>
           <FormattedMessage
          id ="Million"/>

        </td>
        <td>{props.offer.city}</td>
        <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td> <FormattedNumber 
      value={props.offer.visits}>
        </FormattedNumber></td>
  
      </tr>
    );

  }else{
    return (
      <tr>
        <th scope="row">{props.offer.id}</th>
        <td>{props.offer.name}</td>
        <td>{props.offer.company}</td>
        <td>
          <FormattedMessage
          id ="app.greeting"
          description="Salario"
          defaultMessage="$ {salary} "
          values={{salary: props.offer.salary,}}/>
          <FormattedMessage
          id ="Millions"/>

        </td>
        <td>{props.offer.city}</td>
        <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td> <FormattedNumber 
      value={props.offer.visits}>
        </FormattedNumber></td>
  
      </tr>
    );

  }
  
};

export default Job;
