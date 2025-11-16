package br.edu.fatecpg.soldi.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SaldoResponseDTO {
    private BigDecimal saldoTotal;
    private BigDecimal totalReceitas;
    private BigDecimal totalDespesas;
}