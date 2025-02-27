import { describe, expect, test } from 'vitest';
import { Consumible, Alimento, Bebida} from '../src/modi/alimento'

describe('Alimento test', () => {
        
        test('Creación de objeto', () => {
                const oreo = new Alimento("Oreo", 777, -2, [50, 100, 2, 1], 200, true)
                expect(oreo.name).toBe("Oreo")
                expect(oreo.id).toBe(777)
                expect(oreo.nutriscore).toBe(-2)
                expect(oreo.info_nutricional).toStrictEqual([50, 100, 2, 1])
                expect(oreo.gramos).toBe(200)
                expect(oreo.rico).toBe(true)
        })

        test('Show Info', () => {
                const oreo = new Alimento("Oreo", 777, -2, [50, 100, 2, 1], 200, true)
                expect(oreo.ShowInfo()).toBe("Alimento: Oreo(777)\nNutriscore: -2\nInfo: 50,100,2,1\nPeso (g): 200\nEstoy buenisimo!")
        })
})

describe('Bebida test', () => {
        
        test('Creación de objeto', () => {
                const cola = new Bebida("Cola", 888, -500, [50, 200, 0, 0], 250, true)
                expect(cola.name).toBe("Cola")
                expect(cola.id).toBe(888)
                expect(cola.nutriscore).toBe(-500)
                expect(cola.info_nutricional).toStrictEqual([50, 200, 0, 0])
                expect(cola.mililitros).toBe(250)
                expect(cola.gas).toBe(true)
        })

        test('Show Info', () => {
                const cola = new Bebida("Cola", 888, -500, [50, 200, 0, 0], 250, true)
                expect(cola.ShowInfo()).toBe("Bebida: Cola(888)\nNutriscore: -500\nInfo: 50,200,0,0\nVolumen (g): 250\nTengo gas!")
        })
})