import React from "react";

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";



export default class TuDien1 extends React.Component {

    render(){

         const productsGenerator = quantity => {
            const items = [];
            items.push({ id: 1, name: `s`, price: `S` });
            items.push({ id: 2, name: `t`, price: `T` });
            items.push({ id: 3, name: `k`, price: `K` });
            items.push({ id: 4, name: `c`, price: `K` });
            items.push({ id: 5, name: `h`, price: `H` });
            items.push({ id: 6, name: `r`, price: `R` });
            items.push({ id: 7, name: `b`, price: `P` });
            items.push({ id: 8, name: `ng`, price: `KR` });
            items.push({ id: 9, name: `ngh`, price: `KR` });
            items.push({ id: 10, name: `g`, price: `KP` });
            items.push({ id: 11, name: `gi`, price: `KP` });
            items.push({ id: 12, name: `d`, price: `SH` });
            items.push({ id: 13, name: `n`, price: `SP` });
            items.push({ id: 14, name: `l`, price: `PR` });
            items.push({ id: 15, name: `ch`, price: `SR` });
            items.push({ id: 16, name: `nh`, price: `SK` });
            items.push({ id: 17, name: `d`, price: `TK` });
            items.push({ id: 19, name: `đ`, price: `SP` });
            items.push({ id: 20, name: `n`, price: `TP` });
            items.push({ id: 21, name: `m`, price: `RH` });
            items.push({ id: 22, name: `q`, price: `PR` });
            items.push({ id: 23, name: `p`, price: `SPH` });
            items.push({ id: 24, name: `v`, price: `SPK` });
            items.push({ id: 25, name: `c`, price: `STR` });
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
              text: "Âm đầu",
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
