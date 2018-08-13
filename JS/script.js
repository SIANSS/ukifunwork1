SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});


$(document).ready(function(){
  SC.stream('/tracks/39833275',function(sound){ //1
    $('#start1').click(function(e){
      e.preventDefault();
      sound.start();
    });
    $('#stop1').click(function(e){
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/181357572',function(sound){ //2
    $('#start2').click(function(e){
      e.preventDefault();
      sound.start();
    });
    $('#stop2').click(function(e){
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/111252207',function(sound){ //3
    $('#start3').click(function(e){
      e.preventDefault();
      sound.start();
    });
    $('#stop3').click(function(e){
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/35853510',function(sound){ //4
    $('#start4').click(function(e){
      e.preventDefault();
      sound.start();
    });
    $('#stop4').click(function(e){
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/104862696',function(sound){ //5
    $('#start5').click(function(e){
      e.preventDefault();
      sound.start();
    });
    $('#stop5').click(function(e){
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/126266039',function(sound){ //6
    $('#start6').click(function(e){
      e.preventDefault();
      sound.start();
    });
    $('#stop6').click(function(e){
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/36170652',function(sound){ //7
    $('#start7').click(function(e){
      e.preventDefault();
      sound.start();
    });
    $('#stop7').click(function(e){
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/231429281',function(sound){ //8
    $('#start8').click(function(e){
      e.preventDefault();
      sound.start();
    });
    $('#stop8').click(function(e){
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/195041219',function(sound){ //9
    $('#start9').click(function(e){
      e.preventDefault();
      sound.start();
    });
    $('#stop9').click(function(e){
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/115897977',function(sound){ //10
    $('#start10').click(function(e){
      e.preventDefault();
      sound.start();
    });
    $('#stop10').click(function(e){
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/273480220',function(sound){
    $('#start11').click(function(e){
      e.preventDefault();
      sound.start();
    });
    $('#stop11').click(function(e){
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/6818672',function(sound){
    $('#start12').click(function(e){
      e.preventDefault();
      sound.start();
    });
    $('#stop12').click(function(e){
      e.preventDefault();
      sound.stop();
    });
  });
});
