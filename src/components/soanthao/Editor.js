import React from 'react';

export default class Editor1 extends React.Component{

    batHoTro() {
        if (document.getElementById('bat-ho-tro')[0].textContent === "Bật hỗ trợ") {
            document.getElementById('bat-ho-tro')[0].innerHTML = "Tắt hỗ trợ";
            document.getElementsByClassName("keyboard-tocky").style.display = 'none';
            console.log("batHoTro");
        } else {
            document.getElementById('bat-ho-tro')[0].innerHTML = "Bật hỗ trợ";
            document.getElementsByClassName("keyboard-tocky").style.display = 'block';
        }
    }

    render(){

        return(
            <>
            <div style={{marginTop: 8, marginBottom: 0}}>
              <div style={{marginTop: 9}} className="row">
                <div style={{marginBottom: '0rem !important'}} className="col-9">
                  <div className="card  shadow h-100 py-2">
                    <div style={{paddingTop: 3}} className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div style={{marginRight: '0rem!important'}} className="col mr-2">
                          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            <div>Văn bản</div>
                            <div>
                              <button id="bat-ho-tro" onClick = {this.batHoTro} style={{width: 'fit-content', marginTop: '-8px'}} type="button" className="btn btn-primary btn-go">Bật hỗ trợ</button>
                            </div>
                          </div>
                          <textarea id="go" style={{width: '100%', height: 250}} className="form-control soan-thao" defaultValue={""} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{marginBottom: '0rem !important'}} className="col-3">
                  <div className="card  shadow h-100 py-2">
                    <div style={{paddingTop: 3}} className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div style={{marginRight: '0rem!important'}} className="col mr-2">
                          <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Lịch sử gõ</div>
                          <div id="ma" style={{width: '100%', height: 250, border: '1px solid #D1D3E2', borderRadius: 5}} className="soan-thao soan-thao-log">
                            <ul id="log-press">
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br/>
            </>
        )
    }
}