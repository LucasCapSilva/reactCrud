import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://crudalilucma.herokuapp.com'
})

export const findAll = async(url: string,setData: any, header: any) => { 
    const resposta = await api.get(url,header)
    setData(resposta.data)
}

export const findById = async(url: string,setData: any, header: any) => { 
    const resposta = await api.get(url,header)
    setData(resposta.data)
}

export const post = async(url: string, dados: any, setData: any, header: any) => { 
    const resposta = await api.post(url,dados,header)
    setData(resposta.data)
}

export const put = async(url: string, dados: any, setData: any, header: any) => { 
    const resposta = await api.put(url,dados,header)
    setData(resposta.data)
}

export const deleteById = async(url: string,header: any) => { 
    await api.delete(url,header)
}