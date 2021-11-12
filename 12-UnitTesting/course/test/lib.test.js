const lib = require("../lib");
const db = require("../db");
const mail = require("../mail");

describe("absolute", () => {
  it("should return a +ve number if input is +ve", () => {
    const res = lib.absolute(1);
    expect(res).toBe(1);
  });

  it("should return a +ve number if input is -ve", () => {
    const res = lib.absolute(-1);
    expect(res).toBe(1);
  });

  it("should return a 0 number if input is 0", () => {
    const res = lib.absolute(0);
    expect(res).toBe(0);
  });
});

describe("greet", () => {
  it("should return the greeting message", () => {
    const res = lib.greet("Nitesh");
    expect(res).toMatch(/Nitesh/);
  });
});

describe("getCurrencies", () => {
  it("should return supported currencies", () => {
    const result = lib.getCurrencies();
    expect(result).toEqual(expect.arrayContaining(["USD", "EUR", "AUD"]));
  });
});

describe("getProduct", () => {
  it("should return product with given id", () => {
    const result = lib.getProduct(1);
    expect(result).toMatchObject({ id: 1, price: 10 });
    expect(result).toHaveProperty("id", 1);
  });
});

describe("registerUser", () => {
  it("should throw error if username is falsy", () => {
    const args = [null, undefined, NaN, "", 0, false];
    args.forEach((a) => {
      expect(() => {
        lib.registerUser(a);
      }).toThrow();
    });
  });

  it("should return user object if valid username is passed", () => {
    const result = lib.registerUser("Nitesh");
    expect(result).toHaveProperty("username", "Nitesh");
    expect(result.id).toBeGreaterThan(0);
  });
});

describe("applyDiscount", () => {
  it("should apply 10% discount if customer points is greater than 10", () => {
    db.getCustomerSync = (customerId) => {
      console.log("Fake reading...");
      return { id: customerId, points: 11 };
    };

    const order = { customerId: 1, totalPrice: 10 };
    lib.applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });
});

describe("notifyCustomer", () => {
  it("should send an email to customer", () => {
    // Normal approach

    // db.getCustomerSync = (id) => {
    //   return { email: "abc@a.co" };
    // };

    // let mailSend = false;
    // mail.send = (email, message) => {
    //   mailSend = true;
    // };

    // Using Jest Mock function

    db.getCustomerSync = jest.fn().mockReturnValue({ email: "a" });
    mail.send = jest.fn();

    lib.notifyCustomer({ customerId: 1 });

    expect(mail.send).toHaveBeenCalled();
    expect(mail.send.mock.calls[0][0]).toBe("a");
    expect(mail.send.mock.calls[0][1]).toMatch(/order/);
  });
});
