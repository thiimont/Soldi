package br.edu.fatecpg.soldi.dto.request;

import br.edu.fatecpg.soldi.model.TipoTransacao;

import java.math.BigDecimal;

public record AtualizarTransacaoDTO(TipoTransacao tipo, BigDecimal valor, String descricao, String categoria) {}