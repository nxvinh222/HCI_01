import React, { useState } from 'react'

import ReactDataGrid from '@inovua/reactdatagrid-enterprise'
import '@inovua/reactdatagrid-enterprise/index.css'

import DateFilter from '@inovua/reactdatagrid-community/DateFilter'


const gridStyle = { minHeight: 600 }

const dataSource = [
  { id: 1, name: 'John McQueen', WPM: 100, Acuracy: 100, createdOn: "2021-02-13" },
  { id: 2, name: 'Mary Stones', WPM: 90, Acuracy: 100, createdOn: "2021-03-13" },
  { id: 3, name: 'Robert Fil', WPM: 81, Acuracy: 100, createdOn: "2021-04-13" },
  { id: 4, name: 'Roger Robson', WPM: 81, Acuracy: 100, createdOn: "2021-05-13" },
  { id: 5, name: 'You', WPM: 70, Acuracy: 100, createdOn: "2021-06-13" },
  { id: 6, name: 'Bob Martin', WPM: 60, Acuracy: 100, createdOn: "2020-07-13" },
  { id: 7, name: 'Matthew Richardson', WPM: 50, Acuracy: 100, createdOn: "2020-08-13" },
  { id: 8, name: 'Ritchie Peterson', WPM: 44, Acuracy: 100, createdOn: "2020-09-13" },
  { id: 9, name: 'Bryan Martin', WPM: 40, Acuracy: 100, createdOn: "2020-10-13" },
  { id: 10, name: 'Mark Martin', WPM: 34, Acuracy: 100, createdOn: "2020-11-13" },
  { id: 11, name: 'Michelle Sebastian', WPM: 34, Acuracy: 100, createdOn: "2020-12-13" },
  { id: 12, name: 'Michelle Sullivan', WPM: 21, Acuracy: 100, createdOn: "2021--13" },
  { id: 13, name: 'Jordan Bike', WPM: 16, Acuracy: 100, createdOn: "2021-02-14" },
  { id: 14, name: 'Nelson Ford', WPM: 14, Acuracy: 100, createdOn: "2021-02-15" },
  { id: 15, name: 'Tim Cheap', WPM: 13, Acuracy: 100, createdOn: "2021-02-16" },
  { id: 16, name: 'Robert Carlson', WPM: 11, Acuracy: 100, createdOn: "2021-02-17" },
  { id: 17, name: 'Johny Perterson', WPM: 10, Acuracy: 100, createdOn: "2021-02-18" },
];

const columns = [
  {
    name: 'id', header: 'Rank', defaultWidth: 100, type: 'number',
    headerProps: {
      style: { color: 'white', fontStyle: 'normal', fontWeight: 'bold', fontSize: '15px', textAlign: 'center', backgroundColor: "#d81e5b" }
    }
  },
  {
    name: 'name', header: 'Tên', minWidth: 50, defaultFlex: 1,
    headerProps: {
      style: { color: 'white', fontStyle: 'normal', fontWeight: 'bold', fontSize: '15px', textAlign: 'center', backgroundColor: "#d81e5b" }
    }
  },
  {
    name: 'WPM', header: 'Tốc độ', maxWidth: 500, defaultFlex: 1,
    headerProps: {
      style: { color: 'white', fontStyle: 'normal', fontWeight: 'bold', fontSize: '15px', textAlign: 'center', backgroundColor: "#d81e5b" }
    }
  },
  {
    name: 'Acuracy', header: 'Độ chính xác (%)', maxWidth: 500, defaultFlex: 1,
    headerProps: {
      style: { color: 'white', fontStyle: 'normal', fontWeight: 'bold', fontSize: '15px', textAlign: 'center', backgroundColor: "#d81e5b" }
    }
  },
  {
    name: 'createdOn',
    header: 'Ngày bắt đầu',
    defaultFlex: 1,
    // need to specify dateFormat
    dateFormat: 'YYYY-MM-DD',
    filterEditor: DateFilter,
    headerProps: {
      style: { color: 'white', fontStyle: 'normal', fontWeight: 'bold', fontSize: '15px', textAlign: 'center', backgroundColor: "#d81e5b" }
    }
  }
];


const filterValue = [
  { name: 'name', operator: 'startsWith', type: 'string', value: '' },
  { name: 'WPM', operator: 'gte', type: 'number', value: 21 },
  { name: 'Acuracy', operator: 'gte', type: 'number', value: 21 },
  { name: 'createdOn', operator: 'after', type: 'date', value: '' }
];

const rowStyle = ({ data }) => {
  const colorMap = {
    You: 'red'
  }

  return {
    color: colorMap[data.name]
  }
}


const Ranking = () => {
  return (
    <div>
      <ReactDataGrid
        idProperty="id"
        style={gridStyle}
        rowStyle={rowStyle}
        defaultFilterValue={filterValue}
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  )
}

export default Ranking