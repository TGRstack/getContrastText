import { sumArray } from './array/array'
import HelloWorld from './hello/HelloWorld'

const FirstPart = 'Sum:'
const LastPart =  sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9])

// tslint:disable-next-line no-console
console.log(HelloWorld(FirstPart, LastPart))

export default HelloWorld
