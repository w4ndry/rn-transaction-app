export function toTitleCase(str: string) {
    if (str != '') {
        let strSplit = str.split(' ')
        if (strSplit[strSplit.length -1].length <= 4) {
            return capitalize(str)
        }
        return str.replace(
            /\w\S*/g,
            function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
            }
        );
    }
    return ''
}

export function capitalize(str: string) {
    return str.toUpperCase();
}

export function currencyFormat(number: number) {
    return `Rp${numberFormat(number)}`
}

export function numberFormat(number: number) {
    return number.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}