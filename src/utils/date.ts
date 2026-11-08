/** Displays dates in Philippine Time; shows time only when explicitly supplied. */
export function publishedLabel(date: Date, hasTime = false): string {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Manila', year: 'numeric', month: 'long', day: 'numeric',
    ...(hasTime ? { hour: 'numeric', minute: '2-digit', hour12: true } : {})
  });
  return `Published ${formatter.format(date)}${hasTime ? ' PHT' : ''}`;
}
