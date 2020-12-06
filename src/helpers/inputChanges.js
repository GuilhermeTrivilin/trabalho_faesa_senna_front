export const handleChangeText = (event, set) => {
  const { value } = event.target;

  set(value);
};