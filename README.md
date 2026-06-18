# Churrasquinho Vianense — Landing Page

Landing page estática para presença digital local do Churrasquinho Vianense.

## Arquivos

- `index.html`: estrutura da página
- `style.css`: estilos visuais e responsividade
- `script.js`: menu mobile, links de WhatsApp e animações
- `assets/img/`: imagens do projeto

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos deste projeto para a branch `main`.
3. Vá em `Settings > Pages`.
4. Em `Build and deployment`, selecione:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Salve.
6. Em `Custom domain`, coloque:
   `churrasquinhovianense.com.br`

## DNS no Registro.br

Configure:

```text
A      185.199.108.153
A      185.199.109.153
A      185.199.110.153
A      185.199.111.153
www    CNAME    camargo-lg.github.io
```

No Registro.br, para os registros A do domínio principal, deixe o campo `Nome` vazio.

## WhatsApp

O telefone está configurado no arquivo `script.js`:

```js
const PHONE = "5527995806969";
```

Para trocar o número ou as mensagens automáticas, edite esse arquivo.
