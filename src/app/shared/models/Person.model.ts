export class Person {
    id?: number;
    name: string;
    ssd: boolean;
    ram: number;
    net: boolean;
    row: number;

    constructor(id: number, name: string, ssd: boolean, ram: number, net: boolean, row: number) {
        this.id = id;
        this.name = name;
        this.ssd = ssd;
        this.ram = ram;
        this.net = net;
        this.row = row;
      }
}