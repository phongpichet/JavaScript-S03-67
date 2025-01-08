const library = {
    books: [],
  
    // เพิ่มหนังสือเข้าไปในคลัง
    addBook: function (book) {
      const exists = this.books.some(b => b.title === book.title);
      if (!exists) {
        this.books.push(book);
        console.log(`เพิ่มหนังสือ: "${book.title}" สำเร็จ`);
      } else {
        console.log(`หนังสือ: "${book.title}" มีอยู่แล้วในคลัง`);
      }
    },
  
    // ลบหนังสือออกจากคลังตามชื่อ
    removeBook: function (title) {
      const initialLength = this.books.length;
      this.books = this.books.filter(book => book.title !== title);
      if (this.books.length < initialLength) {
        console.log(`ลบหนังสือ: "${title}" สำเร็จ`);
      } else {
        console.log(`ไม่พบหนังสือชื่อ: "${title}"`);
      }
    },
  
    // แสดงรายชื่อหนังสือทั้งหมด
    listBooks: function () {
      if (this.books.length === 0) {
        console.log("คลังหนังสือว่าง");
        return;
      }
      console.log("รายชื่อหนังสือในคลัง:");
      this.books.forEach((book, index) => {
        const status = book.isRead ? "อ่านแล้ว" : "ยังไม่ได้อ่าน";
        console.log(`${index + 1}. ชื่อ: ${book.title}, ผู้แต่ง: ${book.author}, ปีที่พิมพ์: ${book.year}, สถานะ: ${status}`);
      });
    },
  
    // ส่งคืนหนังสือที่ยังไม่ได้อ่าน
    getUnreadBooks: function () {
      return this.books.filter(book => !book.isRead);
    },
  
    // ส่งคืนจำนวนหนังสือทั้งหมด
    countBooks: function () {
      return this.books.length;
    },
  
    // ค้นหาหนังสือตามชื่อ
    findBook: function (title) {
      const book = this.books.find(book => book.title === title);
      return book || null;
    }
  };
  
  // ตัวอย่างการใช้งาน
  library.addBook({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isRead: true });
  library.addBook({ title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isRead: false });
  library.addBook({ title: "1984", author: "George Orwell", year: 1949, isRead: true });
  library.addBook({ title: "1984", author: "George Orwell", year: 1949, isRead: true }); // ลองเพิ่มหนังสือซ้ำ
  
  library.listBooks();
  
  console.log("หนังสือที่ยังไม่ได้อ่าน:", library.getUnreadBooks());
  
  library.removeBook("1984");
  library.listBooks();
  
  console.log("จำนวนหนังสือทั้งหมด:", library.countBooks());
  
  const foundBook = library.findBook("The Great Gatsby");
  console.log("ผลการค้นหา:", foundBook);
  