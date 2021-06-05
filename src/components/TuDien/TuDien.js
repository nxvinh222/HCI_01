import React from 'react';
import TuDienAmDau from "./TuDienAmDau";
import TuDienAmChinh from "./TuDienAmChinh";
import TuDienCuoi from "./TuDienCuoi";
export default class TuDien extends React.Component {
    render(){
        const Dic = () => {
            
            let dicCategory = <TuDienAmDau />;
            const [showDic, setshowDic] = React.useState(dicCategory)
            
            var amDau = () =>{
                dicCategory = <TuDienAmDau />;
                setshowDic(dicCategory);
            }

            var amChinh = () =>{
                dicCategory = <TuDienAmChinh />;
                setshowDic(dicCategory);
            }

            var amCuoi = () =>{
                dicCategory = <TuDienCuoi />;
                setshowDic(dicCategory);
            }

            

            return(
                <div>
                     <div style={{margin: 'auto', width: '50%', padding: 30, paddingLeft: 200}}>
                        <ul className="nav nav-pills">
                            <li>
                            <button id="am-dau" onClick = {amDau} style={{width: 'fit-content', marginTop: '-8px'}} type="button" className="btn btn-primary btn-go">Âm Đầu</button>
                            </li>
                            <li>
                            <button id="am-chinh" onClick = {amChinh} style={{width: 'fit-content', marginTop: '-8px'}} type="button" className="btn btn-primary btn-go">Âm Chính</button>
                            </li>
                            <li>
                            <button id="am-cuoi" onClick = {amCuoi} style={{width: 'fit-content', marginTop: '-8px'}} type="button" className="btn btn-primary btn-go">Âm Cuối</button>
                            </li>   
                        </ul>
                    </div>
                    
                    <div>
                        {showDic}
                    </div>
                </div>
    
            )
        }

        
        return(
            <>
            <div >
                <Dic />
               
            </div>
            </>
        );
        
    }
}