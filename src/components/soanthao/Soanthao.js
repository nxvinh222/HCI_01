import React from 'react';
import "./soanthao.css";
import VirtualKeyboard from "../keyboard/virtualKeyboard/VirtualKeyboard";


export default class Editor extends React.Component {
    

    

    render() {

        const Search = () => {
            const [showResults, setShowResults] = React.useState(false)
            let isShow = false;
            
            var batHoTro = () => {
                if (document.getElementById('bat-ho-tro').textContent === "Bật hỗ trợ") {
                    document.getElementById('bat-ho-tro').innerHTML = "Tắt hỗ trợ";
                    isShow = true;
                } else {
                    document.getElementById('bat-ho-tro').innerHTML = "Bật hỗ trợ";
                }
                setShowResults(isShow);
            }
            return (
              <div>
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
                              <button id="bat-ho-tro" onClick = {batHoTro} style={{width: 'fit-content', marginTop: '-8px'}} type="button" className="btn btn-primary btn-go">Bật hỗ trợ</button>
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
                { showResults ? <VirtualKeyboard /> : null }
              </div>
            )
          }

          const Results = () => (
            <div id="results" className="search-results">
              Some Results
            </div>
          )
     

        return(
            <>
            <div className="container-fluid main-content">
                <Search />
                {/* 
                <div >
                    <VirtualKeyboard
                        hintKey=" "
                        className = "keyboard-tocky"
                        disableHand={true}
                    />
                </div>
                */}
            </div>
            </>
        );
    }
}

