import genreName from "./GenreName.ts";

type Deck = {
    name: string
    genre: genreName
    subgenre: string
    spd: number
    evm: number
    def: number
    str: number
    val: number
    slot1_name: string
    slot1_type: string
    slot2_name: string
    slot2_type: string
}

export default Deck