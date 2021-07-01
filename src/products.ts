
/**
 * @class Products, contiene atributos de los productos y su collectin
 */
export class Products {
  
  /**
   * Constructor que inicializa los valores del producto
   * @param name 
   * @param description 
   * @param ffab 
   * @param fcad 
   * @param nL 
   * @param ingredients 
   * @param nutricionalI 
   * @param weightKg 
   * @param price 
   * @param stock 
   */
  constructor(private name: string, private description: string, private ffab: string, private fcad: string, private nLote:number|string, private ingredients= [],private nutricionalI=[], private weightKg: number, private price: number, private stock: number) {
  }

  /**
   * Getter del nombre del producto
   * @returns el nombre
   */
  getName(): string {
    return this.name;
  }

  /**
   * Getter de la descripción
   * @returns 
   */
  getDes(): string {
    return this.description;
  }

  /**
   * Getter Fechas de fabricacion
   * @returns 
   */
  getFFab(): string {
    return this.ffab;
  }

  /**
   * getter fecha cad
   * @returns 
   */
  getFCad(): string {
    return this.fcad;
  }

  /**
   * getter numero de lote
   * @returns 
   */
  getNLote(): number|string {
    return this.nLote;
  }

  /**
   * getter peso
   * @returns 
   */
  getWeight(): number{
    return this.weightKg;
  }

  /**
   * getter precio
   * @returns 
   */
  getPrice(): number{
    return this.price;
  }

  /**
   * getter stock
   * @returns 
   */
  getStock(): number{
    return this.stock;
  }


} 