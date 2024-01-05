import React from 'react'

const Payment = (props) => {

  const pay = () => {
    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
    const paymentData = {
      "api_username": "e36eb40f5ec87fa2", // headerites juba on kasutajanimi, aga turvakaalutlustel pean siin kordama
      "account_name": "EUR3D1", // konto kuhu raha läheb. Apollo: kino, raamatud, blender, e-pood, ...
      "amount": props.sum, // summa
      "order_reference": Math.random()*999999, // tellimuse number
      "nonce": "a9b7ff" + Math.random()*999999 + new Date(), // turvakaalutlustel iga kord erinev numbrite-tähtede kombinatsioon
      "timestamp": new Date(), // turvakaalutlustel praegune kellaaeg +/- 5min
      "customer_url": "https://mihkel-webshop-react-12-2023.web.app" // aadress, kuhu tagasi suunata
    }
    const paymentHeaders = {
      "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA==",
      "Content-Type": "application/json"
    }

    fetch(url, {"method": "POST", "body": JSON.stringify(paymentData), "headers": paymentHeaders})
      .then(res => res.json())
      .then(json => window.location.href = json.payment_link)
  }

  return (
    <button onClick={pay}>Maksma</button>
  )
}

export default Payment