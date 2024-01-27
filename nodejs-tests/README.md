Problema:

Os CLIENTES precisam realizar AGENDAMENTOS
So que eles nao conseguem saber os HORARIOS disponiveis


## entities

Criação da pasta entities
Foi criado um appointment/agendamento
instalação das dependencias do "VITEST"


## regra de negocios entities
Teste: 'create an appointment'

1 - Este teste cria uma instância da classe Appointment com um cliente chamado 'John Doe', uma data de início (startsAt) e uma data de término (endsAt) que é um dia depois da data de início.
Em seguida, ele verifica se a instância criada é uma instância válida da classe Appointment.
Também verifica se o atributo customer da instância é igual a 'John Doe'.
Teste: 'Cannot create an appointment with end date before start date'

2 - Este teste tenta criar uma instância da classe Appointment com uma data de término (endsAt) que é um dia antes da data de início (startsAt).
Não é feita a espera de exceção (o que seria necessário para testes assíncronos).
Este teste poderia ser melhorado para incluir a verificação de que uma exceção é lançada quando a condição inválida é atendida.

## regra de negocios use-cases


## test/utils - get-future-date
Criação da Data Atual:

Obtém o ano atual usando new Date().getFullYear().
Chamada da Função getFutureDate:

Chama a função getFutureDate com uma data específica (${year}-01-26) como entrada.
A função getFutureDate é esperada para retornar uma data futura com base na entrada.

Verificação do Ano:

Utiliza o expect para verificar se o ano da data retornada pela função getFutureDate é igual a 2025.
Portanto, este teste está validando se a função getFutureDate está aumentando corretamente o ano da data de entrada em 1 ano.