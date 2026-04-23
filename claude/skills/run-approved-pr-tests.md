# Skill: run-approved-pr-tests

Objetivo:
Executar a suíte da PoC após aprovação de PR.

Execução padrão:
1. Rodar lint
2. Rodar smoke
3. Rodar regressão crítica
4. Coletar artifacts
5. Preparar resumo final

Saída:
- total de testes executados
- total aprovados
- total falhos
- caminho dos artifacts
- resumo curto para PR