export class FactHistory {
    time: string;
    number: number;
    type: string;
    fact: string;

    constructor(time: string, number: number, type: string, fact: string) {
        this.time = time;
        this.number = number;
        this.type = type;
        this.fact = fact;
    }
}
