import "mocha";
import { expect} from "chai";
import { Products } from "../src/products";

let p = new Products("sopa-de-sobre", "elaborado de sopa", "01-07-2021", "31-12-2021", "300", [],[], 0.3, 1, 200)

describe("Products tests", () => {
    it("Revisamos el nombre del producto", () => {
      expect(p.getName()).to.be.equal('sopa-de-sobre');
    });
  });