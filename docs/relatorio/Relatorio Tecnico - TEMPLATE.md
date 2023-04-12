# Informações do Projeto
## Nome do Projeto  

         CHICKCOUNT

## Curso 

         CIÊNCIAS DA COMPUTAÇÃO 

## Participantes

    Integrantes:
    - Ana Carolina Couto Machado 
    - Arthur Oliveira Santos 
    - Davi Oliveira Sad
    - Filipe Castro Barbosa Ladeia
    - Matheus Fagundes Araujo
    - Pedro Henrique Magno Gonçalves

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas, Empatia e Proposta de Valor](#personas-empatia-e-proposta-de-valor)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

 No Brasil 1 em 4 startups acabam oferecendo algum fruto futuro, enquanto as demais acabam ruindo devido a uma má gestão o que impacta em um baixo aproveitamento das mesmas, portanto este trabalho tem como objetivo auxiliar futuras possíveis empresas, bem como as já existentes.

 Paralelo a era digital e o contexto da pandemia, muitas empresas acabam fechando suas portas por não conseguirem se manter no mercado devido a inúmeros fatores como a gestão de tempo, gestão de pessoas, a parte financeira dentre muitos outros que foram responsáveis por culminar em uma queda nas vendas e finalmente no fechamento das empresas. Tendo este cenário de ampla ruína é percetível que algo pode ser feito para facilitar e ajudar na administração das tarefas que são responsáveis por gerar uma queda financeira.

 Perante isso, torna-se fundamental que existam meios de resolver algumas senão todas as problemáticas que uma empresa apresenta. Assim, o foco desta pesquisa está relacionado com um dos hospitais da rede HAPVIDA que tem problemas na gestão de funcionários com  foco no sistema de headcount.

## Problema

......  COLOQUE AQUI O SEU TEXTO ......

 Conforme exposto, o problema que se busca resolver com este projeto é a dificuldade que as empresas têm de fazerem uma gestão adequada de pessoas durante o período de trabalho de seus funcionários. O setor escolhido de trabalho foi hospitais que tem uma grande dificuldade em saber a quantidade de enfermeiros e técnicos de enfermagem necessários para atender as demandas diárias do estabelecimento (headcount).
 

> **Links Úteis**:
> - [Objetivos, Problema de pesquisa e Justificativa](https://medium.com/@versioparole/objetivos-problema-de-pesquisa-e-justificativa-c98c8233b9c3)
> - [Matriz Certezas, Suposições e Dúvidas](https://medium.com/educa%C3%A7%C3%A3o-fora-da-caixa/matriz-certezas-suposi%C3%A7%C3%B5es-e-d%C3%BAvidas-fa2263633655)
> - [Brainstorming](https://www.euax.com.br/2018/09/brainstorming/)

## Objetivos

 O objetivo geral deste trabalho é criar um aplicativo de gestão de pessoas e horários que apresentem cálculos matemáticos para informar ao gestor a quantidade de enfermeiros e técnicos de enfermagem necessários, bem como o gasto total com seus salários.

 Como objetivos específicos, podemos ressaltar:
>
>- Fornecer um banco de dados que será preenchido pelo gestor para que seja organizado os horários.
>- Fornecer a quantidade ideal de funcionários que atenderam a demanda do estabelecimento baseado em cálculos matemáticos.
>- Um campo individual para cada funcionário ver seu horário e destino no trabalho.
>
> **Links Úteis**:
> - [Objetivo geral e objetivo específico: como fazer e quais verbos utilizar](https://blog.mettzer.com/diferenca-entre-objetivo-geral-e-objetivo-especifico/)

## Justificativa

 Devido ao interesse do grupo em relação ao funcionamento de uma empresa a partir dos funcionários até os maiores cargos, surgiu-se a ideia de abordar tal temática para sanar as dúvidas existentes.
 
 Mutuamente, grande parte dos integrantes do grupo tem algum tipo de relação direta, seja ela familiar ou por amizades, sobre algum tipo de empresa, mas um conhecimento básico sobre as mesmas.
 
 Portanto a área de interesse escolhida pelo grupo foi a saúde, devido ao baixo leque de conhecimento acerca da área e pela oportunidade de aprender e adquirir novas habilidades com este projeto.
 

> **Links Úteis**:
> - [Como montar a justificativa](https://guiadamonografia.com.br/como-montar-justificativa-do-tcc/)

## Público-Alvo


 Embora grande parte dos enfermeiros irão se beneficiar com a implantação da aplicação, o foco deste trabalho é ajudar na gestão de pessoas do hospital, que como exposto acima não é eficiente e apresenta uma grande dor no setor hospitalar mapeado pelas entrevistas feitas pelo grupo.

 Desta forma, estabeleceu-se como público-alvo desta solução os homens e as mulheres entre 40 e 50 que gerenciam hospitais, tendo frequentemente problemas de contratação e alocação de enfermeiros.
 
> **Links Úteis**:
> - [Público-alvo: o que é, tipos, como definir seu público e exemplos](https://klickpages.com.br/blog/publico-alvo-o-que-e/)
> - [Qual a diferença entre público-alvo e persona?](https://rockcontent.com/blog/diferenca-publico-alvo-e-persona/)
 
# Especificações do Projeto

 A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feito pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.
 
 
## Personas, Empatia e Proposta de Valor


> As personas levantadas durante o processo de entendimento do problema são apresentadas nas Figuras que se seguem.
> 
> Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina
> e/ou nos seguintes links:
>
> **Links Úteis**:
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Como fazer um mapa de empatia - Vídeo](https://www.youtube.com/watch?v=JlKHGpVoA2Y)
> - [Canvas da Proposta de Valor](https://analistamodelosdenegocios.com.br/canvas-da-proposta-de-valor/)
> 
>.                     
>
> # ** PERSONA 1 **
>                           
> ![Persona 1](images/1.png)
> 
> ![Persona 1 resto](images/22.png)
>
> # ** PERSONA 2 **
>
>         
> ![Persona 2](images/2.png)
> 
> ![Persona 2 resto](images/33.png)
> 
> 
> Fonte: [Como criar uma persona para o seu negócio](https://raissaviegas.com.br/como-criar-uma-persona/)


## Histórias de Usuários

A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Rogério  | Uma melhora no sistema de headcount.           | Para agilizar tarefas e conter gastos no hospital.               |
|Carla       | Menor carga horária                | Passar mais tempo com a família. |
|Rogério  | Saber quantas pessoas precisam estar em cada setor.           | Para facilitar a troca de funcionários para cada setor.               |
|Carla       | Ver meus horários e destinos de trabalho no hospital.                 | Evitar ter que procurar saber qual setor eu devo ir em qual horário. |
|Rogério  | Saber o quanto eu estou gastando.           | Facilitar a gerência do hospital.               |
|Carla       | Melhorar o atendimento pela escala de fugulin.                 | Saber os pacientes que precisam de mais cuidado. |
|Rogério  | Evitar ter enfermeiros trabalhando com hora extra.           | Diminuir gastos.               |
|Carla       | Menor pressão no trabalho.                 | Poder pensar melhor para atender melhor. |



> - Headcount:
> 
> Responsável por administrar quantas pessoas devem estar em determinada área do hospital, mas o sistema que gere este tópico apresenta muitas falhas que podem impactar no mau atendimento dos pacientes e em um gasto excessivo.
> - Escala de Fugulin:
> 
> Foi criada para determinar o nível de “risco” que um paciente apresenta e assim pode se decidir quantos enfermeiros um paciente precisa dentro do hospital.
> - Tempo de serviço:
> 
> Principalmente os enfermeiros (as) são prejudicados com os horários devido às horas extras que acabam não sendo opcionais, mas sim obrigatórias devido a dificuldades encontradas no headcount. Assim muitos funcionários ficam longas horas longe de suas famílias e não tem tempo para praticar alguns de seus hobbies.
>
> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades de interação dos gestores e dos enfermeiros, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir...

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve informar ao gestor quantos enfermeiros o hospital necessita baseando-se na quantidade de pacientes e na escala de fugulin. | ALTA | 
|RF-002| O site deverá mostrar os gastos com enfermeiros para o gestor. | ALTA |
|RF-003| O site devera ter uma aba para o gestor entrar com os dados dos enfermeiros e pacientes. |  ALTA |
|RF-004| O site deverá ter um login que separa gestores e enfermeiros para assim adicionar futuras features para os enfermeiros. | BAIXA |





### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móveis e desktops | MÉDIA | 
|RNF-002| O site deve calcular a quantidade de enfermeiros necessarios baseado na entrada de dados das informacoes dos gestores e dos bacientes usando a escala de fugulin. |  ALTA | 
|RNF-003| O sistema deve calcular o quanto será economizado, considerando o que é gasto atualmente e o que será gasto com o resultado do site.| ALTA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


# Projeto de Interface

O website havera um login para o gestor, na aba do gestor tera um campo onde ele entrara com dados sobre enfermieros e pacientes. Apos preenchido, o site informará para o gestor os gastos atuais, e calculara e apresentará uma configuração de enfermeiros mais eficiente e seu cusdo usando um algorítmo matemático para a realização do mesmo.


## User Flow

......  INCLUA AQUI O DIAGRAMA COM O FLUXO DO USUÁRIO NA APLICAÇÃO ......

> Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor
> mapear todo fluxo de telas do site ou app. Essa técnica funciona
> para alinhar os caminhos e as possíveis ações que o usuário pode
> fazer junto com os membros de sua equipe.
>
> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)
>
> **Exemplo**:
> 
> ![Exemplo de UserFlow](images/userflow.jpg)


## Wireframes

Aqui está os wireframes do projeto

> Wireframes são protótipos das telas da aplicação usados em design de interface para sugerir a
> estrutura de um site web e seu relacionamentos entre suas
> páginas. Um wireframe web é uma ilustração semelhante ao
> layout de elementos fundamentais na interface.
> 
> **Links Úteis**:
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> 
> **Exemplo**:
> 
> ![Exemplo de Wireframe](images/wireframe-example.png)


# Metodologia

O grupo começou desenvolvendo a matriz CSD e o mapa de stakeholders. Tendo mapeado as certezas, incertezas e suposições sobre o problema, assim como as pessoas e instituições mais importantes, conduzimos as entrevistas qualitativas. Entrevistamos o diretor regional e a gerente de enfermagem de uma empresa de hospitais chamada HapVida. Até esse ponto todos do grupo participaram de todas as etapas. A partir desse momento, houve reuniões diárias para desenvolvimento do projeto, e quem estivesse disponível comparecia e desenvolvia parte do projeto.

Tendo um melhor entendimento do problema e das dores dos afetados, criamos personas e propostas de valor com o intuito de materializar as ideias, dores e problemas. Depois disso, partimos para o brainstorm, elegemos as melhores ideias e as levamos para o mural de possibilidades. Discutimos e escolhemos a melhor ideia, que é agora a solução a ser desenvolvida. 

Ferramentas utilizadas:

- Discord (para as reuniões)
- Miro (para o Design Thinking)
- Bitrix24 (para divisão de tarefas)
- GitHub (para editar projetos)

> Nesta parte do documento, você deve apresentar a metodologia 
> adotada pelo grupo, descrevendo o processo de trabalho baseado nas metodologias ágeis, 
> a divisão de papéis e tarefas, as ferramentas empregadas e como foi realizada a
> gestão de configuração do projeto via GitHub.
>
> Coloque detalhes sobre o processo de Design Thinking e a implementação do Framework Scrum seguido
> pelo grupo. O grupo poderá fazer uso de ferramentas on-line para acompanhar
> o andamento do projeto, a execução das tarefas e o status de desenvolvimento
> da solução.
> 
> **Links Úteis**:
> - [Tutorial Trello](https://trello.com/b/8AygzjUA/tutorial-trello)
> - [Gestão ágil de projetos com o Trello](https://www.youtube.com/watch?v=1o9BOMAKBRE)
> - [Gerência de projetos - Trello com Scrum](https://www.youtube.com/watch?v=DHLA8X_ujwo)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

## Divisão de Papéis



> Apresente a divisão de papéis e tarefas entre os membros do grupo.
>
> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)


## Ferramentas

......  COLOQUE AQUI O SEU TEXTO - SIGA O EXEMPLO DA TABELA ABAIXO  ......

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro | https://miro.com/app/board/uXjVMYD9yI0=/ | 
|Repositório de código | GitHub | https://github.com/ICEI-PUC-Minas-PPLCC-TI/ti-1-ppl-cc-m-20231-chickcount/tree/master/codigo | 
|Hospedagem do site | Heroku |  https://XXXXXXX.herokuapp.com | 
|Protótipo Interativo | MavelApp ou Figma | https://figma.com/XXXXXXX | 

>
> Liste as ferramentas empregadas no desenvolvimento do
> projeto, justificando a escolha delas, sempre que possível.
> 
> As ferramentas empregadas no projeto são:
> 
> - Editor de código.
> - Ferramentas de comunicação
> - Ferramentas de diagramação
> - Plataforma de hospedagem
> 
> O editor de código foi escolhido porque ele possui uma integração com o
> sistema de versão. As ferramentas de comunicação utilizadas possuem
> integração semelhante e por isso foram selecionadas. Por fim, para criar
> diagramas utilizamos essa ferramenta por melhor captar as
> necessidades da nossa solução.
> 
> **Links Úteis - Hospedagem**:
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Crie seu Site com o HostGator](https://www.hostgator.com.br/como-publicar-seu-site)
> - [GoDady](https://br.godaddy.com/how-to)
> - [GitHub Pages](https://pages.github.com/)

## Controle de Versão

......  COLOQUE AQUI O SEU TEXTO ......

> Discuta como a configuração do projeto foi feita na ferramenta de
> versionamento escolhida. Exponha como a gerência de tags, merges,
> commits e branchs é realizada. Discuta como a gerência de issues foi
> realizada.
> A ferramenta de controle de versão adotada no projeto foi o
> [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
> foi utilizado para hospedagem do repositório `upstream`.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `enhancement`: uma funcionalidade precisa ser melhorada
> - `feature`: uma nova funcionalidade precisa ser introduzida
>
> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [5 Git Workflows & Branching Strategy to deliver better code](https://zepel.io/blog/5-git-workflows-to-improve-development/)
>
> **Exemplo - GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/Github-Workflow.png)

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
