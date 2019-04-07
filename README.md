# teste-raccoon
`1` - Para clonar o repositório, execute no terminal o comando ` git clone https://github.com/felipecalogero/teste-raccoon `

`2` - Ao abrir o arquivo `index.html` aparecera 3 botões, onde:

Mostrar produtos - Mostrará todos os produtos existentes.
 
Mostrar produtos ordenados - Mostrará todos os produtos ordenados por categoria e consequentemente por seu ID em ordem crescente.

Mostrar estoque - Mostrará todos os produtos disponíveis em estoque

`3`- Já no arquivo `index.js` terá algumas funções como:

`pegarProdutos` - Pega todos os produtos da API e aceita como parametro do tipo estoque e também ordenado.

`ordenarPorCategoriaIdCrescente` - Se ordenado igual à `true`, então ele ordena por categora e conquentemente por seu ID em ordem crescente.

`montarListaDeProdutos`- Mostrará todos os produtos existentes.

`montarListaEstoque`- Mostrará a quantidade de cada categoria que tem disponível em estoque.

`consertarResultados`- Chama todas as funções dentro dele que foram utilizadas para consertar o banco de dados .JSON.

`resultados.forEach` - Passará linha por linha executando as seguintes funções:
    
    - `arrumarCaracteres` - Substitui todos os caracteres incorretos (æ, ¢, ø, ß) com o comando `replace`pelos seus respectivos caracteres (a, c, o, b).
    - `converterPreco` - Converte todos que estão na categoria preco como `string` para float com o comando `parseFloat`.
    - `arrumarQuantidade` - Pega todos que estão sem valor na categoria quantidade e informa o valor = 0






