# Instruções de QA para este repositório

Objetivo desta PoC:
- validar automaticamente PRs aprovadas
- usar IA para apoiar análise de risco e desenho de testes
- publicar evidências e resumo claro na PR

Áreas de alto risco:
- autenticação
- autorização
- cálculo
- integrações
- persistência de dados críticos
- regras centrais de negócio

Ao analisar mudanças:
- classifique o risco como baixo, médio ou alto
- explique o motivo da classificação
- sugira os tipos de teste necessários
- priorize smoke e regressão dirigida
- sugira testes Playwright para UI crítica
- sugira testes de API para validação de backend e contratos

Regras:
- nunca aprovar PR automaticamente
- nunca sugerir merge automático
- nunca remover testes críticos sem justificativa
- sempre considerar impacto no usuário final
- sempre responder de forma objetiva e auditável