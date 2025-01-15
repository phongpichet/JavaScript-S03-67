const library = {
  books: [],

  addBook: function (book) {
      // เพิ่มหนังสือเข้าไปในอาร์เรย์ books
      if (!this.books.some(b => b.title === book.title)) {
          this.books.push(book);
      } else {
          console.log(`หนังสือชื่อ "${book.title}" มีอยู่แล้วในคลัง.`);
      }
  },

  removeBook: function (title) {
      // ลบหนังสือที่มีชื่อที่ตรงกับ title
      const initialLength = this.books.length;
      this.books = this.books.filter(book => book.title !== title);
      if (this.books.length === initialLength) {
          console.log(`ไม่พบหนังสือชื่อ "${title}" ในคลัง.`);
      }
  },

  listBooks: function () {
      // แสดงรายชื่อหนังสือทั้งหมด
      if (this.books.length === 0) {
          console.log("ไม่มีหนังสือในคลัง.");
      } else {
          this.books.forEach((book, index) => {
              console.log(
                  `${index + 1}. ชื่อ: ${book.title}, ผู้แต่ง: ${book.author}, ปีที่พิมพ์: ${book.year}, สถานะ: ${book.isRead ? "อ่านแล้ว" : "ยังไม่ได้อ่าน"}`
              );
          });
      }
  },

  getUnreadBooks: function () {
      // ส่งคืนหนังสือที่ยังไม่ได้อ่าน
      return this.books.filter(book => !book.isRead);
  },

  countBooks: function () {
      // ส่งคืนจำนวนหนังสือทั้งหมดในคลัง
      return this.books.length;
  },

  findBook: function (title) {
      // ค้นหาหนังสือตามชื่อ
      const book = this.books.find(book => book.title === title);
      return book || null;
  }
};

library.addBook({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isRead: true });
library.addBook({ title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isRead: false });
library.addBook({ title: "1984", author: "George Orwell", year: 1949, isRead: true });

library.listBooks();
/* Output:
1. ชื่อ: The Great Gatsby, ผู้แต่ง: F. Scott Fitzgerald, ปีที่พิมพ์: 1925, สถานะ: อ่านแล้ว
2. ชื่อ: To Kill a Mockingbird, ผู้แต่ง: Harper Lee, ปีที่พิมพ์: 1960, สถานะ: ยังไม่ได้อ่าน
3. ชื่อ: 1984, ผู้แต่ง: George Orwell, ปีที่พิมพ์: 1949, สถานะ: อ่านแล้ว
*/

console.log(library.getUnreadBooks());
// Output: [ { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isRead: false } ]

library.removeBook("1984");
library.listBooks();
/* Output:
1. ชื่อ: The Great Gatsby, ผู้แต่ง: F. Scott Fitzgerald, ปีที่พิมพ์: 1925, สถานะ: อ่านแล้ว
2. ชื่อ: To Kill a Mockingbird, ผู้แต่ง: Harper Lee, ปีที่พิมพ์: 1960, สถานะ: ยังไม่ได้อ่าน
*/

module.exports = library;
