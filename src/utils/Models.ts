export interface Event {
    id: string
    name: string
    markets?: Market[]
}

export interface Market {
    id: string
    name: string
    selections: Selection[]
}

export interface Selection {
    id: string
    name: string
    price: number
}

export interface MySelection {
    selection: Selection
    market:Market
}