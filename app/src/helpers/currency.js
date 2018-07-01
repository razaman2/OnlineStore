export const currency = value => {
  return Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD'
  }).format(value).replace('$', '');
};
