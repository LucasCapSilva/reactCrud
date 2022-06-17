import axios from 'axios';

export const api = axios.create({
    baseURL: ''
})


export const findAll = async(url: string,setDado: any, header: any) => { 
    const resposta = await api.get(url,header)
    setDado(resposta.data)
}

export const findById = async(url: string,setDado: any, header: any) => { 
    const resposta = await api.get(url,header)
    setDado(resposta.data)
}

export const post = async(url: string, dados: any, setDado: any, header: any) => { 
    const resposta = await api.post(url,dados,header)
    setDado(resposta.data)
}

export const put = async(url: string, dados: any, setDado: any, header: any) => { 
    const resposta = await api.put(url,dados,header)
    setDado(resposta.data)
}

export const deleteById = async(url: string,header: any) => { 
    await api.delete(url,header)
}