const formatMoney = (n: any) => {
    if (n === 0 || n === null) {
        return 'R$ 0,00'
    }
    if (typeof n === 'string' && n.includes('R$')) {
        let newNumber: any = n.substr(2).trim()

        newNumber = newNumber.replace(/\./g, '')
        newNumber = newNumber.replace(',', '.')
        newNumber = parseFloat(newNumber)

        return newNumber
    }

    return (
        'R$ ' +
        parseFloat(n)
            .toFixed(2)
            .replace('.', ',')
            .replace(/(\d)(?=(\d{3})+\,)/g, '$1.')
    )
}

const formatDate = (date: string) => {
    if (!date) return
    if (date.includes('T')) {
        date = date.split('T')[0]
    }
    if (date.includes('/')) {
        const year = date.split('/')[2],
            month = date.split('/')[1],
            day = date.split('/')[0],
            newDate = year + '/' + month + '/' + day

        return newDate
    }

    if (date.length >= 9) {
        const year = date.split('-')[0],
            month = date.split('-')[1],
            day = date.split('-')[2],
            newDate = day + '/' + month + '/' + year

        return newDate
    }

    const year = date.substr(0, 4),
        month = date.substr(4, 2),
        day = date.substr(6, 2),
        newDate = day + '/' + month + '/' + year

    return newDate
}

const addDaysToDate = (date: string, days: number) => {
    var result: any = new Date(date)
    result.setDate(result.getDate() + days)
    return result
}

const subDaysToDate = (date: string, days: number) => {
    var result: any = new Date(date)
    result.setDate(result.getDate() - days)
    return result
}

const dateToISOString = (date: string) => {
    const year = date.split('/')[2],
        month = date.split('/')[1],
        day = date.split('/')[0],
        newDate = new Date(year + '-' + month + '-' + day).toISOString()

    return newDate
}

const formatAccountDigit = (string: string) => {
    if (!string) return ''
    string = string.replace(/\-/g, '')
    let newString = string
    if (string.length > 1) {
        newString = string.substr(0, string.length - 1) + '-' + string.substr(-1)
    }
    return newString
}

const formatCnpj = (cnpj: string) => {
    return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
}

const formatCpf = (cpf: string) => {
    return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

const formatCpfCnpj = (text: string) => {
    if (text.length === 11) {
        return formatCpf(text)
    } else if (text.length === 14) {
        return formatCnpj(text)
    } else {
        return ''
    }
}

const clearCpfCnpj = (cpfcnpj: string) => {
    if (cpfcnpj) return cpfcnpj.replace(/\D/g, '')
}

const getDbDate = () => {
    const date = new Date(),
        y = date.getFullYear(),
        m = date.getMonth() + 1,
        d = date.getDate(),
        h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
        min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
        s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

    return `${y}-${m}-${d} ${h}:${min}:${s}`
}

const cardMask = (number: string) => {
    return number.replace(/^(.{4})(.{4})(.{4})(.{4})/, '$1 $2 $3 $4')
}

const contactMask = (contact: string) => {
    return contact.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
}

const cepMask = (cep: string) => {
    return cep.replace(/^(\d{4})(\d{4})/, '$1-$2')
}

const formatDateTime = (date: Date, isToDb = false) => {
    date = new Date(date)
    const d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    const m = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
    const y = date.getFullYear()

    const h = date.getUTCHours() < 10 ? '0' + date.getUTCHours() : date.getUTCHours()
    const min = date.getUTCMinutes() < 10 ? '0' + date.getUTCMinutes() : date.getUTCMinutes()
    const s = date.getUTCSeconds() < 10 ? '0' + date.getUTCSeconds() : date.getUTCSeconds()

    if (isToDb) return `${y}-${m}-${d} ${h}:${min}:${s}`

    return `${d}/${m}/${y} ${h}:${min}`
}

const removeHtmlFromText = (text: string): string => {
    if(!text) return ""
    return Array.from(text.replace(/<[^>]*>?/gm, ' ')).filter((i, index, arr) => {
        if(index > 0 && arr[index - 1] === " " && i === " ") {
            return false
        } else {
            return true
        }
    }).join("").trim()
}
export default {
    formatMoney,
    formatDate,
    addDaysToDate,
    subDaysToDate,
    dateToISOString,
    formatAccountDigit,
    formatCnpj,
    formatCpf,
    formatCpfCnpj,
    clearCpfCnpj,
    getDbDate,
    cardMask,
    contactMask,
    cepMask,
    formatDateTime,
    removeHtmlFromText
}
