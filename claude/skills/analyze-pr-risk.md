# Skill: analyze-pr-risk

Objetivo:
Analisar o risco de uma PR com base no escopo da mudança.

Entrada esperada:
- título da PR
- descrição da PR
- arquivos alterados
- diff resumido

Saída:
- risco: baixo, médio ou alto
- áreas impactadas
- tipos de teste recomendados
- justificativa curta

Política:
- não aprovar PR
- não sugerir merge automático
- priorizar smoke + regressão dirigida em fluxos críticos