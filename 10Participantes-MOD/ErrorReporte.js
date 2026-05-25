export class ErrorInst extends Error {
        constructor(message) {
            super(message)
            this.name = "ErrorInst"
            this.codigo = 404
        }
    }