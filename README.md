# Calculadora de Média de Venda

Aplicação web simples para acompanhar o progresso de uma meta mensal de vendas. Informe o valor já realizado, a meta do mês e quantos dias de folga ainda restam para consultar o percentual atingido e a média diária necessária para chegar à meta.

## Funcionalidades

- Calcula o percentual da meta já alcançado.
- Estima a média diária necessária para completar a meta até o fim do mês.
- Exibe um calendário mensal com destaque para o dia atual e os fins de semana.
- Permite navegar entre os meses pelo calendário.
- Adapta a interface para telas menores.

## Como usar

1. Abra o arquivo `index.html` em um navegador.
2. Preencha o valor realizado, a meta do mês e os dias de folga restantes.
3. Selecione **Calcular média** para ver a projeção.
4. Use as setas do calendário para consultar outros meses.

Não é necessário instalar dependências nem iniciar um servidor.

## Cálculo

O percentual é calculado dividindo o valor realizado pela meta e multiplicando por 100. A média diária considera o valor que falta para atingir a meta dividido pelos dias restantes no mês, descontando o dia atual e as folgas informadas. Se o valor realizado já atingiu a meta, a média exibida não fica abaixo de zero.

## Arquivos

- `index.html`: estrutura da página e campos da calculadora.
- `style.css`: estilos e ajustes responsivos.
- `script.js`: cálculos da projeção e renderização do calendário.
