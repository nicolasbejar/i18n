import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import Job from "./job";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "../locales/es";
import localeEnMessages from "../locales/en"

let style
const JobsList = () => {
  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      visits: 1000,
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      visits: 2000,
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      visits: 123,
    },
  ]);

  const [intl, setIntel] = useState({
    locale: 'en',
    messages: localeEnMessages
})

useEffect( () => {
   style = {
    "background-color": 'black',
    "color": "white"
  }
});

function changeLanguage(){
  if(intl.locale === "es"){
    setIntel({
      locale: 'en',
      messages: localeEnMessages
  })
  style = {
    "background-color": 'black',
    "color": "white"
  }
  }
  else{
    setIntel({
      locale: 'es',
      messages: localeEsMessages
  })
  style = {
    "background-color": 'white',
    "color": "black",
  }
  }
}


  return (

  
    <IntlProvider locale={intl.locale} messages= {intl.messages}>
    <div>
      <button onClick={changeLanguage}> Change Language</button>
      <table className="table">
        <thead className="thead-dark" style={style}>
          <tr>
            <th scope="col">#</th>
            <th><FormattedMessage id="Position"/></th>
            <th><FormattedMessage id="Company"/></th>
            <th><FormattedMessage id="Salary"/></th>
            <th><FormattedMessage id="City"/></th>
            <th><FormattedMessage id="PublicationDate"/></th>
            <th><FormattedMessage id="Views"/></th>
          </tr>
        </thead>
        <tbody>
          {console.log("Offers", offers)}
          {offers.map((e, i) => (
            <Job key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>
    </IntlProvider>
  );
};

export default JobsList;
