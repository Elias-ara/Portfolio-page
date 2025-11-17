#!/bin/bash

# 🧪 Teste de integração frontend + backend com curl

echo "🧪 Testando envio de email via endpoint..."
echo ""

curl -X POST http://localhost:3000/api/contact/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Teste Curl",
    "email": "test@example.com",
    "subject": "Teste com mais de 5 caracteres",
    "message": "Mensagem de teste com mais de 10 caracteres para validação"
  }' \
  -w "\n\nStatus HTTP: %{http_code}\n"

echo ""
echo "✅ Teste concluído!"
