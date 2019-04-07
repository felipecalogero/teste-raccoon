jQuery(function($) {
  pegarProdutos('produtos');

  $('#pegarProdutos').click(function() {
    $('#listaEstoque').hide();
    $('#listaProdutos').fadeIn(300);
    pegarProdutos('produtos');
  });

  $('#pegarProdutosOrdenado').click(function() {
    $('#listaEstoque').hide();
    $('#listaProdutos').fadeIn(300);
    pegarProdutos('produtos', true);
  });

  $('#pegarEstoque').click(function() {
    $('#listaProdutos').hide();
    $('#listaEstoque').fadeIn(300);
    pegarProdutos('estoque');
  });

  function pegarProdutos(tipo, ordenado) {
    $.get('https://api.myjson.com/bins/17swng')
      .done(function(resultados) {
        consertarResultados(resultados);

        if (tipo == 'produtos') {
          if (ordenado) {
            ordenarPorCategoriaIdCrescente(resultados);
          }

          montarListaDeProdutos(resultados);
        } else {
          montarListaDeEstoque(resultados);
        }
      })
      .fail(function(data) {
        alert('erro');
        console.log(data);
      });
  }

  function consertarResultados(resultados) {
    resultados.forEach(function(resultado) {
      arrumarCaracteres(resultado);
      converterPreco(resultado);
      arrumarQuantidade(resultado);
    });
  }

  function arrumarCaracteres(resultado) {
    resultado.name = resultado.name
      .replace(/æ/gi, 'a')
      .replace(/¢/gi, 'c')
      .replace(/ø/gi, 'o')
      .replace(/ß/gi, 'b');
  }

  function converterPreco(resultado) {
    resultado.price = parseFloat(resultado.price);
  }

  function arrumarQuantidade(resultado) {
    if (resultado.quantity) {
      resultado.quantity = resultado.quantity;
    } else {
      resultado.quantity = 0;
    }
  }

  function montarListaDeProdutos(resultados) {
    var listaProdutos = $('#listaProdutos > tbody');
    listaProdutos.empty();

    resultados.forEach(function(resultado) {
      listaProdutos.append('<tr>');

      var ultimaLinha = listaProdutos.find('tr:last-child');
      ultimaLinha.append('<td>' + resultado.id + '</td>');
      ultimaLinha.append('<td>' + resultado.name + '</td>');
      ultimaLinha.append('<td>' + resultado.category + '</td>');
      ultimaLinha.append('<td>' + resultado.price + '</td>');
      ultimaLinha.append('<td>' + resultado.quantity + '</td>');

      listaProdutos.append('</tr>');
    });
  }

  function montarListaDeEstoque(resultados) {
    var categorias = {};
    pegarEstoque(resultados, categorias);

    var listaEstoque = $('#listaEstoque > tbody');
    listaEstoque.empty();

    for (var categoria in categorias) {
      listaEstoque.append('<tr>');
      listaEstoque.find('tr:last-child').append('<td>' + categoria + '</td>');
      listaEstoque
        .find('tr:last-child')
        .append('<td>' + categorias[categoria] + '</td>');
      listaEstoque.append('</tr>');
    }
  }

  function ordenarPorCategoriaIdCrescente(resultados) {
    resultados.sort(function(a, b) {
      return a.category.localeCompare(b.category) || a.id - b.id;
    });
  }

  function pegarEstoque(resultados, categorias) {
    resultados.forEach(function(resultado) {
      if (categorias[resultado.category] !== undefined) {
        categorias[resultado.category] += resultado.quantity;
      } else {
        categorias[resultado.category] = resultado.quantity;
      }
    });
  }
});
