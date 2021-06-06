import React from "react";

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";



export default class TuDien1 extends React.Component {

    render(){
         const productsGenerator = quantity => {
            const items = [];
            items.push({ id: 1, name: `p`, price: `-TK` });
            items.push({ id: 2, name: `c`, price: `-NK` });
            items.push({ id: 3, name: `t`, price: `-NT` });
            items.push({ id: 4, name: `ch`, price: `-GK` });
            items.push({ id: 5, name: `u`, price: `-JG` });
            items.push({ id: 6, name: `ng`, price: `-G` });
            items.push({ id: 7, name: `i`, price: `-J` });
            items.push({ id: 8, name: `y`, price: `-JN` });
            items.push({ id: 9, name: `nh`, price: `-K` });
            items.push({ id: 10, name: `m`, price: `-T` });
            items.push({ id: 11, name: `n`, price: `-N` });
            items.push({ id: 12, name: `o`, price: `-JK` });
            
            return items;
          };
          
          const products = productsGenerator(100);
          
          const columns = [
            {
              dataField: "id",
              text: "STT",
              sort: true
            },
            {
              dataField: "name",
              text: "Âm Cuối",
              sort: true
            },
            {
              dataField: "price",
              text: "Phím Tốc Ký"
            }
          ];
        return (
            <div className="App">
              <BootstrapTable
                bootstrap4
                keyField="id"
                data={products}
                columns={columns}
                pagination={paginationFactory({ sizePerPage: 5 })}
              />
            </div>
          );
    }
  
}
