var url = "http://localhost:3300/api/digimons";

function postWmon(){

 console.log(url);
 
 var myName = $('#name').val();
 var myNivel = $('#nivel').val();
 var myTipo = $('#tipo').val();
 var myColor = $('#color').val();
 var myFoto = $('#foto').val();

 var mydigimon = {
  name: myName,
  nivel: myNivel,
  tipo: myTipo,
  color: myColor,
  foto: myFoto
  };
 console.log(mydigimon);

 $.ajax({
   url: url,
   type: 'post',
   dataType:'json',
   contentType: 'application/json',
   success: function (data) {
    console.log(data)
     $('#resultado').html(JSON.stringify(data.digimons));
      },
     data: JSON.stringify(mydigimon)
    });
}

function getBWGmon(){
  console.log(url);
  
  $.getJSON(url,
    function(json) {
     console.log(json);

     var arrDigimon = json.digimons;
     
     var htmlTableDigimons = '<table border=1>';

     arrDigimon.forEach(function(item) {
      console.log(item);
       htmlTableDigimons += '<tr>' +
		     '<td>' + item.id + '</td>' +
		     '<td>' + item.name + '</td>' +
		     '<td>' + item.nivel + '</td>' +
		     '<td>' + item.tipo + '</td>' +
		     '<td>' + item.color + '</td>' +
		     '<td>' + '<img src=' + item.foto+ '>' + '</td>' +
		    '</tr>';
     });
    htmlTableDigimons += '</table>';
    $('#resultado').html(htmlTableDigimons);
   }
  );
}
