export class Person {
    id: number;
    name: string;
    ssd: boolean;
    ram: number;
    net: boolean;

    constructor(id: number, name: string, ssd: boolean, ram: number, net: boolean) {
        this.id = id;
        this.name = name;
        this.ssd = ssd;
        this.ram = ram;
        this.net = net;
      }
}