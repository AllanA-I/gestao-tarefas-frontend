# Gestor de Tarefas Frontend em React

Este projeto é o frontend em React para o Gestor de Tarefas, consumindo a API Python + FastAPI. Permite visualizar, adicionar, remover e concluir tarefas de forma interativa.

Cada tarefa possui:

* `id` (inteiro): identificador único.
* `title` (string): título para exibição no frontend.
* `descricao` (string): descrição detalhada da tarefa.
* `concluida` (booleano): indica se a tarefa foi concluída.

## Funcionalidades

* Exibir lista de tarefas obtidas via API.
* Adicionar novas tarefas.
* Marcar tarefas como concluídas.
* Remover tarefas.
* Comunicação com o backend através de requisições HTTP.

## Tecnologias

* React
* JavaScript (ES6+)
* Fetch API para integração com backend
* CSS básico para estilização
* Estrutura modular (componentes separados)

## Como rodar

1. Instale dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm start
```

3. Abra o navegador em `http://localhost:3000`. Certifique-se de que o backend está rodando para a integração funcionar.

## Branch principal

* O branch principal foi definido como `main`.

## Próximos passos

* Revisar o código adicionando comentários explicativos em cada componente.
* Implementar tratamento de erros nas requisições HTTP.
* Melhorar a estilização e responsividade da interface.
* Criar integração contínua (CI) com o backend.
* Eventual deploy unificado para demonstração funcional.