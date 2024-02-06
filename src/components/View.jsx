import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from './VideoCard'
import { getAllVideo } from '../services/allAPI'


function View({UploadVideoServerResponse}) {

  const [allVideos,setAllVideos]=useState([])
  const [deleteVideoStatus,setDeleteVideoStatus]= useState(false)

  
const getAllUploadedVideos = async ()=>{
  const {data} = await getAllVideo ()
  setAllVideos(data);
}

useEffect(()=>{
  getAllUploadedVideos();
},[UploadVideoServerResponse])
console.log(allVideos);

  return (
    <>
    <Row>
      {
        allVideos.length>0?
        allVideos.map(video=>(
      <Col sm={12}  md={6} lg={4} xl={3}>
      <Videocard displayData={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
      </Col>
      )):<p className='fw-bolder text-danger fs-5'>Nothing to Display</p>
}

    </Row>


    
    
    </>
  )
}

export default View