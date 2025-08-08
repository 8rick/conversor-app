const BASE_URL = 'https://api.exchagerate-api.com/v4/latest';



export async function exchangeRateApi(fromCurrency){

    try{

    const response = await fetch(`${BASE_URL}/${fromCurrency}`)
    const data = await response.json()
    return data

    }catch(error){
        console.log('Error')
    }
}