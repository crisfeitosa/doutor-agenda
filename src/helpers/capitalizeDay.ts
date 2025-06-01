import "dayjs/locale/pt-br"

import dayjs, { Dayjs } from "dayjs"

dayjs.locale("pt-br")

/**
 * Retorna o nome do dia da semana com a primeira letra maiúscula.
 * Ex: Segunda, Terça, Quarta...
 */
export function capitalizeDay(date: Dayjs): string {
  const day = date.format("dddd").replace("-feira", "")
  return day.charAt(0).toUpperCase() + day.slice(1)
}

