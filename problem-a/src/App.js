import React, { Component, useState } from 'react'; //import React Component
import { render } from 'enzyme';

const EXAMPLE_SENATORS = [  
  { id: 'C000127',  name: 'Maria Cantwell', state: 'WA',  party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

/* Your code goes here */
export class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>US Senators 2019</h1>
        <SenatorTable />
      </div>
    )
  }
}

export class SenatorTable extends Component {
  render() {
    return (
      <table className="table table-bordered">
        <TableHeader cols={["Name", "State", "Phone", "Twitter"]} />

        <SenatorRow senator={EXAMPLE_SENATORS} />

      </table>
    )
  }
}

export class TableHeader extends Component {
  render() {
    let colsArray = this.props.cols.map((colNameString) => {
      let component = <th key={colNameString}>{colNameString}</th>;
      return component;
    })

    return (
      <thead>
        <tr>
          {colsArray}
        </tr>
      </thead>
    )
  }
}

export class SenatorRow extends Component {
  render() {
    let senatorRow = this.props.senator.map((senatorName) => {
      return ([
        <tr>
          <td key={senatorName}>{senatorName.name}</td>
          <td key={senatorName}>{senatorName.party.charAt(0)} - {senatorName.state}</td>
          <td key={senatorName}>
            <a href="tel:">{senatorName.phone}</a>
          </td>
          <td key={senatorName}>
          <a href="https://twitter.com/{senatorName.twitter}">@{senatorName.twitter}</a>
          </td>
        </tr>
      ])
    });

    return (
      <tbody>
        {senatorRow}
      </tbody>
    )
  }
}