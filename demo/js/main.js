;(function () {

	'use strict';

	const items=[

		{
			"id":1,
			"name":'Product Name_17',
			"src":"img/p7.png",
			"current_bid":2500,
			"price":5322,"avg_bid":453
		},
		{
			"id":17,"name":"Product Name_1","src":"img/f-p-1.jpg","current_bid":2500, "price":5540,"avg_bid":453
		},
		{
			"id":2,"name":"Product Name_2","src":"img/p1.png","current_bid":4500, "price":5540,"avg_bid":2453
		},
		{
			"id":3,"name":'Product Name_16',"src":"img/f-p-7.jpg","current_bid":2500, "price":5322,"avg_bid":453
		},
		{
			"id":16,"name":'Product Name_3',"src":"img/p3.png","current_bid":4500, "price":5540,"avg_bid":4530
		},
		{
			"id":4,"name":'Product Name_4',"src":"img/p4.png","current_bid":500, "price":5540,"avg_bid":453
		},
		{
			"id":15,"name":'Product Name_5',"src":"img/p5.png","current_bid":4500, "price":4321,"avg_bid":2453
		},
		{
			"id":6,"name":'Product Name_6',"src":"img/p6.png","current_bid":4900, "price":4321,"avg_bid":3453
		},
		{
			"id":7,"name":'Product Name_7',"src":"img/p7.png","current_bid":6500, "price":6711,"avg_bid":1453
		},
		{
			id:8,"name":'Product Name_8',"src":"img/p8.png","current_bid":5100, "price":6711,"avg_bid":200
		},
		{
			"id":9,"name":'Product Name_9',"src":"img/p9.png","current_bid":1500, "price":6711,"avg_bid":1453
		},
		{
			"id":10,"name":'Product Name_10',"src":"img/p10.png","current_bid":4700, "price":5322,"avg_bid":1500
		},
		{
			"id":11,"name":'Product Name_11',"src":"img/p11.png","current_bid":4400, "price":5322,"avg_bid":1453
		},
		{
			"id":12,"name":'Product Name_12',"src":"img/p12.png","current_bid":3500, "price":5322,"avg_bid":2453
		},
		{
			"id":13,"name":'Product Name_13',"src":"img/p13.png","current_bid":2500, "price":5322,"avg_bid":2453
		},
		{
			"id":14,"name":'Product Name_14',"src":"img/f-p-1.jpg","current_bid":2500, "price":5322,"avg_bid":10
		},
		{
			"id":5,"name":'Product Name_15',"src":"img/f-p-6.jpg","current_bid":1500, "price":5322,"avg_bid":100
		}
	];



	//===Toast====
	//watch items
	const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 4453,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });

  //button
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn-bidc',
      cancelButton: 'btn-bid'
    },
    buttonsStyling: false
  });


  // Animations
	var contentWayPoint = function() {

		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});

				}, 100);

			}

		} , { offset: '85%' } );
	};



  $('.c-bid').on('click',function(){

    Toast.fire({
      icon: 'success',
      title: 'Signed in successfully'
    });


  });
    //counter
		//========icon clicks=======
	// $('.p_icon > a').click(function(){
  //   $(this).addClass('bg');
  // });

	function product_slider(){


    var owl = $('.feature_p_slider').owlCarousel({
             loop:true,
             margin: 30,
             items: 4,
             nav: true,
             autoplay: true,
             smartSpeed: 1500,
             dots:true,
              //				navContainer: '.testimonials_area',
              //                navText: ['<i class="lnr lnr-arrow-up"></i>','<i class="lnr lnr-arrow-down"></i>'],
             responsiveClass: true,
             responsive: {
                 0: {
                     items: 1,
                 },
                 360: {
                     items: 2,
                 },
                 576: {
                     items: 3,
                 },
                 768: {
                     items: 4,
                 },
             }
         });

     $.each(items, function(key, obj){

       owl.trigger('add.owl.carousel', [
          jQuery(
						'<div class="item animate-box" data-position="'+key+'" data-animate-effect="fadeInLeft"><div class="f_p_item" data-position="'+key+'"><div class="f_p_img" data-position="'+key+'"><img class="img-fluid" data-position="'+key+'" src="'+obj.src+'"><div class="p_icon" data-position="'+key+'" ><div class="f_icon f_eye" id="eye"><i class="fa fa-eye" data-toggle="tooltip" title="Watch Item"></i></div><div class="f_icon f_hrt" id="hrt"><i class="lnr lnr-heart"></i></div><div class="f_icon f_arrow" id="arrow" data-position="'+key+'" data-toggle="tooltip" title="bid up by $50"><i class="fa fa-arrow-circle-up"   data-position="'+key+'"></i></div></div><div class="c-bid"><p class="bid animate__animated"><span class="countert">$'+obj.current_bid+'</span></p></div></div><div><a href="#"><h4 id="p_name">'+obj.name+'</h4></a><h5>$'+obj.price+'</h5><div><div class="panel"><p><i class="fa fa-clock-o" > '+key+' hrs ago</i><p><i class="fa fa-gavel"></i><p>'+key+'0 bids</p></div></div></div>'
				)
       ]);

     });//end foreach

		 //==attach listener=====

		 $('.f_eye').click(function(){

	     $(this).addClass('bg');
	 			Toast.fire({
	 	      icon: 'success',
	 	      title: 'You Can Now Watch This Bid'
	 	    });
	   });

	 	$('.f_hrt').click( function(){
	 		$(this).addClass('bg');
	 			Toast.fire({
	 	      icon: 'success',
	 	      title: 'Item Has Been Favourited'
	 	    });
	 	});

	 	$('.f_arrow').click(function(){
	 		 $(this).addClass('bg');

			var position = $(this).data('position');

			showModal(position);

	 	});

			$('#arrow').click(function(){
 	 		// $(this).addClass('bg');

 			var position = $(this).data('position');

 			showModal(position);

 	 	});

		$(".f_p_img img").click(function(){
	    var position = $(this).data("position");
	    direct(position);
	   // console.log(position);

	  });

		 //====trigger
      owl.trigger('refresh.owl.carousel');

   }//end product slider

	 function showModal(position){

		 console.log(position);

		 var modalItem= items[position];

		 console.log(modalItem);

		 var name = items[position].name;
		 var cur_bid = items[position].current_bid;
		 var num =position+10;
		 var avg = items[position].avg_bid;
		 var src = items[position].src;
		 //set atribute
		 //$('#m-img').attr('src', src );
		 $('#m-item').html(name);
		 $('#m-c-bid').html(cur_bid);
		 $('#m-b-num').html(num);
		 $('#m-b-avg').html(avg);

		 var pd = '';
		 pd +='<img class="product-big-img-moda" src="'+src+'" alt="">';

		 $("#displayed").html(pd);

		 $('.product-pic-zoom').zoom();

		 // $('.mimgbg').css({
		 // 	"background-image":"url("+src+")",
		 // 	"background-position":"center",
		 // 	"background-repeat":"no-repeat",
		 // 	"background-size":"cover",
		 // });


			$('#alertModal').modal('show');

	 }


	function direct(p){

    var url = "single-product.html?position="+encodeURIComponent(p)+ "&section=" + encodeURIComponent("product");
            window.location.href = url;

  }




  // Document on load.
	$(function(){

		product_slider();
		contentWayPoint();

	});


}());
