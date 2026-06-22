export function mapInputs(e) {
  const campos = {};
  const form = e.target;
  for (const input of form) {
    if (input.name) {
      campos[input.name] = input.value;
    }
  }
  return campos;
}