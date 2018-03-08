const expect = require('chai').expect;
const platzon = require('..').default;

describe('#platzon', function () {
    it('Si la palabra termina en a',function () {
        const result = platzon("Programar");
        expect(result).to.equal("Program");
    })
  
     it('Otra prueba 2',function () {
        const result = platzon("Zorro");
        expect(result).to.equal("Zorrope");
     })

    it('Otra prueba 3',function () {
        const result = platzon("ABECEDARIO");
        expect(result).to.equal("ABECE-DARIO");
     })

    it('Otra prueba 4',function () {
        const result = platzon("sometemos");
        expect(result).to.equal("SoMeTeMoS");
     })

})