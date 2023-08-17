let url = "https://economia.awesomeapi.com.br/last/USD-BRL"


function converter(){

	let input = document.getElementById("valor");
	let valor = input.value;

	fetch (url)
		.then((response)=> {

			return response.json();
		})
		.then((data)=> {
			let rate = data.USDBRL.high;
			let resultado = ` ${valor} dolares = ${rate * valor} em reais`;
			document.getElementById("resultado").innerHTML = resultado;
		})

	
	

}



			

	