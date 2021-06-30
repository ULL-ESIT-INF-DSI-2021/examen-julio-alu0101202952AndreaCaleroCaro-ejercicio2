"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.substract = exports.add = void 0;
/**
 * Adds two numbers
 * @param firstNumber Consists of the first numeric operand of the addition
 * @param secondNumber Consists of the second numeric operand of the addition
 * @return The addition of the two numbers `firstNumber` and `secondNumber`
 *
 * Usage:
 * ```typescript
 * add(1, 7) = 8
 * add(1.7, 3.5) = 5.2
 * ```
 */
function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
exports.add = add;
/**
 * Substracts two numbers
 * @param firstNumber Consists of the first numeric operand of the substraction
 * @param secondNumber Consists of the second numeric operand of the substraction
 * @return The substraction of the two numbers `firstNumber` and `secondNumber`
 *
 * Usage:
 * ```typescript
 * substract(7, 1) = 6
 * substract(8.6, 3.3) = 5.3
 * ```
 */
function substract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}
exports.substract = substract;
