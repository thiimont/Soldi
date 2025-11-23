package br.edu.fatecpg.soldi.dto.response;

import br.edu.fatecpg.soldi.model.TipoTransacao;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

public record TransacaoResumoDTO(UUID uuidTransacao, TipoTransacao tipo, BigDecimal valor, String descricao, String categoria, LocalDateTime dataTransacao) {}