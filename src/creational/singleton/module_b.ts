import { MyDatabaseFuction } from './db/my-database-function';
import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFuction;
myDatabaseClassic.add({ name: 'Pedro', age: 20 });
myDatabaseClassic.add({ name: 'Cecília', age: 10 });
myDatabaseClassic.add({ name: 'Maria', age: 45 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);
