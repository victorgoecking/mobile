$(function(){
	$(document).on('click','#dolar',function(){
		$.ajax({
			type: "GET",
			url: "http://www.freecurrencyconverterapi.com/api/v2/convert?q=USD_BRL",
			success: function(data) {
				window.plugin.notification.local.add({ message: 'A cotação do dólar está a ' + data.results.USD_BRL.val + ' reais' });
	        },
	        dataType: "jsonp",
	        error: function(jqXHR) {
	        	if(404 == jqXHR.status){
	        		window.plugin.notification.local.add({ message: 'Você precisa se conectar a internet' });
	        	}
	        	else{
	        		window.plugin.notification.local.add({ message: 'Erro: ' + jqXHR.status });
	        	}
	        },
		})
	});
});