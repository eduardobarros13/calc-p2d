function calculo()
		{
//passando os valores do campo do form para as variaveis

tarifa = parseFloat(document.meu_form.tarifa.value);
taxaEmbarque = parseFloat(document.meu_form.taxaEmbarque.value);
soma1step = eval(tarifa + taxaEmbarque); //fazendo a soma

document.meu_form.valor_total.value = soma1step;


//fazendo o segundo passo

taxaP2D = (0.10);
soma2step = (soma1step + (soma1step * taxaP2D));
document.meu_form.valor_total2.value = soma2step;

//fazendo segundo passo

soma3step = ((soma2step - taxaEmbarque)*0.05);
document.meu_form.valor_total3.value = soma3step;


//no evento do onblur para que nao apareça 'undefined'
//eu faço a seguinte condição
//se a soma for diferente de undefined ele mostra no valor total



}