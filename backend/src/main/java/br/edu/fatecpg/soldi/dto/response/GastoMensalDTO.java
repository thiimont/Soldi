package br.edu.fatecpg.soldi.dto.response;

import java.math.BigDecimal;

public record GastoMensalDTO(String label, BigDecimal revenue, BigDecimal cost){ }
