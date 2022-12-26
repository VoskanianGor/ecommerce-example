const getPriceInRub = (price: number, exchangeRate: number) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  }).format(Math.round(price * exchangeRate))
}

export default getPriceInRub
