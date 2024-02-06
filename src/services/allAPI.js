const { commonAPI } = require("./commonAPI");
const { serverUrl } = require("./serverUrl");

//upload video

export const uploadVideo =async (reqBody)=>{
    //make POST http request "http://localhost:4000/videos" to add videos to the json server return response to the add componrnt

    return await commonAPI("POST",`${serverUrl}/videos`,reqBody)
}

//get all videos from json

export const getAllVideo =async ()=>{
    //make GET http request "http://localhost:4000/videos" to get all videos from the json server return response to the view componrnt

    return await commonAPI("GET",`${serverUrl}/videos`,"")
}

//get a video

export const getAVideo =async (id)=>{
    //make GET http request "http://localhost:4000/videos" to get all videos from the json server return response to the videocard componrnt

    return await commonAPI("GET",`${serverUrl}/videos${id}`,"")
}

//delete a video

export const deleteVideo =async (id)=>{
    //make DELELTE http request "http://localhost:4000/videos" to delete  videos from the json server return response to the videocard componrnt

    return await commonAPI("DELETE",`${serverUrl}/videos/${id}`,{})
}

export const addToHistory=async(videoDetails)=>{
    return await commonAPI("POST",`${serverUrl}/history`,videoDetails)

}

export const getAllHistory =async()=>{
    return await commonAPI("GET",`${serverUrl}/history`,)

}

export const addToCategory=async(reqBody)=>{
    return await commonAPI("POST",`${serverUrl}/categories`,reqBody)

}

export const getAllCategory =async()=>{
    return await commonAPI("GET",`${serverUrl}/categories`,)

}

export const deleteCategory=async(id)=>{
    return await commonAPI("DELETE",`${serverUrl}/categories/${id}`,{})

}

export const updateCategory=async(id,body)=>{
    return await commonAPI("PUT",`${serverUrl}/categories/${id}`,body)

}
export const deleteHistory=async(id)=>{
    return await commonAPI("DELETE",`${serverUrl}/history/${id}`,{})

}


