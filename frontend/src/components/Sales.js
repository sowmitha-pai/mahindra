import React, { useState } from 'react'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import '../App.css'
import Cards from './Cards';
import Leftcard from './leftcard';
import LineChart from './linechart';
import LineChart1 from './linechart1';
import Piechart from './piechart';

function Sales({text, label}) {
  const [sel_year,setYear]=useState("2022");
  const selectYearFunc=(event)=>{
    setYear(event.target.value);
  }
  return (
    <div style={{width:'100%'}}>
    <div className='sales' style={{padding:'20px'}}>
      <div className="containerr1">
          <select
            name="year"
            id="years"
            onChange={selectYearFunc}
          >
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div> 
        {/* <div className="more-vert-icon">
            <MoreVertIcon />
          </div>
          <div className='download'><SaveAltOutlinedIcon /></div>
          <div>
            <AddBoxIcon />
            < IndeterminateCheckBoxIcon/>
          </div> */}
        <div style={{ display: 'flex',height:'700px' }}>
          <div style={{flex:1}}>
            <Leftcard sel_year={sel_year}/>
          </div>
          <div style={{flex:2}}>
          {/* <img src={'/Map.png'} style={{ width: '90%', height: '100%' , borderRadius:'8px'}} width={200} height={200} /> */}
          <iframe src="https://lookerforniveus.cloud.looker.com/embed/looks/169" width={700} height={700}></iframe>
          </div>
        </div>
          <div style = {{paddingTop:"50px", display:'flex'}}>
           <div style={{flex:1}}> 
           <div style={{width:'100%',}}>
           <Cards />
           </div>
            {/* <Cards /> */}
            </div>
            {/* <span></span> */}
            <div style={{flex:1}}>
            <div style={{width:'100%'}}> 
            <div style={{fontSize:'20px', fontWeight:'600',textAlign:'center',marginTop:'30px'}}>Inventory metrics</div>
            <Piechart/>
            </div>
              {/* <LineChart/> */}
              </div>
            <div style={{flex:1 , position:'relative',top:"-240px"}}>
            <div style={{flex:1}}>
              <LineChart1/>
              </div>
              <div>
              <LineChart sel_year={sel_year}/>
              </div>
            
              </div>
          </div>
    </div>

    <div>
      <p className="copyRightParagraph1">
        Copyright @ 2023 mahindra rise. All rights reserved.
      </p>
    </div>
    </div>
  )
}

export default Sales