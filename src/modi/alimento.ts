/**
 * Clase abstracta que define a un consumible
 */
export abstract class Consumible {
        private _name: string
        private _id: number
        private _nutriscore: number
        private _info_nutricional: [grasas: number, hidratos: number, proteinas: number, fibra: number]

        /**
         * Constructor de la clase
         * @param name nombre del consumible
         * @param id id del consumible
         * @param nutriscore puntuacion nutricional
         * @param info_nutricional info nutricional (grasas, hidratos, proteinas, fibra)
         */
        constructor(name: string, id: number, nutriscore: number, info_nutricional: [grasas: number, hidratos: number, proteinas: number, fibra: number]) {
                this._name = name
                this._id = id
                this._nutriscore = nutriscore
                this._info_nutricional = info_nutricional
        }

        /**
         * Getter de name
         */
        get name() {
                return this._name
        }
        /**
         * Getter de id
         */
        get id() {
                return this._id
        }
        /**
         * Getter de nutriscore
         */
        get nutriscore() {
                return this._nutriscore
        }
        /**
         * Getter de la info nutricional
         */
        get info_nutricional() {
                return this._info_nutricional
        }

        /**
         * Setter de name
         */
        set name(name: string) {
                this._name = name
        }
        /**
         * Setter de id
         */
        set id(id: number) {
                this._id = id
        }
        /**
         * Setter de nutriscore
         */
        set nutriscore(nutriscore: number) {
                this._nutriscore = nutriscore
        }
        /**
         * Setter de información
         */
        set info_nutricional(info_nutricional: [grasas: number, hidratos: number, proteinas: number, fibra: number]) {
                this._info_nutricional = info_nutricional
        }

        /**
         * Método abstracto que retorna una string con la info del consumible
         */
        abstract ShowInfo(): string
}

/**
 * Clase alimento que hereda de la clase abstracta consumible
 */
export class Alimento extends Consumible {
        private _gramos: number
        private _rico: boolean

        /**
         * Constructor de la clase que inicializa la clase superior y añade gramos y si está rico
         * @param gramos peso del alimento
         * @param rico indica si está rico
         */
        constructor(name: string, id: number, nutriscore: number, info_nutricional: [grasas: number, hidratos: number, proteinas: number, fibra: number], gramos: number, rico: boolean) {
                super(name, id, nutriscore, info_nutricional)
                this._gramos = gramos
                this._rico = rico
        }

        /**
         * Getter de gramos
         */
        get gramos() {
                return this._gramos
        }
        /**
         * Getter de rico
         */
        get rico() {
                return this._rico
        }
        /**
         * Setter de gramos
         */
        set gramos(gramos: number) {
                this._gramos = gramos
        }
        /**
         * Setter de rico
         */
        set rico(rico: boolean) {
                this._rico = rico
        }

        /**
         * Método que devuelve la string con la info nutricional
         * @returns string con la info
         */
        ShowInfo(): string {
                let result: string = "Alimento: " + this.name + "(" + this.id + ")\n" + "Nutriscore: " + this.nutriscore + "\nInfo: " + this.info_nutricional + "\nPeso (g): " + this._gramos
                if (this._rico) {
                        result += "\nEstoy buenisimo!"
                }
                else {
                        result += "\nEstoy malísimo!"
                }
                return result
        }
}
export class Bebida extends Consumible {
        private _mililitros: number
        private _gas: boolean

        /**
         * Constructor de la clase que inicializa la clase superior y añade miliitros y si tiene gas
         * @param mililitros volumen del alimento
         * @param gas indica si tiene gas o no
         */
        constructor(name: string, id: number, nutriscore: number, info_nutricional: [grasas: number, hidratos: number, proteinas: number, fibra: number], mililitros: number, gas: boolean) {
                super(name, id, nutriscore, info_nutricional)
                this._mililitros = mililitros
                this._gas = gas
        }

        /**
         * Getter de mililitros
         */
        get mililitros() {
                return this._mililitros
        }
        /**
         * Getter de gas
         */
        get gas() {
                return this._gas
        }
        /**
         * Setter de mililitros
         */
        set mililitros(mililitros: number) {
                this._mililitros = mililitros
        }
        /**
         * Setter de gas
         */
        set gas(gas: boolean) {
                this._gas = gas
        }

        /**
         * Método que devuelve string con la info del alimento
         * @returns string con la info
         */
        ShowInfo(): string {
                let result: string = "Bebida: " + this.name + "(" + this.id + ")\n" + "Nutriscore: " + this.nutriscore + "\nInfo: " + this.info_nutricional + "\nVolumen (g): " + this._mililitros
                if (this._gas) {
                        result += "\nTengo gas!"
                }
                else {
                        result += "\nNo tengo gas!"
                }
                return result
        }
}
