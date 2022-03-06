export default (date, lang = 'pt-br', type = 'long') => {
    return new Intl.DateTimeFormat(lang, { dateStyle: 'full', timeStyle: type }).format(date)
}