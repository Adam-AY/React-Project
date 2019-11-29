export default class Calculation {
    constructor(expression) {
        this.expression = expression;
        this.a = 0;
        this.b = 0;
    }

    addition() {
        return this.a + this.b;
    }

    subtraction() {
        return this.a - this.b;
    }

    production() {
        return this.a * this.b;
    }

    division() {
        return this.a / this.b;
    }

    calculate() {

        console.log(this.expression)

        let pattern = null;

        /*  ------@DONE-------  */

        pattern = new RegExp(/^(([0-9]+[.])?[0-9]+)[ ]?([\/\+\-\*])[ ]?(([0-9]+[.])?[0-9]+)$/)

        /* ------------------- */

        if (this.expression.match(pattern)) {
            let matches = pattern.exec(this.expression);

            let sign = matches[3];

            /*  ------@DONE-------  */

            this.a = parseFloat(matches[1])
            this.b = parseFloat(matches[4])

            /* ------------------- */

            let result = false;

            switch (sign) {
                case '+':
                    result = this.addition();
                    break;
                case '-':
                    result = this.subtraction();
                    break;
                case '*':
                    result = this.production();
                    break;
                case '/':
                    result = this.division();
                    break;
            }

            return result;
        }
        else {
            return false;
        }
    }
}
