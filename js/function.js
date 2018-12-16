   //Función para el slider inicial
$(document).ready(function(){
    
    //Para automatizar la paginacion segun se añadan o quiten imagenes del slider, cuenta cuantos elementos li tenemos
    var imgItems = $('.slider li').length;
    //console.log(imgItems);
    var imgPos = 1;
    
    //Creamos un ciclo para que añada los items segun las imagenes
    
    for(i = 1; i <= imgItems; i++){
        
        //Aparece el punto con la funcion append
        $('.pagination').append('<li><span class="fa fa-circle"></span></li>');
    }

    //Ocultar todas las imagenes del slider
    $('.slider li').hide();
    //Mostrar la primera imagen del slider
    $('.slider li:first').show();
    //Llamamos al punto de la paginacion, para asignarle un color a cada punto, según la imagen que esté en el slider
    $('.pagination li:first').css({'color': 'darkorange'});
    
    //--------------------------------------------------------------------
    
    //Funcionamiento de los puntos, a hacer click que se cambie la imagen
    //Ejecutamos las funciones
    
    $('.pagination li').click(pagination);
    $('.right span').click(nextSlider);
    $('.left span').click(prevSlider);
    
    //Automatizar el paso de las imagenes
    
    setInterval(function(){
        nextSlider();
    }, 3000);
    
    //FUNCIONES-----------------------------------------------------------
    
    function pagination(){
        
        //Con esto se consigue el número o la posicion del elemento que hemos dado click, le sumamos 1 para que no empiece de 0
        var paginationPos = $(this).index() + 1;
        //console.log(paginationPos);
        
        $('.slider li').hide(); //Ocultar todos los slides
        $('.slider li:nth-child('+ paginationPos +')').fadeIn(); //Mostrar el slide seleccionado
        
        //Dandole estilo a la paginacion seleccionada
        $('.pagination li').css({'color': '#fff'});
        $(this).css({'color': 'darkorange'});
        
        imgPos = paginationPos;
    }
    
    function nextSlider(){
        if(imgPos >= imgItems){
            imgPos = 1;
        } else {
            imgPos++;
        }
        
        $('.pagination li').css({'color': '#fff'});
        $('.pagination li:nth-child(' + imgPos +')').css({'color': 'darkorange'});
        //imgPost++;
        //console.log(imgPos);
        
        $('.slider li').hide(); //Ocultar todos los slides
        $('.slider li:nth-child('+ imgPos +')').fadeIn(); //Mostrar el slide seleccionado
    }
    
     function prevSlider(){
        if(imgPos <= 1){
            imgPos = imgItems;
        } else {
            imgPos--;
        }
        
        $('.pagination li').css({'color': '#fff'});
        $('.pagination li:nth-child(' + imgPos +')').css({'color': 'darkorange'});
        //imgPost++;
        //console.log(imgPos);
        
        $('.slider li').hide(); //Ocultar todos los slides
        $('.slider li:nth-child('+ imgPos +')').fadeIn(); //Mostrar el slide seleccionado
    }
});
