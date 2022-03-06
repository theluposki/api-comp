export default (number, lang = 'pt-br', currency = 'BRL') => {
    let Value = Number(number)
    return new Intl.NumberFormat(lang, { style: 'currency', currency }).format(Value)
}
