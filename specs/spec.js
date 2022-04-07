import {assert, expect} from 'chai'

describe('Array tests', ()=>{
    let names = ["Jackson","Rob","Jack","Wilson","John"]
    it('Assert the length of the array', ()=>{
        expect(names.length).to.equal(5)
    })

    it('Assert the name contains Daniel', ()=>{
        assert.isTrue(names.includes('Daniel'))
    })

    it('Assert length of filtered names', ()=>{
        let filteredNames = names.filter(name => name.startsWith('Jack'))
        expect(filteredNames.length).to.equal(2)
    })
})