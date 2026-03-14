# M27 - Testes de Performance

Projeto desenvolvido para o exercício do módulo **Testes de Performance - Parte 2**.

## Tecnologias utilizadas

* Node.js
* GraphQL API
* k6 (ferramenta de testes de performance)

## Estrutura do projeto

```
M27_Performance_Tests
└── ebac-demo-store-server
    ├── src
    ├── scripts
    ├── performance-tests
    │   ├── products-test.js
    │   └── customers-test.js
```

## Como executar o projeto

### 1. Instalar dependências

```
npm install
```

### 2. Popular o banco de dados

```
npm run seed
```

### 3. Iniciar o servidor

```
npm start
```

A API estará disponível em:

```
http://localhost:3000/graphql
```

## Executar testes de performance

Os testes foram implementados utilizando **k6**.

### Teste de produtos

```
k6 run performance-tests/products-test.js
```

### Teste de clientes

```
k6 run performance-tests/customers-test.js
```

## Autor

Jean
