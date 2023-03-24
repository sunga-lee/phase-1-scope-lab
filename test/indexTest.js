// describe('Fix the Scope', function() {
//   describe('declare customerName to be bob in global scope', function() {
//     it('returns the customerName', function() {
//       expect(window.customerName).to.equal('bob');
//     });
//   });

//   describe('upperCaseCustomerName()', function() {
//     it('modifies the customerName variable', function() {
//       expect(window.customerName).to.equal('bob');

//       upperCaseCustomerName();

//       expect(window.customerName).to.equal('BOB');
//     });
//   });
//   describe('setBestCustomer()', function() {
//     it('setBestCustomer', function() {
//       expect(window.bestCustomer).to.equal(undefined);

//       setBestCustomer();

//       expect(window.bestCustomer).to.equal('not bob');
//     });
//   });

//   describe('overwriteBestCustomer()', function() {
//     it('overwrites the best customer', function() {
//       overwriteBestCustomer('maybe bob');

//       expect(window.bestCustomer).to.equal('maybe bob');
//     });
//   });

//   describe('changeLeastFavoriteCustomer()', function() {
//     it('unsuccessfully tries to reassign the least favorite customer', function() {
//       expect(changeLeastFavoriteCustomer).to.throw('Assignment to constant variable.');
//     });
//   });
// });

// Write your solution in this file!
var customerName = 'bob'; // declared in global scope
 function upperCaseCustomerName() {
  customerName = customerName.toUpperCase(); // modifies the global customerName variable
 }
 function setBestCustomer() {
  let bestCustomer = 'not bob'; // declared and assigned in global scope
 }
 function overwriteBestCustomer(newBestCustomer) {
  let bestCustomer = "maybe bob"; // modifies the global bestCustomer variable
 }
 function leastFavoriteCustomer() {
  const leastFavoriteCustomer = 'lee'; // declared and assigned in local scope
  changeLeastFavoriteCustomer = "sdf"
 }
   // reassigns the local variable, but does not affect global scope
 

