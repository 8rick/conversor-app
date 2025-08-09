```markdown
# 💱 Conversor de Moedas - React Native

Um aplicativo móvel simples e intuitivo para conversão de valores entre diferentes moedas em tempo real, feito com **React Native**. Utiliza a **ExchangeRate API** para buscar as taxas de câmbio atualizadas.

---

## 🚀 Funcionalidades

- 🔄 Conversão de valores entre múltiplas moedas.
- 🔁 Troca rápida entre as moedas de origem e destino.
- 📱 Interface responsiva e amigável, com suporte a teclado evitando sobreposição.
- ⏳ Indicador de carregamento durante a busca dos dados.
- 🎯 Botões para seleção visual das moedas com feedback de seleção.
- 🧮 Cálculo automático do valor convertido baseado na taxa de câmbio atual.

---

## 🛠️ Tecnologias Utilizadas

- **React Native** — framework para desenvolvimento mobile multiplataforma.  
- **JavaScript (ES6+)** — linguagem principal do app.  
- **ExchangeRate API** — fonte das taxas de câmbio.  
- **Expo** — para facilitar desenvolvimento e testes no ambiente mobile.

---

## 📁 Estrutura do Projeto

```

/src
/components
/button
\- index.js
\- style.js
/input
\- index.js
\- style.js
/constants
\- currencies.js
/services
\- api.js
/styles
\- colors.js
/utils
\- convertCurrency.js
/resultCard
\- index.js
\- style.js
app.js
app.style.js

````

- **components**: Componentes reutilizáveis divididos entre lógica (`index.js`) e estilo (`style.js`).  
- **constants**: Lista de moedas e outros valores fixos.  
- **services**: Comunicação com a API externa.  
- **utils**: Funções auxiliares como conversão.  
- **styles**: Cores e temas globais.  
- **resultCard**: Exibição do resultado da conversão.

---

## ▶️ Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/conversor-moedas.git
````

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o app com Expo:

   ```bash
   npm start
   ```

4. Abra no seu dispositivo (Android/iOS) usando o app **Expo Go**, ou emulador.

---

## 💡 Uso

* Selecione a moeda **de origem** e **destino** clicando nos botões.
* Digite o valor que deseja converter.
* Pressione o botão **Converter** para obter o valor convertido.
* Use o botão de troca (↑↓) para inverter rapidamente as moedas selecionadas.

---

## 📋 Código Exemplo (App.js)

```javascript
const [amount, setAmount] = useState('');
const [fromCurrency, setFromCurrency] = useState('USD');
const [toCurrency, setToCurrency] = useState('BRL');
const [result, setResult] = useState('');
const [loading, setLoading] = useState(false);

async function fetchExchangeRate() {
  try {
    setLoading(true);
    if (!amount) return;

    const data = await exchangeRateApi(fromCurrency);
    const rate = data.rates[toCurrency];
    const convertedAmount = convertCurrency(amount, rate);
    setResult(convertedAmount);
  } catch (error) {
    alert('Erro, tente novamente');
  } finally {
    setLoading(false);
  }
}
```

---

## 🌐 API Utilizada

* [ExchangeRate API](https://exchangerate-api.com/)
  *Você precisará criar uma conta e obter uma chave de API para uso.*

---

## 🚧 Melhorias Futuras

* 📜 Histórico de conversões.
* 📶 Suporte offline com dados armazenados.
* 📈 Gráficos de variação cambial.
* ➕ Suporte a mais moedas e personalização do app.
* ✅ Testes automatizados.

---

## 📄 Licença

MIT License - sinta-se à vontade para usar, modificar e distribuir.

---

## 🤝 Contato

Se quiser contribuir, tirar dúvidas ou reportar bugs, abra uma issue ou envie um pull request!

---

✨ Obrigado por visitar o projeto! ✨

```

---

Se quiser, posso ajudar também com badges ou GIFs de demo para deixar mais interativo! Quer que eu faça?
```
