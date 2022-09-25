## ✨ Instalação e execução

Na raiz do projeto são fornecidos alguns comandos integrados:

1. Instalar as dependências

```sh
yarn install
```

2. Executar o projeto

```sh
yarn start
```

## 📂 Estrutura do repositório

Nossa estrutura de pastas se organiza dessa forma:

```

├─ public/
│  ├─ favicon.ico                   # Ícone exibido no browser
│  ├─ index.html                    # Index base do projeto
│  └─ manifest.json                 # Arquivo de metadados para o browser
├─ src/
│  ├─ assets/
│  │  └─ images/                    # Imagens do projeto
│  ├─ common/
│  │  └─ constants/                 # Constantes
│  │  └─ hooks/                     # Hooks
│  │  └─ i18n/                      # Traduções
│  │  └─ styles/                    # Estilos globais
│  │  └─ utils/                     # Funções úteis
│  ├─ components/                   # Componentes reutilizáveis
│  ├─ containers/                   # Containers reutilizáveis com implementações dos components
│  ├─ pages/                        # Páginas com implementações dos containers
│  └─ routes/                       # Rotas de acesso as páginas
│  └─ services/                     # Arquivos de comunicação com API
├─ .czrc                            # Configurações do commitizen
├─ .editorconfig                    # Configurações de CodeStyle do editor
├─ .env.staging                     # Váriaveis de ambiente
├─ .eslintrc.js                     # Preferências do ESlint
├─ .gitignore                       # Lista de arquivos para serem ignorados pelo git
├─ commitlint.config.js             # Configuração das mensagens de commit
├─ dependency.yaml                  # Configuração para a GMUD automática
├─ lint-staged.config.js            # Configuração dos comandos para tarefas automatizadas
├─ package.json                     # Metadados do projeto, fornecido para o node.js
├─ prettier.config.js               # Configurações de formatação do Prettier
├─ tsconfig.json                    # Configurações de compilação do typescript
```
