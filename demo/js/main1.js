$(document).ready(function(){

  var current_bid;
  var fake_bid;
  var placed_bid;
  var num_bids = 14;
  var product;
  const items=[
		{
			"id":17,"name":"Product Name_1","src":"img/p1.png","current_bid":2500, "price":5540,"avg_bid":453
		},
		{
			"id":2,"name":"Product Name_2","src":"img/p1.png","current_bid":4500, "price":5540,"avg_bid":2453
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
		},
		{
			"id":3,"name":'Product Name_16',"src":"img/f-p-7.jpg","current_bid":2500, "price":5322,"avg_bid":453
		},
		{
			"id":1,
			"name":'Product Name_17',
			"src":"img/f-p-8.jpg",
			"current_bid":2500,
			"price":5322,"avg_bid":453
		},
	];

  var queryString = new Array();
  var position;
  getPosition();

  $('.p_icon > a').click(function(){
    $(this).addClass('bg');
  });

  $('.f_p_img').mouseenter(function(event) {

    $('.c-bid > .bid').addClass('b-pulse');

   }).mouseleave(function() {

     $('.c-bid p').removeClass('b-pulse');

   });

//direct
  function direct(p){

    var url = "single-product.html?position="+encodeURIComponent(p)+ "&section=" + encodeURIComponent("product");
            window.location.href = url;

  }


//click
  // $(".f_p_img").on("click","img",function(){
  //
  //   var position = $(this).data("position");
  //   direct(position);
  //  // console.log(position);
  //
  // });


  //  $('.countTime').countTo('stop start,toggle,restart')

    function getPosition(){

        $(function () {
            if (queryString.length == 0) {
                if (window.location.search.split('?').length > 1) {
                    var params = window.location.search.split('?')[1].split('&');
                    for (var i = 0; i < params.length; i++) {
                        var key = params[i].split('=')[0];
                        var value = decodeURIComponent(params[i].split('=')[1]);
                        queryString[key] = value;
                    }
                }
            }


            console.log();

            if(queryString["section"] == "product"){

                position = queryString["position"];
                display_pro(position);

            }else if(queryString["section"] == "lastest"){

                position = queryString["position"];
                display_pro(position);
            }else if (queryString["section"] == "undefined" || queryString["section"] == null ) {

              display_pro(13);

            }
        });
  }

    function display_pro(position){

     // console.log(all_prod[position]);


      product = items[position];
      current_bid = product.current_bid;

      console.log(items[position]);


      $(".s_product_text h3").html(product.name);
      //$(".s_product_text h2").html("$"+product.current_bid);
      $("#cur-bid span").html("$"+product.current_bid);
      $("#avg-bid span").html("$"+product.starting_bid);
      $("#cur_bid").html(current_bid);


      //counterup
      //bidCounter();


      var pd = '';
      pd +='<img class="product-big-img" src="'+product.src+'" alt="">';

      $("#displayed").html(pd);

      $('.product-pic-zoom').zoom();

    }//end display







});//end document
