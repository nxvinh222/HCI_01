import React from "react";

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";


export default class TuDien1 extends React.Component {

    render(){

        const productsGenerator = quantity => {
            const items = [];
            items.push({ id: 1, name: `a`, price: `-A` });
            items.push({ id: 2, name: `e`, price: `-E` });
            items.push({ id: 3, name: `i`, price: `*-I` });
            items.push({ id: 4, name: `ia`, price: `-IE` });
            items.push({ id: 5, name: `iê`, price: `-IE` });
            items.push({ id: 6, name: `iế`, price: `-SIE` });
            items.push({ id: 7, name: `iề`, price: `-HIE` });
            items.push({ id: 8, name: `iể`, price: `-HSIE` });
            items.push({ id: 9, name: `iễ`, price: `N-SIE` });
            items.push({ id: 10, name: `iệ`, price: `N-IE` });
            items.push({ id: 11, name: `o`, price: `-O` });
            items.push({ id: 12, name: `oa`, price: `-U` });
            items.push({ id: 13, name: `oe`, price: `-AY` });
            items.push({ id: 14, name: `oo`, price: `*-O` });
            items.push({ id: 15, name: `òa`, price: `-HU` });
            items.push({ id: 16, name: `óa`, price: `-SU` });
            items.push({ id: 17, name: `õa`, price: `N-SU` });
            items.push({ id: 19, name: `òe`, price: `-HAY` });
            items.push({ id: 20, name: `óe`, price: `-SAY` });
            items.push({ id: 21, name: `oò`, price: `-H*O` });
            items.push({ id: 22, name: `oă`, price: `*-U` });
            items.push({ id: 23, name: `ọa`, price: `N-U` });
            items.push({ id: 24, name: `ỏa`, price: `-HSU` });
            items.push({ id: 25, name: `oắ`, price: `N-U` });
            items.push({ id: 26, name: `oằ`, price: `-HSU` });
            items.push({ id: 27, name: `oẳ`, price: `-S*U` });
            items.push({ id: 28, name: `oẳ`, price: `-HS*U` });
            items.push({ id: 29, name: `oẵ`, price: `N-S*U` });
            items.push({ id: 30, name: `oặ`, price: `N*-U` });
            items.push({ id: 31, name: `oẹ`, price: `N-AY` });
            items.push({ id: 32, name: `oẻ`, price: `-HSAY` });
            items.push({ id: 33, name: `oẽ`, price: `N-SAY` });
            items.push({ id: 34, name: `oọ`, price: `N*-O` });
            items.push({ id: 35, name: `u`, price: `-IU` });
            items.push({ id: 36, name: `ua`, price: `-UO` });
            items.push({ id: 37, name: `uy`, price: `-UY` });
            items.push({ id: 38, name: `uya`, price: `-EY` });
            items.push({ id: 39, name: `uyê`, price: `-EY` });
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
              text: "Âm Chính",
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
