# Teste Raccoon

1 - Para clonar o repositório, execute no terminal o comando `git clone https://github.com/felipecalogero/teste-raccoon`

2 - Ao abrir o arquivo `index.html` aparecera 3 botões, onde:

- `Mostrar Produtos` - Mostrará todos os produtos existentes.

- `Mostrar Produtos Ordenados` - Mostrará todos os produtos ordenados por categoria e consequentemente por seu ID em ordem crescente.

- `Mostrar Estoque` - Mostrará todos os produtos disponíveis em estoque

3 - Já no arquivo `index.js` terá algumas funções como:

- `pegarProdutos` - Pegar todos os produtos da API e aceitar como parametro tipo (produtos ou estoque) e também ordenado (true ou false).

- `ordenarPorCategoriaIdCrescente` - Se o parametros ordenado em `pegarProdutos` for igual a `true`, então ele ira chamar `ordenarPorCategoriaIdCrescente` e retornar os produtos ordenados por categoria e ID em ordem crescente.

- `montarListaDeProdutos`- Mostrará no HTML todos os produtos existentes.

- `montarListaEstoque`- Mostrará no HTML os produtos disponíveis em estoque com suas respectivas categorias.

- `consertarResultados`- Chama todas as funções para consertar os dados do banco de dados (JSON).

- `arrumarCaracteres` - Substitui todos os caracteres incorretos (æ, ¢, ø, ß) com o comando `replace` pelos seus respectivos caracteres (a, c, o, b).

- `converterPreco` - Converte os precos de `string` para `float` com o comando `parseFloat`.

- `arrumarQuantidade` - Se o produto nao possui quantidade, a funcao cria o atributo ja com o valor setado como 0
