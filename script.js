class Students {
  constructor(name, address, phone, course) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.course = course;
  }

  getInfo() {
    return (
      "Name: " +
      this.name +
      "\n" +
      "Address: " +
      this.address +
      "\n" +
      "Phone: " +
      this.phone +
      "\n" +
      "Course: " +
      this.course
    );
  }
}

let studentOne = new Students(
  "John Johnson",
  "Main Street 1",
  "(507) 811-1234",
  "Geography"
);
let studentTwo = new Students(
  "John Johnson",
  "Main Street 2",
  "(507) 822-5678",
  "History"
);
let studentThree = new Students(
  "John Johnson",
  "Main Street 3",
  "(507) 833-9012",
  "Biology"
);

console.log(studentOne.getInfo());
console.log(studentTwo.getInfo());
console.log(studentThree.getInfo());
