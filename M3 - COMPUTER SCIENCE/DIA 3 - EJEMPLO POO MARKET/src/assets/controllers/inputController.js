export let formValues = {}; //Aqui iran los valores del formulario

export function onChangeInput(event) {
  formValues = { ...formValues, [event.target.id]: event.target.value };
  console.log(formValues);
}
