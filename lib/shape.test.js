const { Circle } = require('./shape')

describe('Tests for Circle Class', () => {
    test('Will this create and object', () => {
        const circle = new Circle();

        expect(typeof circle).toBe('object')
    })

    test('will this return the svg', () => {
        const circle = new Circle('red', "MAD", "white")

        expect(circle.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="red" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">MAD</text>
      
      </svg>
        `)
    })
});

const { Triangle } = require('./shape')

describe('Tests for Triangle Class', () => {
    test('Will this create and object', () => {
        const triangle = new Triangle();

        expect(typeof triangle).toBe('object')
    })

    test('will this return the svg', () => {
        const triangle = new Triangle('red', "MAD", "white")

        expect(triangle.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>
        `)
    })
});

const { Square } = require('./shape')

describe('Tests for Square Class', () => {
    test('Will this create and object', () => {
        const square = new Square();

        expect(typeof square).toBe('object')
    })

    test('will this reutrn the svg', () => {
        const square = new Square('')
        expect(square.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>
        `)
    })
});


