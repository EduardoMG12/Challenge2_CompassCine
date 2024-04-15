export function placeGenerator(capacidade: number): Array<string>{
	const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

	const lugares = [];
	const totalElements = capacidade; 
	let count = 0; 
	let contadorLetras = 0;
    
	const inicio = 1;  // Inicia com 1 para a letra 'A'


	for(let i=0; i<capacidade;i++){
		lugares.push(alphabet[contadorLetras] + i);
		count++;
		if(count>9){
			count = 0;
			contadorLetras++;
		}
	}
	return lugares;
}