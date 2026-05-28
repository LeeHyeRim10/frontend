import axios from "axios";

// 전체 json 테이블 호출 [{},{},{}] response table
export const userTotalGetApi = async () => { // async, await 비동기 처리 (api만 이렇게 처리함 why? 컴퓨터간의 통신이기 때문) 빠른 애부터 보여줌
    try { // 통신 상이므로 try/catch문
        const response = await axios.get("http://localhost:3001/user") // restful로 request
        return response.data
    } catch (error) {
        return error
    }
}

// 특정 obj 호출 {} response obj
export const userGetApi = async () => {
    try {
        const response = await axios.get("http://localhost:3001/user/1")
        return response.data
    } catch (error) {
        return error
    }
}

// create post는 본인이 보낸 obj를 response
export const userPostApi = async (dataObj) => { 
    try {
        const response = await axios.post("http://localhost:3001/user", dataObj)
        return response.data
    } catch (error) {
        return error
    }
}

// update
export const userPutApi = async (dataObj) => { 
    try {
        const response = await axios.post("http://localhost:3001/user/1", dataObj)
        return response.data
    } catch (error) {
        return error
    }
}


// delete response id
export const userDeleteApi = async () => { 
    try {
        const response = await axios.delete("http://localhost:3001/user/1")
        return response.data
    } catch (error) {
        return error
    }
}