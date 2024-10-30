# 📱 Aplicativo CAA

Aplicativo de Comunicação Aumentativa e Alternativa para Crianças com TEA

## ✨ Descrição

**Aplicativo CAA** é uma ferramenta de comunicação alternativa voltada para crianças no espectro autista. Com uma interface amigável, permite que as crianças se comuniquem por meio de cards visuais e frases, facilitando a interação com familiares e cuidadores. O app funciona tanto online quanto offline, oferecendo uma experiência adaptativa conforme a conectividade.

## 🧩 Funcionalidades

- **Cards de Comunicação**: Visualize cards com imagens e palavras/frases para facilitar a comunicação.
- **Busca de Imagens**: Permite buscar e adicionar imagens da internet quando conectado.
- **Acesso Offline**: Salva os cards favoritos para acesso sem internet.
- **Personalização de Cards**: Adicione e personalize os cards de comunicação para se adaptar às necessidades da criança.
- **Armazenamento em Nuvem e Local**: Imagens são armazenadas no dispositivo para acesso rápido, e links em nuvem são salvos para acesso entre dispositivos.

## 🚀 Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento mobile multiplataforma.
- **SQLite**: Banco de dados local e offline para armazenamento de dados estruturados.
- **Supabase**: Plataforma em nuvem para sincronização de dados e armazenamento de imagens, além de funcionalidades de backend como autenticação.
- **React Navigation**: Biblioteca para navegação entre telas no app.

## 🎨 Design e Interface

A interface foi projetada para ser colorida e intuitiva, com:
- Ícones grandes e de fácil compreensão
- Tipografia clara e simples
- Navegação fluida para crianças e cuidadores

## 🖥️ Como Usar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/GaaDias/Aplicativo_CAA.git
   cd Aplicativo_CAA
2. **Instale as dependências:**
   ```bash
   npm install
3. **Configuração do Supabase:**
 - Crie um projeto no Supabase.
 - No painel do Supabase, configure um bucket para armazenar imagens e habilite a autenticação, se necessário.
 - Adicione as credenciais (URL do Supabase e chave pública) ao arquivo **``.env``** do projeto:
   ```bash
   SUPABASE_URL=<sua_url_do_supabase>
   SUPABASE_KEY=<sua_chave_publica_do_supabase>

4. **Execute o aplicativo:**
   ```bash
   npx react-native run-android # ou run-ios
 - No Expo Go, escaneie o QR Code para testar o app em um dispositivo móvel.

## 📂 Estrutura de Pastas

```plaintext
.
├── src
│   ├── components    # Componentes reutilizáveis
│   ├── pages         # Telas do aplicativo
│   ├── assets        # Imagens e ícones locais
│   ├── navigation    # Configuração de navegação
│   ├── services      # Serviços de API e funções auxiliares
│   └── utils         # Utilitários e funções de suporte
├── .gitignore
├── App.js
├── README.md
└── package.json
```

## ⚠️ Nota Importante

As instruções de uso deste README são fornecidas apenas para execução e desenvolvimento local com permissão do autor. Este projeto não possui licença, e o uso, modificação ou distribuição do código é restrito. Para solicitar autorização, entre em contato.