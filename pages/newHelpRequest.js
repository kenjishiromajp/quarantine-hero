import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Button, Col, Pagination, Row, Input, Card, Avatar } from 'antd';
import '../assets/index.less';
import MainLayout from '../layouts/MainLayout';
import fetch from 'isomorphic-fetch';
import MySelect from '../components/MySelect';
import Request from '../components/Request';
import HelpRequestFormContainer from '../containers/HelpRequestFormContainer';

const { Meta } = Card;


// const renderSelect = (arrayData, id='id', label='name', emptyLabel = "Select a value", props) => (
//   <Select {...props} >
//     <Option key="0" value={null}>{emptyLabel}</Option>
//     {arrayData.map(dataItem => (
//       <Option key={dataItem[id]} value={dataItem[id]}>{dataItem[label]}</Option>
//     ))}
//   </Select>
// )

const HelpRequests = ({ countries, requests }) => {
  const [countrySelected, setCountrySelected] = useState(null);
  const [stateSelected, setStateSelected] = useState(null);
  const [citySelected, setCitySelected] = useState(null);
  const [suburbSelected, setSuburbSelected] = useState(null);

  const [currentPagination, setCurrentPagination] = useState(1);

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [suburbs, setSuburbs] = useState([]);

  async function OnChangePagination(page, size) {
    setCurrentPagination(page);
  }

  async function onCountryChange(value) {
    //const response = await fetch("https://restcountries.eu/rest/v2/all")
    //const json = await response.json();
    const json = [
      { "id": "NSW", "name": "New South Whales" },
      { "id": "QLD", "name": "Queensland" },
      { "id": "SA", "name": "South Australia" }];

    const list = json.map(item => {
      return item
    });
    setCountrySelected(value);
    setStates(list);
  }

  useEffect(() => {
    getRequests();
  }, [countrySelected, stateSelected, citySelected, suburbSelected, currentPagination]);

  async function onStateChange(value) {
    //const response = await fetch("https://restcountries.eu/rest/v2/all")
    //const json = await response.json();

    const json = [
      { "id": "SYD", "name": "Sydney" },
      { "id": "MEL", "name": "Melbourne" },
      { "id": "BRI", "name": "Brisbane" },
      { "id": "PE", "name": "Perth" }];

    const list = json;

    setStateSelected(value);
    setCities(list);
  }

  async function onCityChange(value) {
    //const response = await fetch("https://restcountries.eu/rest/v2/all")
    //const json = await response.json();

    const json = [
      { "id": "1", "name": "Spring Hill" },
      { "id": "2", "name": "West End" },
      { "id": "3", "name": "Fortitude Valley" },
      { "id": "4", "name": "Green Lopes" }];

    const list = json;

    setSuburbs(list);
    setCitySelected(value);
  }

  async function onSuburbChange(value) {
    setSuburbSelected(value);
  }

  async function getRequests() {

    const req = {
      "countrySelected": countrySelected,
      "stateSelected": stateSelected,
      "citySelected": citySelected,
      "suburbSelected": suburbSelected,
      "currentPagination": currentPagination
    }

    console.log(JSON.stringify(req));
    //setRequests(list);
  }

  return (
    <MainLayout>
      <div className="container">
        <Head>
          <title>Quarantine Hero - New Request</title>
        </Head>
        <main>
          <section className="main full-width">
            <HelpRequestFormContainer />
          </section>
        </main>
      </div>
    </MainLayout>)
};

HelpRequests.getInitialProps = async ctx => {
  // const res = await fetch('https://api.github.com/repos/zeit/next.js')
  // const json = await res.json();
  //const requests = await loadRequests();
  const countries = await loadCountries();
  const requests = await loadRequests();

  async function loadRequests() {
    const list = {
      "data": [
        {
          "id": 1,
          "user": {
            "name": "Rodrigo",
            "facebookProfileURL": "https://www.facebook.com/Rodrigooaraujo",
            "photoUrl": "",
            "location": {
              "suburb": "Spring Hill",
              "city": "Brisbane",
              "state": "QLD",
              "country": "Australia"
            }
          },
          "description": "I need a toilet paper",
          "status": "PENDING",
          "createdAt": "22/03/2020",
          "updatedAt": ""
        },
        {
          "id": 2,
          "user": {
            "name": "Giovanni",
            "facebookProfileURL": "https://www.facebook.com/Rodrigooaraujo",
            "photoUrl": "",
            "location": {
              "suburb": "West End",
              "city": "Brisbane",
              "state": "QLD",
              "country": "Australia"
            }
          },
          "description": "I need bread",
          "status": "PENDING",
          "createdAt": "22/03/2020",
          "updatedAt": ""
        },
        {
          "id": 3,
          "user": {
            "name": "Giovanni",
            "facebookProfileURL": "https://www.facebook.com/Rodrigooaraujo",
            "photoUrl": "",
            "location": {
              "suburb": "West End",
              "city": "Brisbane",
              "state": "QLD",
              "country": "Australia"
            }
          },
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          "status": "PENDING",
          "createdAt": "22/03/2020",
          "updatedAt": ""
        },
        {
          "id": 4,
          "user": {
            "name": "Giovanni",
            "facebookProfileURL": "https://www.facebook.com/Rodrigooaraujo",
            "photoUrl": "",
            "location": {
              "suburb": "West End",
              "city": "Brisbane",
              "state": "QLD",
              "country": "Australia"
            }
          },
          "description": "I need bred",
          "status": "PENDING",
          "createdAt": "22/03/2020",
          "updatedAt": ""
        },
        {
          "id": 5,
          "user": {
            "name": "Giovanni",
            "facebookProfileURL": "https://www.facebook.com/Rodrigooaraujo",
            "photoUrl": "",
            "location": {
              "suburb": "West End",
              "city": "Brisbane",
              "state": "QLD",
              "country": "Australia"
            }
          },
          "description": "I need bred",
          "status": "PENDING",
          "createdAt": "22/03/2020",
          "updatedAt": ""
        },
        {
          "id": 6,
          "user": {
            "name": "Giovanni",
            "facebookProfileURL": "https://www.facebook.com/Rodrigooaraujo",
            "photoUrl": "",
            "location": {
              "suburb": "West End",
              "city": "Brisbane",
              "state": "QLD",
              "country": "Australia"
            }
          },
          "description": "I need bred",
          "status": "PENDING",
          "createdAt": "22/03/2020",
          "updatedAt": ""
        }
      ],
      "_links": {
        "currentPage": 1,
        "total": 1
      }
    };

    return list
  }

  async function loadCountries() {
    const response = await fetch("https://restcountries.eu/rest/v2/all")
    const list = await response.json();
    // console.log(list);
    // const list = json.map(item => {
    //   return item.name
    // })

    return list;
  }

  return {
    countries, requests
  }
};

export default HelpRequests;
