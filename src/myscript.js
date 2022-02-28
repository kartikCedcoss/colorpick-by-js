
    var color = ['#222f3e','#f368e0','#ee5253','#0abde3','#10ac84'];
    
   
    
    function changecolor(){
        for(  let i = 0; i< color.length ; ++i){
            document.querySelector('body').style.background = color[i];
      }
    }