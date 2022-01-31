// This file is where we get the records from the MongoDB server by making an API call. 

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import Title from '../Title';

const Record = (props) => (
  <tr>
    <td>{props.record.room}</td>
    <td>{props.record.occupancy}</td>
    <td>{props.record.seats}</td>
    <td>{props.record.time}</td>
    <td>{props.record.status}</td>
  </tr>
);

export default function RecordList() {

    const [records, setRecords] = useState([]);
    
    // This method fetches the records from the database.
    useEffect(() => {
      async function getRecords() {
        const response = await fetch(`http://localhost:5000/record/`);
    
        if (!response.ok) {
          const message = `An error occured: ${response.statusText}`;
          window.alert(message);
          return;
        }
    
        const records = await response.json();
        setRecords(records);
      }
    
      getRecords();
    
      return;
    }, [records.length]);
    
    // This method will map out the records on the table
    function recordList() {
      return records.map((record) => {
        return (
          <Record
            record={record}
            key={record._id}
          />
        );
      });
    }

    function ttpList() {
      return (
        <table className="table table-striped" style={{ marginTop: 20, Width: 60}}>
          <thead>
            <tr>
              <th>Room&nbsp;</th>
              <th>Occupancy&nbsp;</th>
              <th>Seats&nbsp;</th>
              <th>Time&nbsp;</th>
              <th>Status&nbsp;</th>
            </tr>
          </thead>
          <tbody>{recordList()}</tbody>
        </table>
      )
    }

  // This following section will display the table with the records of room occupancy.
    return (
      <div>
        <Navbar />
        <Title />
        <h2>Record List</h2>
        <table className="table table-striped" style={{ marginTop: 20, Width: 60}}>
          <thead>
            <tr>
              <th>Room&nbsp;</th>
              <th>Occupancy&nbsp;</th>
              <th>Seats&nbsp;</th>
              <th>Time&nbsp;</th>
              <th>Status&nbsp;</th>
            </tr>
          </thead>
          <tbody>{recordList()}</tbody>
        </table>
      </div>
    );
}
