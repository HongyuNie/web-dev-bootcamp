* Making Strings

    `let color = "purple"`

    `let city = 'Tokyo'`

* Length property with no parentheses

    `city.length `

* Access specific characters using their index

    `city[0]` 'T'

    `city[3]` 'y'

* `'/You had me at "hello"/i'` OR `'You had me at \"hello\"'` : You had me at "hello"

* The first variable can not be changed, second one is a complete new string, different places in memory, so no problems on the same naming?

    `let firstName = "River"`

    `firstName = "river"` 

* Can not update one char, but can overwrite the entire string 

* `1 + ' i'`  '1i', coerce to a common string type


* String methods (with parentheses)

    `'hello'.toUpperCase()` "HELLO"

    `'LOL'.toLowerCase()` "lol"

    `'    omg  '.trim()` "omg", trim white spaces

* String methods with arguments

    `indexOf()` returns the index where the character is found (or -1 if not found)

        'spider'.indexOf('i') 2

        'spider'.indexOf('spi') 0

        'vesuvius'.indexOf('u') 3 - only returns FIRST matching index

        'cactus'.indexOf('z') -1 not found

    `Slice()` - returns a "slice" of a string

        "pancake".slice(3) "cake" - slice from index 3 onwards

        "pancake".slice(0, 3) "pan" - slice from index 0 to index 2, endIndex 3 excluded

        "pancake".slice(-3) given the last 3 characters


    `Replace()` - returns a new string, with the FIRST match replaced
        "pump".replace("p", "b") "bump" - only replaces first "p", also has replaceAll()



* String Template Literals

    Create strings where we can embed a expression ${} inside, the expression will be evaluated and turned into a string

    Use backtick characters, NOT SINGLE QUOTES!

        const color_1 = "olive green"

        const msg = `My favorite color is: ${color}` "My favorite color is: olive green"

        const str = `There are ${60 * 60 * 24} seconds in a day` "There are 86400 seconds in a day"



* Primitive types: Number/String/Boolean/Null/Undefined

        Null:  can be use as assign value to a variable

* Math Object

    Math.floor(23.9999) 23

    Math.ceil(23.001) 24
    
    Math.floor(Math.random() * 10) + 1 get a random number from 1 to 10