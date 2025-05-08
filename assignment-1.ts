function formatString(input: string, toUpper?: boolean): string {
  if (
    (typeof toUpper === "boolean" && toUpper) ||
    typeof toUpper === "undefined"
  ) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

interface Book {
  title: string;
  rating: number;
}
function filterByRating(items: Book[]): Book[] {
  const filteredItems = items.filter((item) => item.rating >= 4);

  return filteredItems;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  let resArr: T[] = [];
  arrays.forEach((item) => {
    resArr.push(...item);
  });
  return resArr;
}

class Vehicle {
  constructor(private make: string, private year: number) {}
  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make: string, year: number, private model: string) {
    super(make, year);
  }
  getModel() {
    return `Model: ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();
myCar.getModel();

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

interface Product {
  name: string;
  price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products?.length > 0) {
    return products.reduce((max, item) => {
      return item.price > max.price ? item : max;
    });
  } else {
    return null;
  }
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

async function squareAsync(n: number): Promise<number> {
  if (n < 0) {
    throw new Error("Negative");
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(n * n);
    }, 1000);
  });
}
