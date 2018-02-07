var arr = [];

function askName() {
  for (var i = 1; i <= 150; i++) {
    var askName = prompt('Enter your name (MIN 7 MAX 150)' + ' ' + 'Item(' + i +  ')' + ' ' +  'and Enter exit show your resault');
    if (askName === 'exit' && arr.length >= 7) {
      return
    }else if (askName === 'exit' || askName === '' && arr.length !=7) {
      console.log('MIN(7) MAX(150)');
    }else {
      arr.push(askName);
    }
  }
};
askName();

for(var j = 0; j < arr.length; j++){
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';

  $('<li/>').appendTo('.peopleList').html(arr[j]).css('color', rgb);
};

$( function() {
  $( ".peopleList" ).sortable({
    revert: true
  });
  $( "#draggable" ).draggable({
    connectToSortable: ".peopleList",
    helper: "clone",
    revert: "invalid"
  });
  $( "ul, li" ).disableSelection();
} );
