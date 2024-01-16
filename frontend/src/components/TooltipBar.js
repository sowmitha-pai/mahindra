import * as React from 'react';
import {useEffect,useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import { drillDown } from "../api/Look.js";


let Thar_enq,Bolero_enq,Scorpio_enq,XUV300_enq,XUV700_enq;
let Thar_td,Bolero_td,Scorpio_td,XUV300_td,XUV700_td;
let Thar_bk,Bolero_bk,Scorpio_bk,XUV300_bk,XUV700_bk;
let Thar_ts,Bolero_ts,Scorpio_ts,XUV300_ts,XUV700_ts;










export const TooltipBar_Enq = ({sel_year}) => {
  const [drillDowndata,setDrillDownData]=useState([])
 useEffect(() => {
   const fetchData = async () => {
     try {
       const result = await drillDown();
       setDrillDownData(result.success);
     } catch (error) {
       console.error("Error fetching data:", error);
     }
   };
    fetchData();
 }, []);
 drillDowndata.filter((item)=>
   item["all_data_iter_4.date_year"]===parseInt(sel_year)).map((item, index) => {
     switch(item["all_data_iter_4.product_sku"]){
       case "XUV300":
         XUV300_enq=item["all_data_iter_4.Enquiries"]
         break
       case "XUV700":
         XUV700_enq=item["all_data_iter_4.Enquiries"]
         break
       case "Scorpio Pickup":
         Scorpio_enq=item["all_data_iter_4.Enquiries"]
         break
       case "Bolero Pickup":
         Bolero_enq=item["all_data_iter_4.Enquiries"]
         break
       case "Thar":
         Thar_enq=item["all_data_iter_4.Enquiries"]
         break
     }
   })
  const graphdata_enq=[
   {name:"Thar", value: Thar_enq},
   {name:"XUV700", value: XUV700_enq},
   {name:"XUV300", value: XUV300_enq},
   {name:"Bolero", value: Bolero_enq},
   {name:"Scorpio", value: Scorpio_enq}
 ]
 return (
   <Tooltip title="Show">
   <TableContainer  component={Paper} sx={{maxWidth: 200,  borderEndEndRadius: '10px'}}>
     <h4 style={{textAlign:'center'}}>Enquiries</h4>
     <Table sx={{ maxWidth: 150, maxHeight: 30, fontSize: '12px' }} aria-label="simple table">
       <TableHead>
         <TableRow>
           <TableCell sx={{ fontSize: '12px',paddingY: '8px'  }}>Name</TableCell>
           <TableCell sx={{ fontSize: '12px',paddingY: '8px'  }}>Qty</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {graphdata_enq.map((row) => (
           <TableRow
             key={row.name}
             sx={{ '&:last-child td, &:last-child th': { border: 0 }, fontSize: '10px',marginBottom: '-15px'}}
           >
              <TableCell component="th" scope="row" sx={{ fontSize: '10px',paddingY: '8px'  }}>
               {row.name}
             </TableCell>
             <TableCell component="tr" scope="row" sx={{ fontSize: '10px',paddingY: '8px'  }}>
               {row.value}
             </TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
   </Tooltip>
 );
}
export const TooltipBar_testDrives = ({sel_year}) => {
 const [drillDowndata,setDrillDownData]=useState([])
 useEffect(() => {
   const fetchData = async () => {
     try {
       const result = await drillDown();
       setDrillDownData(result.success);
     } catch (error) {
       console.error("Error fetching data:", error);
     }
   };
    fetchData();
 }, []);
 drillDowndata.filter((item)=>
   item["all_data_iter_4.date_year"]===parseInt(sel_year)).map((item, index) => {
     switch(item["all_data_iter_4.product_sku"]){
       case "XUV300":
         XUV300_td=item["all_data_iter_4.Test_Drives"]
         break
       case "XUV700":
         XUV700_td=item["all_data_iter_4.Test_Drives"]
         break
       case "Scorpio Pickup":
         Scorpio_td=item["all_data_iter_4.Test_Drives"]
         break
       case "Bolero Pickup":
         Bolero_td=item["all_data_iter_4.Test_Drives"]
         break
       case "Thar":
         Thar_td=item["all_data_iter_4.Test_Drives"]
         break
     }
   })
  const graphdata_td=[
   {name:"Thar", value: Thar_td},
   {name:"XUV700", value: XUV700_td},
   {name:"XUV300", value: XUV300_td},
   {name:"Bolero", value: Bolero_td},
   {name:"Scorpio", value: Scorpio_td}
 ]
 return (
   <Tooltip title="Show">
   <TableContainer  component={Paper} sx={{maxWidth: 200,  borderEndEndRadius: '10px'}}>
     <h4 style={{textAlign:'center'}}>Test Drives</h4>
     <Table sx={{ maxWidth: 150, maxHeight: 30, fontSize: '12px' }} aria-label="simple table">
       <TableHead>
         <TableRow>
           <TableCell sx={{ fontSize: '12px',paddingY: '8px'  }}>Name</TableCell>
           <TableCell sx={{ fontSize: '12px',paddingY: '8px'  }}>Qty</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {graphdata_td.map((row) => (
           <TableRow
             key={row.name}
             sx={{ '&:last-child td, &:last-child th': { border: 0 }, fontSize: '10px',marginBottom: '-15px'}}
           >
              <TableCell component="th" scope="row" sx={{ fontSize: '10px',paddingY: '8px'  }}>
               {row.name}
             </TableCell>
             <TableCell component="tr" scope="row" sx={{ fontSize: '10px',paddingY: '8px'  }}>
               {row.value}
             </TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
   </Tooltip>
 );
}


export const TooltipBar_bk = ({sel_year}) => {
 const [drillDowndata,setDrillDownData]=useState([])
 useEffect(() => {
   const fetchData = async () => {
     try {
       const result = await drillDown();
       setDrillDownData(result.success);
     } catch (error) {
       console.error("Error fetching data:", error);
     }
   };
    fetchData();
 }, []);
 drillDowndata.filter((item)=>
   item["all_data_iter_4.date_year"]===parseInt(sel_year)).map((item, index) => {
     switch(item["all_data_iter_4.product_sku"]){
       case "XUV300":
         XUV300_bk=item["all_data_iter_4.Booking"]
         break
       case "XUV700":
         XUV700_bk=item["all_data_iter_4.Booking"]
         break
       case "Scorpio Pickup":
         Scorpio_bk=item["all_data_iter_4.Booking"]
         break
       case "Bolero Pickup":
         Bolero_bk=item["all_data_iter_4.Booking"]
         break
       case "Thar":
         Thar_bk=item["all_data_iter_4.Booking"]
         break
     }
   })
  const graphdata_bk=[
   {name:"Thar", value: Thar_bk},
   {name:"XUV700", value: XUV700_bk},
   {name:"XUV300", value: XUV300_bk},
   {name:"Bolero", value: Bolero_bk},
   {name:"Scorpio", value: Scorpio_bk}
 ]
 return (
   <Tooltip title="Show">
   <TableContainer  component={Paper} sx={{maxWidth: 200,  borderEndEndRadius: '10px'}}>
     <h4 style={{textAlign:'center'}}>Booking</h4>
     <Table sx={{ maxWidth: 150, maxHeight: 30, fontSize: '12px' }} aria-label="simple table">
       <TableHead>
         <TableRow>
           <TableCell sx={{ fontSize: '12px',paddingY: '8px'  }}>Name</TableCell>
           <TableCell sx={{ fontSize: '12px',paddingY: '8px'  }}>Qty</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {graphdata_bk.map((row) => (
           <TableRow
             key={row.name}
             sx={{ '&:last-child td, &:last-child th': { border: 0 }, fontSize: '10px',marginBottom: '-15px'}}
           >
              <TableCell component="th" scope="row" sx={{ fontSize: '10px',paddingY: '8px'  }}>
               {row.name}
             </TableCell>
             <TableCell component="tr" scope="row" sx={{ fontSize: '10px',paddingY: '8px'  }}>
               {row.value}
             </TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
   </Tooltip>
 );
}


export const TooltipBar_ts = ({sel_year}) => {
 const [drillDowndata,setDrillDownData]=useState([])
 useEffect(() => {
   const fetchData = async () => {
     try {
       const result = await drillDown();
       setDrillDownData(result.success);
     } catch (error) {
       console.error("Error fetching data:", error);
     }
   };
    fetchData();
 }, []);
 drillDowndata.filter((item)=>
   item["all_data_iter_4.date_year"]===parseInt(sel_year)).map((item, index) => {
     switch(item["all_data_iter_4.product_sku"]){
       case "XUV300":
         XUV300_ts=item["all_data_iter_4.Total_Sales"]
         break
       case "XUV700":
         XUV700_ts=item["all_data_iter_4.Total_Sales"]
         break
       case "Scorpio Pickup":
         Scorpio_ts=item["all_data_iter_4.Total_Sales"]
         break
       case "Bolero Pickup":
         Bolero_ts=item["all_data_iter_4.Total_Sales"]
         break
       case "Thar":
         Thar_ts=item["all_data_iter_4.Total_Sales"]
         break
     }
   })
  const graphdata_ts=[
   {name:"Thar", value: Thar_ts},
   {name:"XUV700", value: XUV700_ts},
   {name:"XUV300", value: XUV300_ts},
   {name:"Bolero", value: Bolero_ts},
   {name:"Scorpio", value: Scorpio_ts}
 ]
 return (
   <Tooltip title="Show">
   <TableContainer  component={Paper} sx={{maxWidth: 200,  borderEndEndRadius: '10px'}}>
     <h4 style={{textAlign:'center'}}>Purchases</h4>
     <Table sx={{ maxWidth: 150, maxHeight: 30, fontSize: '12px' }} aria-label="simple table">
       <TableHead>
         <TableRow>
           <TableCell sx={{ fontSize: '12px',paddingY: '8px'  }}>Name</TableCell>
           <TableCell sx={{ fontSize: '12px',paddingY: '8px'  }}>Qty</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {graphdata_ts.map((row) => (
           <TableRow
             key={row.name}
             sx={{ '&:last-child td, &:last-child th': { border: 0 }, fontSize: '10px',marginBottom: '-15px'}}
           >
              <TableCell component="th" scope="row" sx={{ fontSize: '10px',paddingY: '8px'  }}>
               {row.name}
             </TableCell>
             <TableCell component="tr" scope="row" sx={{ fontSize: '10px',paddingY: '8px'  }}>
               {row.value}
             </TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
   </Tooltip>
 );
}
