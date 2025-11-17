

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

# 7. Delete a branch de release
git branch -d release/v1.0.0
```

### Passo 4: Hotfix (emergência em produção)

```bash
# 1. Crie hotfix a partir de main
git checkout main
git checkout -b hotfix/corrigir-bug-critico

# 2. Corrija o bug
git commit -m "Corrige bug no pagamento"

# 3. Merge para main
git checkout main
git merge hotfix/corrigir-bug-critico
git tag -a v1.0.1 -m "Hotfix: corrige bug pagamento"

# 4. Merge para develop também
git checkout develop
git merge hotfix/corrigir-bug-critico

# 5. Envie tudo e delete
git push origin main
git push origin develop
git push origin v1.0.1
git branch -d hotfix/corrigir-bug-critico
```

---

## 📊 Visualização do Fluxo

```
                    ┌─── feature/login ───┐
                    │                      │
main ────────────────────────────────────────────────────> (produção)
      ↑                                    ↑
      │                                    │
      │         ┌──────────────────────────┘
      │         │ release/v1.0
      │         │
develop ────────┴───────────────────────────────────────> (desenvolvimento)
                ↑               ↑
                │               │
                └─ feature/A    └─ feature/B
```

---

## ✅ Boas Práticas

### Nomenclatura de Branches
- ✔️ `feature/adicionar-carrinho-compras`
- ✔️ `hotfix/corrigir-login`
- ✔️ `release/v2.0.0`
- ❌ `minha-branch`
- ❌ `teste`
- ❌ `branch-do-joao`

### Commits - Conventional Commits

Usaremos um padrão de commits para manter o histórico organizado e facilitar o entendimento das mudanças.

**Formato**: `tipo: descrição breve`

#### Tipos de Commits

- **`feat`** - Nova funcionalidade
  - Exemplo: `feat: adiciona validação de email no formulário`
  - Relaciona-se com o MINOR do versionamento semântico (v1.1.0)

- **`fix`** - Correção de bug
  - Exemplo: `fix: corrige bug de login com caracteres especiais`
  - Relaciona-se com o PATCH do versionamento semântico (v1.0.1)

- **`docs`** - Mudanças na documentação
  - Exemplo: `docs: atualiza README com instruções de instalação`
  - Não inclui alterações em código

- **`style`** - Formatação de código
  - Exemplo: `style: ajusta indentação e remove espaços extras`
  - Semicolons, trailing spaces, lint... (Não altera funcionalidade)

- **`refactor`** - Refatoração de código
  - Exemplo: `refactor: melhora performance do processamento de imagens`
  - Melhora o código sem alterar funcionalidade

- **`test`** - Adição ou alteração de testes
  - Exemplo: `test: adiciona testes unitários para módulo de pagamento`
  - Criar, alterar ou excluir testes (Não inclui alterações em código)

- **`build`** - Mudanças em builds e dependências
  - Exemplo: `build: atualiza versão do React para 18.2`
  - Modificações em arquivos de build, package.json, etc.

- **`chore`** - Tarefas gerais e configurações
  - Exemplo: `chore: adiciona .env.example ao gitignore`
  - Atualizações de configuração, pacotes... (Não inclui alterações em código)

#### Exemplos Práticos

✔️ **Bons commits**:
- `feat: implementa sistema de carrinho de compras`
- `fix: resolve erro de autenticação no Safari`
- `docs: adiciona guia de contribuição`
- `refactor: otimiza consulta ao banco de dados`
- `test: adiciona testes para componente de login`
- `style: formata código seguindo ESLint`
- `build: adiciona script de deploy automatizado`
- `chore: atualiza dependências do projeto`

❌ **Commits ruins**:
- `mudanças`
- `fix`
- `arrumei umas coisas`
- `commit`
- `alterações no código`

#### Dicas para Bons Commits
- Use verbos no imperativo: "adiciona", "corrige", "remove"
- Seja específico sobre o que foi feito
- Limite a primeira linha a ~50 caracteres
- Prefira commits pequenos e frequentes
- Um commit = uma alteração lógica

### Pull Requests (se usar GitHub/GitLab)
- Sempre crie um PR antes de fazer merge para `develop`
- Peça revisão de código de pelo menos um colega
- Teste localmente antes de abrir o PR

---

## 🚨 Regras Importantes

1. **NUNCA faça commit direto em `main`** - sempre passe por release
2. **NUNCA faça commit direto em `develop`** - sempre use feature branches
3. **Uma feature = uma branch** - não misture funcionalidades
4. **Delete branches após merge** - mantém o repositório limpo
5. **Atualize `develop` antes de começar** - evita conflitos
6. **Teste sua feature antes do merge** - não quebre `develop`

---

## ❓ FAQ - Dúvidas Comuns

**P: Posso trabalhar em mais de uma feature ao mesmo tempo?**  
R: Sim! Crie branches diferentes para cada uma.

**P: Minha feature não está pronta, mas preciso mudar para outra. E agora?**  
R: Use `git stash` para salvar mudanças temporárias ou faça commit parcial na sua branch de feature.

**P: Esqueci de criar a branch e já fiz commits em develop. O que fazer?**  
R: Crie a branch agora: `git checkout -b feature/nome`. Os commits virão junto.

**P: Quanto tempo devo deixar uma feature aberta?**  
R: O ideal é que features sejam pequenas e concluídas em poucos dias. Se está demorando muito, considere quebrar em features menores.

**P: Quando fazemos deploy?**  
R: Sempre que fizermos merge de uma release para `main`. A `main` sempre reflete o que está em produção.

---

## 🆘 Precisa de Ajuda?

Se tiver dúvidas ou problemas com Git:
1. Consulte este documento primeiro
2. Pergunte no grupo da equipe
3. Entre em contato com o responsável pelo versionamento

**Lembre-se**: É melhor perguntar antes do que ter que desfazer depois! 😊

---

**Última atualização**: Novembro 2025  
**Documentação criada por**: Frank Oliveira
