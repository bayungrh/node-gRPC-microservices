const client = require('./util/client')
const assert = require('chai').assert

describe('Client Testing', function () {
    this.timeout(10000);
    it('create data first', (done) => {
        client.insert({
            name: 'Product 1',
            qty: 5,
            price: 2000
        }, (error, data) => {
            if (!error) {
                this._id = data._id
                assert.isNotEmpty(data)
                done()
            } else {
                assert.fail('failed')
                done()
            }
        })
    })
    it('should return list data products', (done) => {
        client.list({}, (error, data) => {
            if(!error) {
                assert.isNotEmpty(data)
                done()
            } else {
                assert.fail('Fail')
                done()
            }
        })
    })
    it('should return data with id', (done) => {
        client.get({ id: this._id }, (error, data) => {
            if(!error) {
                assert.equal(data._id, this._id)
                done()
            } else {
                assert.fail('Fail')
                done()
            }
        })
    })
    it('delete data', (done) => {
        client.delete({ id: this._id }, (error, data) => {
            if(!error) {
                assert.deepEqual(data, {})
                done()
            } else {
                assert.fail('Fail')
                done()
            }
        })
    })
})