# Teste Raccoon

Você é responsável por um software de gestão de estoque de produtos. Ao fazer uma
alteração no sistema, uma rotina que não foi devidamente testada acabou quebrando todo o banco de dados. Por sorte, não houve perda completa dos dados, mas eles não estão mais no formato esperado pelo sistema. Sua missão nesse projeto é recuperar os dados e deixá-los no formato adequado novamente. Além disso, você precisará criar também alguns métodos para validação das correções

## Problema 1

Todos os nomes de produto tiveram alguns caracteres modificados, houve substituição
de todos os "a" por "æ", "c" por "¢", "o" por "ø", "b" por "ß". É preciso reverter essas substituições para recuperar os nomes originais.

`O problema 1 foi resolvido utilizando a função "arrumarCaracteres"`

## Problema 2

Os preços dos produtos devem ser sempre do tipo number, mas alguns deles estão no
tipo string. É necessário transformar as strings novamente em number.

`O problema 2 foi resolvido utilizando a função "converterPreco"`

## Problema 3

Nos produtos onde a quantidade em estoque era zero, o atributo "quantity" sumiu. Ele
precisa existir em todos os produtos, mesmo naqueles em que o estoque é 0.

`O problema 3 foi resolvido utilizando a função "arrumarQuantidade"`

## Recuperação dos dados originais do banco de dados

Você deverá criar três funções para percorrer o banco de dados corrompido e corrigir os três erros descritos anteriormente:
a) Nos nomes;
b) Nos preços;
c) Nas quantidades.
Implementar e entregar as três funções separadamente para correção. Enviar também para
correção um arquivo com o banco de dados corrigido, ou seja, após passar pelas três funções.

`Esse problema foi resolvido utilizando a função "Mostrar Produtos"`

## Validação do banco de dados corrigido

Você deverá implementar funções para validar a sua recuperação do banco de dados. Todas essas funções deverão ter como input o seu banco de dados corrigido na questão 1. As funções de validação são:
a) Uma função que imprime a lista com todos os nomes dos produtos, ordenados primeiro
por categoria em ordem alfabética, depois ordenados por id em ordem crescente;
b) Uma função que calcula qual é o valor total do estoque por categoria, ou seja, a soma do valor de todos os produtos em estoque de cada categoria, considerando a
quantidade de cada produto.
Implementar e entregar as 2 funções separadamente para correção. Enviar também para
correção qual foi a saída para cada uma delas.

`Esse problema foi resolvido utilizando a função "a) Mostrar Produtos Ordenados" e "b) Mostrar Estoque"`

## Descrição do Projeto e Funções

Neste projeto foi utilizado a linguagem HTML com a biblioteca Bootstrap (CSS) para deixar o estilo dos dados retornados mais atraente, e também JavaScript com JQuery para executar as funções de uma maneira mais simples.

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
