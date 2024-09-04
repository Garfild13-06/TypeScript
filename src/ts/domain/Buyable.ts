export default interface Buyable {
    readonly id: number,
    readonly name: string,
    readonly price: number,
    isPhysical: boolean;  // Новое поле для обозначения типа товара
}
