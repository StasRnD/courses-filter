import {data, getCourses, Prices} from './getCourses'

describe('getCourses функция', () => {
    describe('фильтрация курсов по цене', () => {
      it('цена from не указана', () => {
        const requiredRange: Prices = [null, 200]
        expect(getCourses(data, requiredRange).length).toEqual(7)
      })
  
      it('обе цены указаны', () => {
        const requiredRange: Prices = [100, 350]
        expect(getCourses(data, requiredRange).length).toEqual(7)
      })
  
      it('цена to не указана', () => {
        const requiredRange: Prices = [200, null]
        expect(getCourses(data, requiredRange).length).toEqual(7)
      })
  
      it('обе цены не указаны', () => {
        const requiredRange: Prices = [null, null]
        expect(getCourses(data, requiredRange).length).toEqual(data.length)
      })
    })
  })