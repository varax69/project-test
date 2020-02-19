jQuery(document).ready(function () {
    var n = 2500; 
    var cpt = 0; 
    var duree = 0.001;
    var delta = Math.ceil((duree * 0.001) / n);
    var node =  document.getElementById("compteur"); 
    
    function countdown() {
    node.innerHTML = ++cpt;
    if( cpt < n ) { 
        setTimeout(countdown, delta);
    }
    }
    
    setTimeout(countdown, delta);
})