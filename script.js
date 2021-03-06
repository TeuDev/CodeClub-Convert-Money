const button = document.getElementById('Convert-button')
const select = document.getElementById('currency-select')
const dolar = 5.2
const Euro = 5.9
const bitcoin = 330.122
const Clicar = () => {
    const inputReais = document.getElementById('Input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',{
        style:'currency',
        currency:'BRL',
    }).format(inputReais)
    
  if (select.value === 'US$ Dólar americano'){

    currencyValueText.innerHTML = new Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'USD',
    }).format(inputReais / dolar)
  } 
  
   if(select.value === '€ Euro'){
    currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',{
        style:'currency',
        currency:'EUR',
    }).format(inputReais / Euro)
  }

  if(select.value === 'Bitcoin') {

    currencyValueText.innerHTML = new Intl.NumberFormat('BTC',{
        style:'currency',
        currency:'BTC',
    }).format(inputReais / bitcoin)

    
  }

 
}

changeCurrency = () => {
  const currencyName = document.getElementById('currency-name')
  const currencyImg = document.getElementById('currency-img')
  if(select.value === 'US$ Dólar americano'){
    currencyName.innerHTML = "Dólar americano"
    currencyImg.src = './img/estados-unidos (1) 1.png'
  }
  
  
  if( select.value === '€ Euro'){
      currencyName.innerHTML = 'Euro'
      currencyImg.src = "./img/Euro.png"

  }

  if(select.value === 'Bitcoin'){
      currencyName.innerHTML = 'BTC'
      currencyImg.src = './img/Bitcoin.png'
  }

  Clicar ()

}

button.addEventListener('click', Clicar)
select.addEventListener('change', changeCurrency )


