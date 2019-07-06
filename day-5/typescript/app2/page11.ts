class Person {
    name: string
    age: number
}

// collection of method declarations and properties
// pure virutal functions
interface Shape {
    erase()
    area()
}

interface MyInterface {
    mymethod()
}

class Circle implements Shape, MyInterface {

    erase() {
       console.log('Circle is erased')
    }

    area() {
        console.log('area of Circle')
    }

    circleMethod() {
        console.log('inside Circle method')
    }

    mymethod() {
        console.log('my method')
    }
}

class Rectangle implements Shape {

    erase() {
       console.log('reactangle is erased')
    }

    area() {
        console.log('area of rectangle')
    }

}

class Polygon {
    erase() {
        console.log('Polygon is erased')
    }
 
    area() {
         console.log('area of Polygon')
    }
}

// reference          // object
// type               // type
const circle: MyInterface = new Circle()
// circle.erase()
// circle.area()
circle.mymethod()
// circle.circleMethod()

const rectangle: Shape = new Rectangle()
rectangle.erase()
rectangle.area()

function execute(obj: Shape) {
    // obj: Shape = rectangle
    obj.area()
}

execute(circle)
execute(rectangle)

const p = new Polygon()

execute(p)