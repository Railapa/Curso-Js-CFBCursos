const usuarios = [
    {
        user:'Bruno',
        pass:'123',
    }
]

const validarLogin = (u,p) => {
    if(u === 'Bruno'){
        return true
    } else {
        return false
    }
}


export{usuarios}
export default validarLogin