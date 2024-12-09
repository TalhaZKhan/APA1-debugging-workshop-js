function capitalise(input) {
  if (!input) return ''; 
  return input[0].toUpperCase() + input.slice(1).toLowerCase();
}

module.exports = { capitalise };
