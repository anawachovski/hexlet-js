const printer = {
	name: 'Hexlet',
	print(greeting = 'hello') {
	  console.log(`${greeting}, ${this.name}`);
	}
 };
 
 // Прямой запуск
 printer.print();
 setTimeout(printer.print, 1000);