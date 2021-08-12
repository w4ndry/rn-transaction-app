import { dateToMilliseconds } from './dateFormat'
import { currencyFormat } from './stringManipulation'
import { NAMA_A_Z, TANGGAL_TERBARU, NAMA_Z_A, TANGGAL_TERLAMA } from '../constants/label'

interface SearchItem {
    sender_bank: string,
    beneficiary_name: string,
    beneficiary_bank: string,
    amount: number,
}

export const contains = ({ sender_bank, beneficiary_name, beneficiary_bank, amount }: SearchItem, query: string) => {
    if (
        sender_bank.toLowerCase().indexOf(query) !== -1 ||
        beneficiary_name.toLowerCase().indexOf(query) !== -1 ||
        beneficiary_bank.toLowerCase().indexOf(query) !== -1 ||
        amount.toString().indexOf(query) !== -1 ||
        currencyFormat(amount).indexOf(query) !== -1
    ) {
        return true
    }
    return false
}

export const sortByName = (x: string, y: string, value: string) => {
    if (value == NAMA_A_Z) {
        return x < y ? -1 : x > y ? 1 : 0;
    } else {
        return x < y ? 1 : x > y ? -1 : 0;
    }
}

export const sortByDate = (x: number, y: number, value: string) => {
    if (value == TANGGAL_TERBARU) {
        return y - x;
    } else {
        return x - y;
    }
}

export const sortedBy = (a, b, value: string) => {
    if ([NAMA_A_Z, NAMA_Z_A].includes(value)) {
        let x = a.beneficiary_name.toLowerCase();
        let y = b.beneficiary_name.toLowerCase();
        return sortByName(x, y, value)
    } else if ([TANGGAL_TERBARU, TANGGAL_TERLAMA].includes(value)) {
        let x = dateToMilliseconds(a.created_at)
        let y = dateToMilliseconds(b.created_at)
        return sortByDate(x, y, value)
    }
}