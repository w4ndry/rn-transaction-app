
const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Ocktober',
    'November',
    'Desember'
]

export function formatDate(date: string) {
    let parseDate = date.split('-').join('/')
    let d = new Date(parseDate),
        day = '' + d.getDate(),
        month = '' + months[d.getMonth()],
        year = d.getFullYear();

    return `${day} ${month} ${year}`;
}

export function dateToMilliseconds(date: string) {
    let parseDate = date.split('-').join('/')
    let d = new Date(parseDate)

    return d.getTime();
}