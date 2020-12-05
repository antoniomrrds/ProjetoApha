// 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

function diaDaSemana(dia) {
    
    switch (dia) {
        case 1:{
            console.log('Final de Semana pois e Domingo')
            break;
        }
        case 2: {
            console.log('Dia Ùtil pois e Segunda')
            break;
            }
        case 3: {
            console.log('Dia Ùtil pois e Terça')
            break;
            }
        case 4: {
            console.log('Dia Ùtil pois e Quarta')
            break;
            }
        case 5: {
            console.log('Dia Ùtil pois e Quinta')
            break;
            }
        case 6: {
            console.log('Dia Ùtil pois e Sexta')
            break;
            }
        case 7: {
            console.log('Final de Semana pois e Sábado')
            break;
        }
        default:
            console.log('Dia inválido')
    }
    
}

diaDaSemana(5)