import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moeda',
  standalone: true
})
export class MoedaPipe implements PipeTransform {

  transform(valor: number | undefined): string {
    //Verificar se valor é undefined
    if(!valor) {
      return "";
    }
    //Transformar para decimal (2 casas)
    const valorDecimal = valor.toFixed(2);
    //Alterar para `,` para tornar número BR
    const valorDecimalBr = valorDecimal.replace('.', ',');
    //Adicionar o `R$ `
    const valorMoeda = `R$ ${valorDecimalBr}`;
    return valorMoeda;
  }

}
