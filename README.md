# 💰 Soldi - Sistema de Gestão Financeira Pessoal

<div align="center">
  <img src="https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-16-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" />
</div>

<br />

<div align="center">
  <h3>📊 Organize suas finanças de forma inteligente</h3>
  <p>Sistema completo de gestão financeira com dashboard interativo, análise por IA e controle total de receitas e despesas.</p>
</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura do Sistema](#-arquitetura-do-sistema)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação e Configuração](#-instalação-e-configuração)
- [Variáveis de Ambiente](#-variáveis-de-ambiente)
- [Como Executar](#-como-executar)
- [Versionamento e Git Flow](#-versionamento-e-git-flow)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [API Endpoints](#-api-endpoints)
- [Integração Frontend-Backend](#-integração-frontend-backend)
- [Equipe de Desenvolvimento](#-equipe-de-desenvolvimento)
- [Licença](#-licença)

---

## 🎯 Sobre o Projeto

**Soldi** é uma aplicação web fullstack para gestão financeira pessoal, desenvolvida como projeto acadêmico da **FATEC Praia Grande**. O sistema permite aos usuários controlar suas finanças de forma eficiente através de:

- 📊 **Dashboard interativo** com gráficos e métricas em tempo real
- 💳 **Gestão completa** de receitas e despesas
- 🤖 **Análise financeira por IA** (integração com OpenAI)
- 📈 **Relatórios visuais** por categoria e período
- 🔐 **Autenticação segura** com JWT

O projeto foi desenvolvido seguindo as melhores práticas de desenvolvimento, com arquitetura em camadas, código limpo e documentação completa.

---

## ✨ Funcionalidades

### 🔐 Autenticação e Usuário
- [x] Cadastro de usuários com validação
- [x] Login com autenticação JWT
- [x] Perfil de usuário com avatar e iniciais
- [x] Logout seguro

### 💰 Gestão de Transações
- [x] CRUD completo de transações (Criar, Ler, Atualizar, Deletar)
- [x] Classificação por tipo (Receita/Despesa)
- [x] Categorização customizável
- [x] Histórico completo de transações
- [x] Filtros e ordenação

### 📊 Dashboard e Analytics
- [x] Saldo total em tempo real
- [x] Total de receitas e despesas do mês
- [x] Gráfico de fluxo de caixa mensal (área)
- [x] Gráfico de gastos por categoria (barras)
- [x] Gráfico de distribuição de gastos (pizza)
- [x] Últimas 5 transações

### 🤖 Inteligência Artificial
- [x] Análise financeira automática por IA
- [x] Insights personalizados sobre gastos
- [x] Recomendações de otimização financeira
- [x] Modal interativo com análise detalhada

### 🎨 Interface
- [x] Design responsivo (Desktop, Tablet, Mobile)
- [x] Sidebar com navegação intuitiva
- [x] Cards informativos com cores por tipo
- [x] Modais para adicionar/editar transações
- [x] Animações e transições suaves
- [x] Tema verde (#99CD85) consistente

---

## 🚀 Tecnologias Utilizadas

### Frontend
| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **React** | 18.3.1 | Biblioteca para construção de interfaces |
| **TypeScript** | 5.5.3 | Superset JavaScript com tipagem estática |
| **Vite** | 5.4.2 | Build tool e dev server |
| **React Router** | 6.x | Roteamento de páginas |
| **Axios** | 1.7.7 | Cliente HTTP para API REST |
| **Recharts** | 2.x | Biblioteca de gráficos (Área) |
| **Chart.js** | 4.x | Biblioteca de gráficos (Barras/Pizza) |

### Backend
| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **Spring Boot** | 3.3.5 | Framework Java para backend |
| **Java** | 17+ | Linguagem de programação |
| **PostgreSQL** | 16.x | Banco de dados relacional |
| **Spring Security** | 6.x | Autenticação e autorização |
| **JWT** | 0.12.6 | JSON Web Tokens |
| **OpenAI API** | 1.0 | Integração com IA |
| **Lombok** | 1.18.34 | Redução de boilerplate |
| **Swagger/OpenAPI** | 3.x | Documentação automática da API |

### DevOps & Tools
- **Git/GitHub** - Controle de versão
- **Maven** - Gerenciamento de dependências (Backend)
- **npm** - Gerenciamento de pacotes (Frontend)
- **Docker** (Opcional) - Containerização

---

## 🏗️ Arquitetura do Sistema

```
┌─────────────────────────────────────────────────────────────┐
│                        FRONTEND (React)                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  Components  │  │   Services   │  │    Types     │      │
│  │              │  │              │  │              │      │
│  │  - Pages     │  │  - auth      │  │  - DTOs      │      │
│  │  - Modals    │  │  - usuario   │  │  - Enums     │      │
│  │  - Charts    │  │  - transacao │  │              │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                           ↕ HTTP (Axios)                     │
└─────────────────────────────────────────────────────────────┘
                              ↕
                    JWT Authentication
                              ↕
┌─────────────────────────────────────────────────────────────┐
│                    BACKEND (Spring Boot)                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ Controllers  │→│   Services   │→│ Repositories │      │
│  │              │  │              │  │              │      │
│  │  - Auth      │  │  - Usuario   │  │  - JPA       │      │
│  │  - Usuario   │  │  - Transacao │  │  - Custom    │      │
│  │  - Transacao │  │  - Chat (IA) │  │    Queries   │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                           ↕                                  │
│                    ┌──────────────┐                          │
│                    │  PostgreSQL  │                          │
│                    │   Database   │                          │
│                    └──────────────┘                          │
│                           ↕                                  │
│                    ┌──────────────┐                          │
│                    │  OpenAI API  │                          │
│                    │  (Análise IA)│                          │
│                    └──────────────┘                          │
└─────────────────────────────────────────────────────────────┘
```

### Fluxo de Autenticação JWT

```
1. Login Request → Backend valida credenciais
2. Backend gera JWT Token
3. Frontend armazena token em localStorage
4. Todas requisições incluem: Authorization: Bearer <token>
5. Backend valida token em cada requisição
6. Se token expirado → Logout automático
```

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

### Backend
- ☕ **Java JDK 17+** ([Download](https://adoptium.net/))
- 📦 **Maven 3.8+** ([Download](https://maven.apache.org/download.cgi))
- 🐘 **PostgreSQL 16+** ([Download](https://www.postgresql.org/download/))

### Frontend
- 📗 **Node.js 18+** ([Download](https://nodejs.org/))
- 📦 **npm 9+** (incluído com Node.js)

### Opcional
- 🐳 **Docker** & **Docker Compose** ([Download](https://www.docker.com/))
- 🔧 **Git** ([Download](https://git-scm.com/))

---

## ⚙️ Instalação e Configuração

### 1️⃣ Clone o Repositório

```bash
git clone https://github.com/seu-usuario/soldi.git
cd soldi
```

### 2️⃣ Configurar Backend

#### Criar Banco de Dados PostgreSQL

```sql
-- Conectar ao PostgreSQL
psql -U postgres

-- Criar banco de dados
CREATE DATABASE soldi_db;

-- Criar usuário (opcional)
CREATE USER soldi_user WITH PASSWORD 'sua_senha_segura';
GRANT ALL PRIVILEGES ON DATABASE soldi_db TO soldi_user;
```

#### Configurar `application.properties`

Navegue até `backend/src/main/resources/application.properties`:

```properties
# Porta do servidor
server.port=8080

# Configuração do Banco de Dados
spring.datasource.url=jdbc:postgresql://localhost:5432/soldi_db
spring.datasource.username=soldi_user
spring.datasource.password=sua_senha_segura
spring.datasource.driver-class-name=org.postgresql.Driver

# JPA/Hibernate
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.properties.hibernate.format_sql=true

# JWT Secret (TROCAR EM PRODUÇÃO!)
jwt.secret=SUA_CHAVE_SECRETA_SUPER_SEGURA_AQUI_MIN_256_BITS
jwt.expiration=86400000

# OpenAI API
openai.api.key=sua-chave-openai-aqui
openai.api.model=gpt-4

# Swagger/OpenAPI
springdoc.api-docs.path=/api-docs
springdoc.swagger-ui.path=/swagger-ui.html
```

#### Instalar Dependências e Compilar

```bash
cd backend
mvn clean install
```

### 3️⃣ Configurar Frontend

#### Instalar Dependências

```bash
cd frontend
npm install
```

#### Configurar URL da API

Edite `frontend/src/config/api.ts`:

```typescript
const API_URL = 'http://127.0.0.1:8080/api/v1';
```

---

## 🔐 Variáveis de Ambiente

### Backend (`application.properties`)

| Variável | Descrição | Exemplo | Obrigatório |
|----------|-----------|---------|-------------|
| `spring.datasource.url` | URL do PostgreSQL | `jdbc:postgresql://localhost:5432/soldi_db` | ✅ |
| `spring.datasource.username` | Usuário do banco | `soldi_user` | ✅ |
| `spring.datasource.password` | Senha do banco | `senha123` | ✅ |
| `jwt.secret` | Chave secreta JWT | `minimo256bits...` | ✅ |
| `jwt.expiration` | Tempo expiração (ms) | `86400000` (24h) | ✅ |
| `openai.api.key` | Chave da OpenAI | `sk-...` | ✅ |
| `openai.api.model` | Modelo da OpenAI | `gpt-4` ou `gpt-3.5-turbo` | ✅ |

### Frontend (`api.ts`)

| Variável | Descrição | Exemplo | Obrigatório |
|----------|-----------|---------|-------------|
| `API_URL` | URL base da API | `http://127.0.0.1:8080/api/v1` | ✅ |

---

## 🚀 Como Executar

### Método 1: Execução Manual

#### 1. Iniciar Backend

```bash
cd backend
mvn spring-boot:run
```

O backend estará rodando em: `http://localhost:8080`

**Acessar Swagger:** `http://localhost:8080/swagger-ui.html`

#### 2. Iniciar Frontend

```bash
cd frontend
npm run dev
```

O frontend estará rodando em: `http://localhost:5173`

### Método 2: Usando Docker Compose (Opcional)

```bash
# Na raiz do projeto
docker-compose up -d
```

Serviços disponíveis:
- **Frontend:** `http://localhost:5173`
- **Backend:** `http://localhost:8080`
- **PostgreSQL:** `localhost:5432`

---

## 🌳 Versionamento e Git Flow

O projeto **Soldi** utiliza a metodologia **Git Flow** para organizar o desenvolvimento, garantindo código estável em produção e facilitando o trabalho colaborativo da equipe.

### Estrutura de Branches

#### Branches Permanentes
- **`main`** - Código em produção (sempre estável)
- **`develop`** - Branch de integração do desenvolvimento

#### Branches Temporárias
- **`feature/*`** - Novas funcionalidades
  - Exemplos: `feature/login-usuario`, `feature/dashboard-analytics`
  - Criadas a partir de `develop`
  - Deletadas após merge

- **`release/*`** - Preparação de versões
  - Exemplos: `release/v1.0.0`, `release/v2.1.0`
  - Para testes finais e ajustes
  - Merge para `main` e `develop`

- **`hotfix/*`** - Correções urgentes em produção
  - Exemplos: `hotfix/corrigir-erro-login`
  - Criadas a partir de `main`
  - Merge para `main` e `develop`

### Fluxo de Trabalho

#### 1. Criar Nova Feature

```bash
# Atualizar develop
git checkout develop
git pull origin develop

# Criar branch de feature
git checkout -b feature/nome-da-funcionalidade

# Desenvolver e commitar
git add .
git commit -m "feat: adiciona tela de login"
```

#### 2. Finalizar Feature

```bash
# Atualizar develop
git checkout develop
git pull origin develop

# Merge da feature
git merge feature/nome-da-funcionalidade

# Enviar para repositório
git push origin develop

# Deletar branch local
git branch -d feature/nome-da-funcionalidade
```

#### 3. Criar Release

```bash
# Criar release a partir de develop
git checkout develop
git checkout -b release/v1.0.0

# Merge para main (produção)
git checkout main
git merge release/v1.0.0
git tag -a v1.0.0 -m "Versão 1.0.0"

# Merge para develop (atualização)
git checkout develop
git merge release/v1.0.0

# Enviar tudo
=======


# 📋 Guia de Versionamento do Projeto - Git Flow (Soldi)

## 🎯 Objetivo

Este documento explica como vamos organizar nosso repositório usando **Git Flow**, uma metodologia que nos ajudará a trabalhar de forma organizada, evitar conflitos e manter o código sempre estável em produção.

---

## 🌳 Estrutura de Branches

Nosso projeto terá dois tipos de branches: **permanentes** e **temporárias**.

### Branches Permanentes (nunca são deletadas)

#### 1️⃣ `main`
- **O que é**: Código em produção
- **Regra de ouro**: SEMPRE estável e funcionando
- **Quem mexe**: Apenas através de merges de `release` branches
- **Deploy**: Todo código aqui vai para o ambiente de produção

#### 2️⃣ `develop`
- **O que é**: Branch de integração do desenvolvimento
- **Propósito**: Juntar todas as features que estamos desenvolvendo
- **Regra**: Não trabalhamos diretamente aqui, apenas fazemos merge de features prontas
- **Estado**: Pode ter bugs, é nosso "laboratório"

### Branches Temporárias (são deletadas após o uso)

#### 🚀 `feature/*`
- **O que é**: Uma branch para cada funcionalidade nova
- **Exemplos**: 
  - `feature/login-usuario`
  - `feature/cadastro-produtos`
  - `feature/dashboard-vendas`
- **Onde nasce**: Criada a partir de `develop`
- **Onde morre**: Merge de volta para `develop` e depois é deletada
- **Importante**: Cada feature deve ser completa (back-end + front-end juntos)

#### 🎁 `release/*`
- **O que é**: Preparação de uma nova versão para produção
- **Exemplos**: `release/v1.0.0`, `release/v2.1.0`
- **Onde nasce**: Criada a partir de `develop` quando temos features suficientes
- **Propósito**: Testes finais, correções de bugs pequenos, ajustes de última hora
- **Onde morre**: Merge para `main` (produção) e `develop` (atualização)

#### 🔥 `hotfix/*`
- **O que é**: Correção urgente de bug em produção
- **Exemplos**: `hotfix/corrigir-erro-pagamento`
- **Onde nasce**: Criada a partir de `main`
- **Onde morre**: Merge para `main` E `develop`
- **Quando usar**: Apenas para bugs críticos que não podem esperar

---

## 🔄 Fluxo de Trabalho Completo

### Passo 1: Começando uma nova feature

```bash
# 1. Vá para develop e atualize
git checkout develop
git pull origin develop

# 2. Crie sua branch de feature
git checkout -b feature/nome-da-funcionalidade

# 3. Desenvolva sua funcionalidade
# (faça commits normalmente)
git add .
git commit -m "Adiciona tela de login"
```

### Passo 2: Finalizando a feature

```bash
# 1. Atualize develop novamente (pode ter mudanças)
git checkout develop
git pull origin develop

# 2. Volte para sua feature e faça rebase (opcional, mas recomendado)
git checkout feature/nome-da-funcionalidade
git rebase develop

# 3. Merge da feature em develop
git checkout develop
git merge feature/nome-da-funcionalidade

# 4. Envie para o repositório remoto
git push origin develop

# 5. Delete a branch local da feature (já não precisa mais)
git branch -d feature/nome-da-funcionalidade
```

### Passo 3: Criando uma Release (quando temos várias features prontas)

```bash
# 1. A partir de develop, crie a release
git checkout develop
git checkout -b release/v1.0.0

# 2. Faça testes finais, ajustes de versão, correções pequenas
git commit -m "Prepara versão 1.0.0"

# 3. Merge para main (PRODUÇÃO)
git checkout main
git merge release/v1.0.0

# 4. Crie uma tag para marcar a versão
git tag -a v1.0.0 -m "Versão 1.0.0 - Lançamento inicial"

# 5. Merge de volta para develop (manter atualizado)
git checkout develop
git merge release/v1.0.0

# 6. Envie tudo
git push origin main
git push origin develop
git push origin v1.0.0

# Deletar branch
git branch -d release/v1.0.0
```

### Padrão de Commits (Conventional Commits)

Usamos **Conventional Commits** para manter o histórico organizado:

**Formato:** `tipo: descrição breve`

#### Tipos de Commits

| Tipo | Descrição | Exemplo |
|------|-----------|---------|
| `feat` | Nova funcionalidade | `feat: adiciona validação de email` |
| `fix` | Correção de bug | `fix: corrige erro no login` |
| `docs` | Documentação | `docs: atualiza README` |
| `style` | Formatação de código | `style: ajusta indentação` |
| `refactor` | Refatoração | `refactor: melhora performance` |
| `test` | Testes | `test: adiciona testes unitários` |
| `build` | Build e dependências | `build: atualiza React para 18.2` |
| `chore` | Tarefas gerais | `chore: atualiza .gitignore` |

#### Exemplos de Bons Commits

✅ **Bons:**
```bash
git commit -m "feat: implementa sistema de carrinho de compras"
git commit -m "fix: resolve erro de autenticação no Safari"
git commit -m "docs: adiciona guia de contribuição"
git commit -m "refactor: otimiza consulta ao banco de dados"
```

❌ **Ruins:**
```bash
git commit -m "mudanças"
git commit -m "fix"
git commit -m "commit"
```

### Regras Importantes

1. ❌ **NUNCA** faça commit direto em `main`
2. ❌ **NUNCA** faça commit direto em `develop`
3. ✅ Uma feature = uma branch
4. ✅ Delete branches após merge
5. ✅ Atualize `develop` antes de começar
6. ✅ Teste antes do merge

### Visualização do Fluxo

```
              ┌─── feature/login ───┐
              │                     │
main ──────────────────────────────────────────> (produção)
     ↑                              ↑
     │                              │
     │        ┌─────────────────────┘
     │        │ release/v1.0
     │        │
develop ──────┴────────────────────────────────> (dev)
             ↑            ↑
             │            │
             └─ feature/A └─ feature/B
```

---

## 📁 Estrutura de Pastas

### Backend

```
backend/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── br/edu/fatecpg/soldi/
│   │   │       ├── config/          # Configurações (Security, OpenAI)
│   │   │       ├── controller/      # Controllers REST
│   │   │       ├── dto/
│   │   │       │   ├── request/     # DTOs de entrada
│   │   │       │   └── response/    # DTOs de saída
│   │   │       ├── exception/       # Exceções customizadas
│   │   │       ├── filter/          # Filtros (JWT)
│   │   │       ├── model/           # Entidades JPA
│   │   │       ├── repository/      # Repositórios Spring Data
│   │   │       ├── service/         # Lógica de negócio
│   │   │       └── SoldiApplication.java
│   │   └── resources/
│   │       ├── application.properties
│   │       └── static/
│   └── test/                        # Testes unitários
├── pom.xml                          # Dependências Maven
└── README.md
```

### Frontend

```
frontend/
├── public/
├── src/
│   ├── assets/                      # Imagens, ícones
│   ├── components/                  # Componentes reutilizáveis
│   │   ├── AddTransactionButton/
│   │   ├── AddTransactionModal/
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Chart/
│   │   ├── EditTransactionModal/
│   │   ├── Grafico/
│   │   ├── Modal/                   # Modal IA
│   │   ├── Sidebar/
│   │   └── Table/
│   ├── config/
│   │   └── api.ts                   # Configuração Axios
│   ├── pages/
│   │   ├── Home.tsx                 # Dashboard
│   │   └── Transacoes/
│   │       └── Transacoes.tsx       # CRUD Transações
│   ├── services/                    # Services para API
│   │   ├── auth.service.ts
│   │   ├── transacao.service.ts
│   │   └── usuario.service.ts
│   ├── styles/                      # CSS global
│   ├── types/
│   │   └── api.types.ts             # Tipagens TypeScript
│   ├── App.tsx                      # Componente principal
│   ├── Login.tsx                    # Página de login
│   ├── Register.tsx                 # Página de cadastro
│   └── main.tsx                     # Entry point
├── index.html
├── package.json                     # Dependências npm
├── tsconfig.json                    # Configuração TypeScript
├── vite.config.ts                   # Configuração Vite
└── README.md
```

---

## 🔌 API Endpoints

### 🔐 Autenticação

| Método | Endpoint | Descrição | Auth |
|--------|----------|-----------|------|
| POST | `/api/v1/auth/login` | Login do usuário | ❌ |
| POST | `/api/v1/auth/registrar` | Cadastro de novo usuário | ❌ |

**Request Login:**
```json
{
  "email": "usuario@email.com",
  "senha": "senha123"
}
```

**Response Login:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 👤 Usuário

| Método | Endpoint | Descrição | Auth |
|--------|----------|-----------|------|
| GET | `/api/v1/usuarios/me/saldo` | Buscar saldo total | ✅ |
| GET | `/api/v1/usuarios/me/analytics/gastos-categoria` | Gastos por categoria | ✅ |
| GET | `/api/v1/usuarios/me/analytics/gastos-mensais` | Fluxo de caixa mensal | ✅ |
| GET | `/api/v1/usuarios/me/transacoes/recentes` | 5 últimas transações | ✅ |
| GET | `/api/v1/usuarios/me/transacoes/todas-transacoes` | Todas as transações | ✅ |
| GET | `/api/v1/usuarios/me/transacoes/ai-insight` | Análise financeira IA | ✅ |

**Response Saldo:**
```json
{
  "saldoTotal": 22800.00,
  "totalReceitas": 28500.00,
  "totalDespesas": 5700.00
}
```

### 💰 Transações

| Método | Endpoint | Descrição | Auth |
|--------|----------|-----------|------|
| POST | `/api/v1/transacoes` | Criar transação | ✅ |
| GET | `/api/v1/transacoes/{uuid}` | Buscar por UUID | ✅ |
| PUT | `/api/v1/transacoes/{uuid}` | Atualizar transação | ✅ |
| DELETE | `/api/v1/transacoes/{uuid}` | Deletar transação | ✅ |

**Request Criar Transação:**
```json
{
  "tipo": "DESPESA",
  "valor": 150.50,
  "descricao": "Compra no supermercado",
  "categoria": "Alimentação"
}
```

**Response Transação:**
```json
{
  "uuidTransacao": "123e4567-e89b-12d3-a456-426614174000",
  "tipo": "DESPESA",
  "valor": 150.50,
  "descricao": "Compra no supermercado",
  "categoria": "Alimentação",
  "dataTransacao": "2025-11-25T10:30:00"
}
```

---

## 🔗 Integração Frontend-Backend

### Arquitetura de Camadas

```
┌─────────────────────────────────────┐
│         COMPONENTE REACT            │
│  (Home.tsx, Transacoes.tsx, etc)   │
└─────────────────────────────────────┘
                 ↓ Chama
┌─────────────────────────────────────┐
│           SERVICES                  │
│  (auth.service, transacao.service)  │
└─────────────────────────────────────┘
                 ↓ Usa
┌─────────────────────────────────────┐
│          AXIOS CONFIG               │
│     (api.ts + Interceptors)         │
└─────────────────────────────────────┘
                 ↓ HTTP
┌─────────────────────────────────────┐
│        SPRING BOOT API              │
│    (Controllers + Services)         │
└─────────────────────────────────────┘
```

### Como Funciona:

1. **Configuração (`api.ts`):**
   - Cria instância Axios com baseURL
   - Request Interceptor adiciona JWT automaticamente
   - Response Interceptor trata erros 401

2. **Services:**
   - Encapsulam lógica de comunicação
   - Retornam dados tipados (TypeScript)
   - Tratam erros de forma consistente

3. **Componentes:**
   - Chamam services
   - Atualizam estado com dados
   - Renderizam UI

**Exemplo de Fluxo:**

```typescript
// 1. Componente chama service
const saldo = await usuarioService.getSaldo();

// 2. Service faz requisição
const response = await api.get('/usuarios/me/saldo');

// 3. Interceptor adiciona token
config.headers.Authorization = `Bearer ${token}`;

// 4. Backend processa e retorna dados
return { saldoTotal: 22800, ... };

// 5. Componente atualiza estado
setSaldo(dados);
```

Para documentação completa da integração, consulte o PDF: `Documentacao_Integracao_Frontend_Backend_Soldi.pdf`

---

## 👥 Equipe de Desenvolvimento

<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/MandyLima">
        <img src="https://github.com/MandyLima.png" width="100px;" alt="Amanda Lima"/><br>
        <sub><b>Amanda Lima</b></sub>
      </a><br>
      <sub>Fullstack Developer</sub>
    </td>
    <td align="center">
      <a href="https://github.com/Frank1br">
        <img src="https://github.com/Frank1br.png" width="100px;" alt="Frank Oliveira"/><br>
        <sub><b>Frank Oliveira</b></sub>
      </a><br>
      <sub>FullStack Developer</sub>
    </td>
    <td align="center">
      <a href="https://github.com/isabelamarchesoni">
        <img src="https://github.com/isabelamarchesoni.png" width="100px;" alt="Isabela Marchesoni"/><br>
        <sub><b>Isabela Marchesoni</b></sub>
      </a><br>
      <sub>Fullstack Developer</sub>
    </td>
    <td align="center">
      <a href="https://github.com/thiimont">
        <img src="https://github.com/thiimont.png" width="100px;" alt="Thiago Monteiro"/><br>
        <sub><b>Thiago Monteiro</b></sub>
      </a><br>
      <sub>Fullstack Developer</sub>
    </td>
  </tr>
</table>

### 🏫 Instituição

**FATEC Praia Grande - Faculdade de Tecnologia de Praia Grande**  
Curso: Análise e Desenvolvimento de Sistemas  
Disciplina: Desenvolvimento Web e Mobile  
Período: 2025

---

## 🤝 Como Contribuir

Contribuições são bem-vindas! Para contribuir com o projeto:

1. **Fork** o repositório
2. Crie uma branch de feature seguindo nosso padrão Git Flow:
   ```bash
   git checkout -b feature/minha-nova-funcionalidade
   ```
3. Faça commits seguindo o padrão **Conventional Commits**:
   ```bash
   git commit -m "feat: adiciona nova funcionalidade"
   ```
4. Push para a branch:
   ```bash
   git push origin feature/minha-nova-funcionalidade
   ```
5. Abra um **Pull Request** detalhando suas mudanças

### Checklist para Pull Requests

- [ ] Código segue os padrões do projeto
- [ ] Testes foram adicionados/atualizados
- [ ] Documentação foi atualizada (se necessário)
- [ ] Commits seguem Conventional Commits
- [ ] Branch segue padrão Git Flow
- [ ] Código foi testado localmente

Para mais detalhes sobre versionamento, consulte a seção [Versionamento e Git Flow](#-versionamento-e-git-flow).

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte do curso de **Análise e Desenvolvimento de Sistemas** da **FATEC Praia Grande**.

---

## 📞 Contato e Suporte

Para dúvidas, sugestões ou reportar problemas:

- 📧 **Email:** soldi.fatecpg@gmail.com
- 🐛 **Issues:** [GitHub Issues](https://github.com/seu-usuario/soldi/issues)
- 📚 **Wiki:** [GitHub Wiki](https://github.com/seu-usuario/soldi/wiki)

---

## 🙏 Agradecimentos

Agradecemos aos professores e colegas da FATEC Praia Grande pelo apoio e conhecimento compartilhado durante o desenvolvimento deste projeto.

Tecnologias e bibliotecas utilizadas:
- [React](https://react.dev/)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [PostgreSQL](https://www.postgresql.org/)
- [Recharts](https://recharts.org/)
- [Chart.js](https://www.chartjs.org/)
- [OpenAI](https://openai.com/)

---

<div align="center">
  <p>Desenvolvido com 💚 pela equipe Soldi</p>
  <p>FATEC Praia Grande - 2025</p>
</div>
