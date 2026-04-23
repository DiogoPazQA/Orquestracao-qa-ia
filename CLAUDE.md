# QA Orchestration PoC

Objetivo:
Executar automaticamente validações de QA quando uma PR for aprovada.

Regras permanentes:
- nunca aprovar PR
- nunca fazer merge
- nunca alterar políticas do repositório
- executar apenas comandos previstos no pipeline
- publicar resumo final claro e objetivo
- distinguir, quando possível, falha de produto, falha de teste e falha de ambiente

Fluxo esperado:
1. Ler contexto da PR
2. Executar testes previstos
3. Coletar artifacts
4. Resumir resultado
5. Comentar na PR

Formato do resumo:
- risco estimado
- testes executados
- resultado
- provável causa da falha, se houver
- próximos passos