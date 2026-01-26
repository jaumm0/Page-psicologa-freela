# Configuração do EmailJS

Para que o formulário de agendamento envie emails para jv224063@gmail.com, você precisa configurar o EmailJS.

## Passo a Passo:

### 1. Instalar o pacote EmailJS
```bash
npm install @emailjs/browser
```

### 2. Criar conta no EmailJS
1. Acesse https://www.emailjs.com/
2. Crie uma conta gratuita
3. Faça login no painel

### 3. Adicionar um serviço de email
1. No painel do EmailJS, vá em "Email Services"
2. Clique em "Add New Service"
3. Escolha seu provedor de email (Gmail recomendado)
4. Siga as instruções para conectar sua conta
5. Anote o **Service ID** gerado

### 4. Criar um template de email
1. No painel, vá em "Email Templates"
2. Clique em "Create New Template"
3. Use o seguinte template:

**Subject:**
```
Nova Solicitação de Agendamento - {{from_name}}
```

**Content (HTML):**
```html
<h2>Nova Solicitação de Agendamento</h2>
<p><strong>Nome:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Telefone:</strong> {{phone}}</p>
<p><strong>Data Preferencial:</strong> {{date}}</p>
<p><strong>Horário Preferencial:</strong> {{time}}</p>
<p><strong>Mensagem:</strong></p>
<p>{{message}}</p>
<hr>
<p><em>Este email foi enviado através do formulário de agendamento do site.</em></p>
```

4. Configure o campo "To Email" como: `jv224063@gmail.com`
5. Configure o campo "Reply To" como: `{{reply_to}}`
6. Salve o template e anote o **Template ID**

### 5. Obter a Public Key
1. No painel, vá em "Account" > "General"
2. Copie sua **Public Key**

### 6. Atualizar o código
Abra o arquivo `src/components/BookingModal.jsx` e substitua:
- `YOUR_SERVICE_ID` pelo Service ID obtido no passo 3
- `YOUR_TEMPLATE_ID` pelo Template ID obtido no passo 4
- `YOUR_PUBLIC_KEY` pela Public Key obtida no passo 5

### Exemplo:
```javascript
await emailjs.send(
  'service_abc123',      // Service ID
  'template_xyz789',     // Template ID
  templateParams,
  'abcdefghijklmnop'     // Public Key
);
```

## Teste
Após configurar, teste o formulário preenchendo todos os campos e enviando. Você deve receber um email em jv224063@gmail.com com os dados do agendamento.

## Limites do plano gratuito
O plano gratuito do EmailJS permite até 200 emails por mês, o que é suficiente para a maioria dos casos.
