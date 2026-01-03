export function formatFechaLarga(fechaStr: string): string {
  const date = new Date(fechaStr + "T00:00:00");
  const opciones: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  let formateada = date.toLocaleDateString("es-MX", opciones);
  formateada = formateada.replace(" de ", " de ").replace(" del ", " del ");

  return formateada;
}
