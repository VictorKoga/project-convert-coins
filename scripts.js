// criando o javascript e ligando ele ao DOM 

// Cotação de moedas do dia sempre quando for uma moeda recomenda-se utilizar letras  MAIUSCULAS
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// Obtendo o formulário para manipular os eventos
const form = document.querySelector("form");
const amount = document.getElementById("amount")
const footer = document.querySelector("main footer") // aqui ele seleciona o main e o footer dentro
const description = document.getElementById("description") // selecionando a span no footer com id description
const result = document.getElementById("result")
// Manipulando o input amount para receber somente numeros quando entrar conteudo aqui executa a função
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g // dessa maneira so aceita numeros no campo nao aceita letras
  amount.value = amount.value.replace(hasCharactersRegex, "") // tras o valor somente de numeros
})
// Obtendo a moeda selecionada
// as constantes posso criar todas no topo estou criando aqui para saber o que cada funcao esta fazendo
const currencySelect = document.getElementById("currency") 
// Capturando o evento de submit(enviar) do formulario 
form.onsubmit = (event) => {// anotacao de arrow function
  event.preventDefault(); // desativa para nao recarregar a tela F5
  // utilizado o switch para pegar a informação de qual o tipo da moda caso for DOLAR ela ja para no break e tras o resultado
  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")      
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break;
    // caso não seja nenhuma das opções acima, nada acontece  
    default:
      break;
    }
} 
// Função para converter a moeda
// Foi declarado as constantes de valores no topo para saber os valores assim se alterar os valores basta alterar os valores que tem nas const que altera no codigo todo
function convertCurrency(amount, price, symbol) {
  //
  try {
    // utilizando `` interpolarização de string para fazer a combinação de conteudo de variaveis e texto
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)} `

    // Calcular o total, converte primeiro pra string pra depois passar o replace
    // let total = String(amount * price).replace(".", ",") // replace substitui onde tem . por ,

    // Outra maneira de converter e mudar o ponto por virgula
    let total = amount * price
    // verifica se o resultado não é um numero
    if(isNaN(total)){
      return alert("Por favor digite o valor corretamente para converter")
    }
    // formatar o valor total para exibir ele 
    total = formatCurrencyBRL(total).replace("R$", "")

    // Exibir o resultado total
    result.textContent = `${total} Reais` 

    // Aplica a classe que exibe o footer para mostrar o resultado
    footer.classList.add("show-result")
  } catch (error) { // aqui é pra exibir a mensagem de erro 
    // remove a classe removendo ele da tela
    footer.classList.remove("show-result")
    console.error(error)
    alert("Ocorreu um erro ao converter a moeda. Tente novamenmte mais tarde")    
  }
}
// Criar função de formatação de moeda para REAL BRASILEIRO
function formatCurrencyBRL(value) {
  // utilizando o toLocaleString para converter para moeda brasileira ela retorna o valor formatado
  return Number(value).toLocaleString("pt-BR" ,{// precisa utilizar o Number para utilziar o toLocaleString
    style: "currency",
    currency: "BRL"})
}



