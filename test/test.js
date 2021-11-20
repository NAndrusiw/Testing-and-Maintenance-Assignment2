  var assert = require('assert');
  var ref = require('../purchaseOrder');
  var sinon = require('sinon');
  var { products } = require('../products');


  let clientAccount = {
    age: 25,
    balance: 80,
    creditScore: 80
  }



  describe('purchaseOrder.js', function () {

    //getAgeFactor ECT
    describe('getAgeFactor function Behaviorial Test Task 1', function () {

      describe('Equivalence Class Tests', function () {

        describe('ECT1', function () {
          it('should return 0 when age is -5', function () {
            clientAccount.age = -5;
            assert.equal(ref.getAgeFactor(clientAccount), 0);

          });

        });

        describe('ECT2', function () {
          it('should return 10 when age is 20', function () {
            clientAccount.age = 20;
            assert.equal(ref.getAgeFactor(clientAccount), 10);

          });

        });

        describe('ECT3', function () {
          it('should return 15 when age is 30', function () {
            clientAccount.age = 30;
            assert.equal(ref.getAgeFactor(clientAccount), 15);

          });

        });

        describe('ECT4', function () {
          it('should return 20 when age is 40', function () {
            clientAccount.age = 40;
            assert.equal(ref.getAgeFactor(clientAccount), 20);

          });

        });

        describe('ECT5', function () {
          it('should return 45 when age is 55', function () {
            clientAccount.age = 55;
            assert.equal(ref.getAgeFactor(clientAccount), 45);

          });

        });

        describe('ECT6', function () {
          it('should return 25 when age is 80', function () {
            clientAccount.age = 80;
            assert.equal(ref.getAgeFactor(clientAccount), 25);

          });

        });

        describe('ECT7', function () {
          it('should return 0 when age is 1000', function () {
            clientAccount.age = 20;
            assert.equal(ref.getAgeFactor(clientAccount), 10);

          });

        });

      });


    });

    //getBalanceFactor ECT
    describe('getBalanceFactor function Behaviorial Test Task 1', function () {
      describe('Equivalence Class Tests', function () {

        describe('ECT8', function () {
          it('should return 0 when balance is -100', function () {
            clientAccount.balance = -100;
            assert.equal(ref.getBalanceFactor(clientAccount), 0);

          });

        });

        describe('ECT9', function () {
          it('should return 5 when balance is 50', function () {
            clientAccount.balance = 50;
            assert.equal(ref.getBalanceFactor(clientAccount), 5);

          });

        });

        describe('ECT10', function () {
          it('should return 10 when balance is 300', function () {
            clientAccount.balance = 300;
            assert.equal(ref.getBalanceFactor(clientAccount), 10);

          });

        });

        describe('ECT11', function () {
          it('should return 20 when balance is 800', function () {
            clientAccount.balance = 800;
            assert.equal(ref.getBalanceFactor(clientAccount), 20);

          });

        });

        describe('ECT12', function () {
          it('should return 60 when balance is 1500', function () {
            clientAccount.balance = 1500;
            assert.equal(ref.getBalanceFactor(clientAccount), 60);

          });

        });

        describe('ECT13', function () {
          it('should return 100 when balance is 2500', function () {
            clientAccount.balance = 2500;
            assert.equal(ref.getBalanceFactor(clientAccount), 100);

          });

        });

        describe('ECT14', function () {
          it('should return 0 when balance is 5000', function () {
            clientAccount.balance = 5000;
            assert.equal(ref.getBalanceFactor(clientAccount), 0);

          });



        });


      });

    });

    //accountStatus ECT
    describe('accountStatus function Behaviorial Test Task 1', function () {
      describe('Equivalence Class Tests', function () {

        describe('ECT15', function () {

          afterEach(function () {

            ref.getAgeFactor.restore();
            ref.getBalanceFactor.restore();

          });


          it('should return "invalid" when getAgeFactor(clientAccount) = 0 and getBalanceFactor(clientAccount) = 10 ', function () {

            sinon.stub(ref, 'getAgeFactor').onCall(0).returns(0);
            sinon.stub(ref, 'getBalanceFactor').onCall(0).returns(10);

            assert.equal(ref.accountStatus(clientAccount), 'invalid');

          });

        });

        describe('ECT16', function () {

          afterEach(function () {

            ref.getAgeFactor.restore();
            ref.getBalanceFactor.restore();

          });


          it('should return "poor" when getAgeFactor(clientAccount) = 10 and getBalanceFactor(clientAccount) = 5 ', function () {

            sinon.stub(ref, 'getAgeFactor').onCall(0).returns(10);
            sinon.stub(ref, 'getBalanceFactor').onCall(0).returns(5);

            assert.equal(ref.accountStatus(clientAccount), 'poor');

          });

        });


        describe('ECT17', function () {

          afterEach(function () {

            ref.getAgeFactor.restore();
            ref.getBalanceFactor.restore();

          });


          it('should return "acceptable" when getAgeFactor(clientAccount) = 25 and getBalanceFactor(clientAccount) = 10 ', function () {

            sinon.stub(ref, 'getAgeFactor').onCall(0).returns(25);
            sinon.stub(ref, 'getBalanceFactor').onCall(0).returns(10);

            assert.equal(ref.accountStatus(clientAccount), 'acceptable');

          });

        });

        describe('ECT18', function () {

          afterEach(function () {

            ref.getAgeFactor.restore();
            ref.getBalanceFactor.restore();

          });


          it('should return "good" when getAgeFactor(clientAccount) = 10 and getBalanceFactor(clientAccount) = 60 ', function () {

            sinon.stub(ref, 'getAgeFactor').onCall(0).returns(10);
            sinon.stub(ref, 'getBalanceFactor').onCall(0).returns(60);

            assert.equal(ref.accountStatus(clientAccount), 'good');

          });

        });

        describe('ECT19', function () {

          afterEach(function () {

            ref.getAgeFactor.restore();
            ref.getBalanceFactor.restore();

          });


          it('should return "excellent" when getAgeFactor(clientAccount) = 15 and getBalanceFactor(clientAccount) = 100 ', function () {

            sinon.stub(ref, 'getAgeFactor').onCall(0).returns(15);
            sinon.stub(ref, 'getBalanceFactor').onCall(0).returns(100);

            assert.equal(ref.accountStatus(clientAccount), 'excellent');

          });

        });

      });

    });

    //creditStatus ECT
    describe('creditStatus function Behaviorial Test Task 1', function () {
      describe('Equivalence Class Tests', function () {

        describe('ECT20', function () {
          it('should return "invalid" when creditCheckMode = "strict" and creditScore is -10', function () {
            clientAccount.creditScore = -10;
            assert.equal(ref.creditStatus(clientAccount, 'strict'), 'invalid');

          });

        });

        describe('ECT21', function () {
          it('should return "poor" when creditCheckMode = "strict" and creditScore is 30', function () {
            clientAccount.creditScore = 30;
            assert.equal(ref.creditStatus(clientAccount, 'strict'), 'poor');

          });

        });

        describe('ECT22', function () {
          it('should return "good" when creditCheckMode = "strict" and creditScore is 70', function () {
            clientAccount.creditScore = 70;
            assert.equal(ref.creditStatus(clientAccount, 'strict'), 'good');

          });

        });

        describe('ECT23', function () {
          it('should return "invalid" when creditCheckMode = "strict" and creditScore is 120', function () {
            clientAccount.creditScore = 120;
            assert.equal(ref.creditStatus(clientAccount, 'strict'), 'invalid');

          });

        });

        describe('ECT24', function () {
          it('should return "invalid" when creditCheckMode = "default" and creditScore is -5', function () {
            clientAccount.creditScore = -5;
            assert.equal(ref.creditStatus(clientAccount, 'default'), 'invalid');

          });

        });

        describe('ECT25', function () {
          it('should return "poor" when creditCheckMode = "default" and creditScore is 70', function () {
            clientAccount.creditScore = 70;
            assert.equal(ref.creditStatus(clientAccount, 'default'), 'poor');

          });

        });

        describe('ECT26', function () {
          it('should return "good" when creditCheckMode = "default" and creditScore is 95', function () {
            clientAccount.creditScore = 95;
            assert.equal(ref.creditStatus(clientAccount, 'default'), 'good');

          });

        });

        describe('ECT27', function () {
          it('should return "invalid" when creditCheckMode = "default" and creditScore is 120', function () {
            clientAccount.creditScore = 120;
            assert.equal(ref.creditStatus(clientAccount, 'default'), 'invalid');

          });

        });

      });

    });

    //productStatus ECT
    describe('productStatus function Behaviorial Test Task 1', function () {
      describe('Equivalence Class Tests', function () {

        let threshold = 200;

        describe('ECT28', function () {

          it('should return "invalid" when product entered is not in inventory', function () {
            assert.equal(ref.productStatus('non-product', products, threshold), 'invalid');

          });

        });

        describe('ECT29', function () {

          it('should return "soldout" when, valid product, inventoryThreshold = 200, productQuantity = 0', function () {
            assert.equal(ref.productStatus(products[0].name, products, threshold), 'soldout');

          });

        });

        describe('ECT30', function () {

          it('should return "limited" when, valid product, inventoryThreshold = 200, productQuantity = 100', function () {
            assert.equal(ref.productStatus(products[1].name, products, threshold), 'limited');

          });

        });

        describe('ECT31', function () {

          it('should return "available" when, valid product, inventoryThreshold = 200, productQuantity = 300', function () {
            assert.equal(ref.productStatus(products[2].name, products, threshold), 'available');

          });

        });


      });

    });

    //orderHandling ECT
    describe('orderHandling function Behaviorial Test Task 1', function () {
      describe('Equivalence Class Tests', function () {

        let inventoryThreshold = 200;

        describe('ECT32', function () {

          afterEach(function () {

            ref.accountStatus.restore();
            ref.creditStatus.restore();
            ref.productStatus.restore();

          });


          it('should return "accepted" when accountStatus() returns "excellent", creditStatus() returns "poor" and productStatus() returns "limited"', function () {

            sinon.stub(ref, 'accountStatus').onCall(0).returns('excellent');
            sinon.stub(ref, 'creditStatus').onCall(0).returns('poor');
            sinon.stub(ref, 'productStatus').onCall(0).returns('limited');

            assert.equal(ref.orderHandling(clientAccount, products[2].name, products, inventoryThreshold, 'default'), 'accepted');

          });

        });


        describe('ECT33', function () {

          afterEach(function () {

            ref.accountStatus.restore();
            ref.creditStatus.restore();
            ref.productStatus.restore();

          });


          it('should return "accepted" when accountStatus() returns "good", creditStatus() returns "good" and productStatus() returns "limited"', function () {

            sinon.stub(ref, 'accountStatus').onCall(0).returns('good');
            sinon.stub(ref, 'creditStatus').onCall(0).returns('good');
            sinon.stub(ref, 'productStatus').onCall(0).returns('limited');

            assert.equal(ref.orderHandling(clientAccount, products[2].name, products, inventoryThreshold, 'default'), 'accepted');

          });

        });


        describe('ECT34', function () {

          afterEach(function () {

            ref.accountStatus.restore();
            ref.creditStatus.restore();
            ref.productStatus.restore();

          });


          it('should return "accepted" when accountStatus() returns "good", creditStatus() returns "poor" and productStatus() returns "available"', function () {

            sinon.stub(ref, 'accountStatus').onCall(0).returns('good');
            sinon.stub(ref, 'creditStatus').onCall(0).returns('poor');
            sinon.stub(ref, 'productStatus').onCall(0).returns('available');

            assert.equal(ref.orderHandling(clientAccount, products[2].name, products, inventoryThreshold, 'default'), 'accepted');

          });

        });


        describe('ECT35', function () {

          afterEach(function () {

            ref.accountStatus.restore();
            ref.creditStatus.restore();
            ref.productStatus.restore();

          });


          it('should return "accepted" when accountStatus() returns "acceptable", creditStatus() returns "good" and productStatus() returns "available"', function () {

            sinon.stub(ref, 'accountStatus').onCall(0).returns('acceptable');
            sinon.stub(ref, 'creditStatus').onCall(0).returns('good');
            sinon.stub(ref, 'productStatus').onCall(0).returns('available');

            assert.equal(ref.orderHandling(clientAccount, products[2].name, products, inventoryThreshold, 'default'), 'accepted');

          });

        });

        describe('ECT36', function () {

          afterEach(function () {

            ref.accountStatus.restore();
            ref.creditStatus.restore();
            ref.productStatus.restore();

          });


          it('should return "pending" when accountStatus() returns "acceptable", creditStatus() returns "good" and productStatus() returns "limited"', function () {

            sinon.stub(ref, 'accountStatus').onCall(0).returns('acceptable');
            sinon.stub(ref, 'creditStatus').onCall(0).returns('good');
            sinon.stub(ref, 'productStatus').onCall(0).returns('limited');

            assert.equal(ref.orderHandling(clientAccount, products[2].name, products, inventoryThreshold, 'default'), 'pending');

          });

        });

        describe('ECT37', function () {

          afterEach(function () {

            ref.accountStatus.restore();
            ref.creditStatus.restore();
            ref.productStatus.restore();

          });


          it('should return "pending" when accountStatus() returns "acceptable", creditStatus() returns "poor" and productStatus() returns "available"', function () {

            sinon.stub(ref, 'accountStatus').onCall(0).returns('acceptable');
            sinon.stub(ref, 'creditStatus').onCall(0).returns('poor');
            sinon.stub(ref, 'productStatus').onCall(0).returns('available');

            assert.equal(ref.orderHandling(clientAccount, products[2].name, products, inventoryThreshold, 'default'), 'pending');

          });

        });

        describe('ECT38', function () {

          afterEach(function () {

            ref.accountStatus.restore();
            ref.creditStatus.restore();
            ref.productStatus.restore();

          });


          it('should return "pending" when accountStatus() returns "poor", creditStatus() returns "good" and productStatus() returns "limited"', function () {

            sinon.stub(ref, 'accountStatus').onCall(0).returns('poor');
            sinon.stub(ref, 'creditStatus').onCall(0).returns('good');
            sinon.stub(ref, 'productStatus').onCall(0).returns('limited');

            assert.equal(ref.orderHandling(clientAccount, products[2].name, products, inventoryThreshold, 'default'), 'pending');

          });

        });

        describe('ECT39', function () {

          afterEach(function () {

            ref.accountStatus.restore();
            ref.creditStatus.restore();
            ref.productStatus.restore();

          });


          it('should return "rejected" when accountStatus() returns "invalid", creditStatus() returns "good" and productStatus() returns "good"', function () {

            sinon.stub(ref, 'accountStatus').onCall(0).returns('invalid');
            sinon.stub(ref, 'creditStatus').onCall(0).returns('good');
            sinon.stub(ref, 'productStatus').onCall(0).returns('good');

            assert.equal(ref.orderHandling(clientAccount, products[2].name, products, inventoryThreshold, 'default'), 'rejected');

          });

        });

        describe('ECT40', function () {

          afterEach(function () {

            ref.accountStatus.restore();
            ref.creditStatus.restore();
            ref.productStatus.restore();

          });


          it('should return "rejected" when accountStatus() returns "good", creditStatus() returns "invalid" and productStatus() returns "good"', function () {

            sinon.stub(ref, 'accountStatus').onCall(0).returns('good');
            sinon.stub(ref, 'creditStatus').onCall(0).returns('invalid');
            sinon.stub(ref, 'productStatus').onCall(0).returns('good');

            assert.equal(ref.orderHandling(clientAccount, products[2].name, products, inventoryThreshold, 'default'), 'rejected');

          });

        });

        describe('ECT41', function () {

          afterEach(function () {

            ref.accountStatus.restore();
            ref.creditStatus.restore();
            ref.productStatus.restore();

          });


          it('should return "rejected" when accountStatus() returns "good", creditStatus() returns "good" and productStatus() returns "invalid"', function () {

            sinon.stub(ref, 'accountStatus').onCall(0).returns('good');
            sinon.stub(ref, 'creditStatus').onCall(0).returns('good');
            sinon.stub(ref, 'productStatus').onCall(0).returns('invalid');

            assert.equal(ref.orderHandling(clientAccount, products[2].name, products, inventoryThreshold, 'default'), 'rejected');

          });

        });

        describe('ECT42', function () {

          afterEach(function () {

            ref.accountStatus.restore();
            ref.creditStatus.restore();
            ref.productStatus.restore();

          });


          it('should return "rejected" when accountStatus() returns "acceptable", creditStatus() returns "poor" and productStatus() returns "soldout"', function () {

            sinon.stub(ref, 'accountStatus').onCall(0).returns('acceptable');
            sinon.stub(ref, 'creditStatus').onCall(0).returns('poor');
            sinon.stub(ref, 'productStatus').onCall(0).returns('soldout');

            assert.equal(ref.orderHandling(clientAccount, products[2].name, products, inventoryThreshold, 'default'), 'rejected');

          });

        });

        describe('ECT43', function () {

          afterEach(function () {

            ref.accountStatus.restore();
            ref.creditStatus.restore();
            ref.productStatus.restore();

          });


          it('should return "rejected" when accountStatus() returns "poor", creditStatus() returns "good" and productStatus() returns "soldout"', function () {

            sinon.stub(ref, 'accountStatus').onCall(0).returns('poor');
            sinon.stub(ref, 'creditStatus').onCall(0).returns('good');
            sinon.stub(ref, 'productStatus').onCall(0).returns('soldout');

            assert.equal(ref.orderHandling(clientAccount, products[2].name, products, inventoryThreshold, 'default'), 'rejected');

          });

        });

        describe('ECT44', function () {

          afterEach(function () {

            ref.accountStatus.restore();
            ref.creditStatus.restore();
            ref.productStatus.restore();

          });


          it('should return "rejected" when accountStatus() returns "poor", creditStatus() returns "poor" and productStatus() returns "available"', function () {

            sinon.stub(ref, 'accountStatus').onCall(0).returns('poor');
            sinon.stub(ref, 'creditStatus').onCall(0).returns('poor');
            sinon.stub(ref, 'productStatus').onCall(0).returns('available');

            assert.equal(ref.orderHandling(clientAccount, products[2].name, products, inventoryThreshold, 'default'), 'rejected');

          });

        });





      });
    });

    //getAgeFactor BVT
    describe('getAgeFactor function Boundary Value Test Task 2', function () {
      describe('BVT1', function () {
        it('should return 0 when age is 14', function () {
          clientAccount.age = 14;
          assert.equal(ref.getAgeFactor(clientAccount), 0);
        });
      });

      describe('BVT2', function () {
        it('should return 10 when age is 15', function () {
          clientAccount.age = 15;
          assert.equal(ref.getAgeFactor(clientAccount), 10);
        });
      });

      describe('BVT3', function () {
        it('should return 10 when age is 16', function () {
          clientAccount.age = 15;
          assert.equal(ref.getAgeFactor(clientAccount), 10);
        });
      });

      describe('BVT4', function () {
        it('should return 10 when age is 24', function () {
          clientAccount.age = 24;
          assert.equal(ref.getAgeFactor(clientAccount), 10);
        });
      });

      describe('BVT5', function () {
        it('should return 15 when age is 25', function () {
          clientAccount.age = 25;
          assert.equal(ref.getAgeFactor(clientAccount), 15);
        });
      });

      describe('BVT6', function () {
        it('should return 15 when age is 26', function () {
          clientAccount.age = 30;
          assert.equal(ref.getAgeFactor(clientAccount), 15);
        });
      });

      describe('BVT7', function () {
        it('should return 15 when age is 34', function () {
          clientAccount.age = 34;
          assert.equal(ref.getAgeFactor(clientAccount), 15);
        });
      });

      describe('BVT8', function () {
        it('should return 20 when age is 35', function () {
          clientAccount.age = 35;
          assert.equal(ref.getAgeFactor(clientAccount), 20);
        });
      });

      describe('BVT9', function () {
        it('should return 20 when age is 36', function () {
          clientAccount.age = 36;
          assert.equal(ref.getAgeFactor(clientAccount), 20);
        });
      });

      describe('BVT10', function () {
        it('should return 20 when age is 44', function () {
          clientAccount.age = 44;
          assert.equal(ref.getAgeFactor(clientAccount), 20);
        });
      });

      describe('BVT11', function () {
        it('should return 45 when age is 45', function () {
          clientAccount.age = 45;
          assert.equal(ref.getAgeFactor(clientAccount), 45);
        });
      });

      describe('BVT12', function () {
        it('should return 45 when age is 46', function () {
          clientAccount.age = 46;
          assert.equal(ref.getAgeFactor(clientAccount), 45);
        });
      });

      describe('BVT13', function () {
        it('should return 45 when age is 64', function () {
          clientAccount.age = 64;
          assert.equal(ref.getAgeFactor(clientAccount), 45);
        });
      });

      describe('BVT14', function () {
        it('should return 25 when age is 65', function () {
          clientAccount.age = 65;
          assert.equal(ref.getAgeFactor(clientAccount), 25);
        });
      });

      describe('BVT15', function () {
        it('should return 25 when age is 66', function () {
          clientAccount.age = 66;
          assert.equal(ref.getAgeFactor(clientAccount), 25);
        });
      });
      //
      describe('BVT16', function () {
        it('should return 25 when age is 89', function () {
          clientAccount.age = 89;
          assert.equal(ref.getAgeFactor(clientAccount), 25);
        });
      });

      describe('BVT17', function () {
        it('should return 0 when age is 90', function () {
          clientAccount.age = 90;
          assert.equal(ref.getAgeFactor(clientAccount), 0);
        });
      });

      describe('BVT18', function () {
        it('should return 0 when age is 91', function () {
          clientAccount.age = 91;
          assert.equal(ref.getAgeFactor(clientAccount), 0);
        });
      });

    });

    //getBalanceFactor BVT
    describe('getBalanceFactor function Boundary Value Task 2', function () {

      describe('BVT19', function () {
        it('should return 0 when balance is -1', function () {
          clientAccount.balance = -1;
          assert.equal(ref.getBalanceFactor(clientAccount), 0);
        });
      });
      describe('BVT20', function () {
        it('should return 0 when balance is 0', function () {
          clientAccount.balance = 0;
          assert.equal(ref.getBalanceFactor(clientAccount), 0);
        });
      });
      describe('BVT21', function () {
        it('should return 5 when balance is 1', function () {
          clientAccount.balance = 1;
          assert.equal(ref.getBalanceFactor(clientAccount), 5);
        });
      });
      describe('BVT22', function () {
        it('should return 5 when balance is 99', function () {
          clientAccount.balance = 99;
          assert.equal(ref.getBalanceFactor(clientAccount), 5);
        });
      });
      describe('BVT23', function () {
        it('should return 10 when balance is 100', function () {
          clientAccount.balance = 100;
          assert.equal(ref.getBalanceFactor(clientAccount), 10);
        });
      });
      describe('BVT24', function () {
        it('should return 10 when balance is 101', function () {
          clientAccount.balance = 101;
          assert.equal(ref.getBalanceFactor(clientAccount), 10);
        });
      });
      describe('BVT25', function () {
        it('should return 10 when balance is 499', function () {
          clientAccount.balance = 499;
          assert.equal(ref.getBalanceFactor(clientAccount), 10);
        });
      });
      describe('BVT26', function () {
        it('should return 20 when balance is 500', function () {
          clientAccount.balance = 500;
          assert.equal(ref.getBalanceFactor(clientAccount), 20);
        });
      });
      describe('BVT27', function () {
        it('should return 20 when balance is 501', function () {
          clientAccount.balance = 501;
          assert.equal(ref.getBalanceFactor(clientAccount), 20);
        });
      });
      describe('BVT28', function () {
        it('should return 20 when balance is 999', function () {
          clientAccount.balance = 999;
          assert.equal(ref.getBalanceFactor(clientAccount), 20);
        });
      });
      describe('BVT29', function () {
        it('should return 60 when balance is 1000', function () {
          clientAccount.balance = 1000;
          assert.equal(ref.getBalanceFactor(clientAccount), 60);
        });
      });
      describe('BVT30', function () {
        it('should return 60 when balance is 1001', function () {
          clientAccount.balance = 1001;
          assert.equal(ref.getBalanceFactor(clientAccount), 60);
        });
      });
      describe('BVT31', function () {
        it('should return 60 when balance is 1999', function () {
          clientAccount.balance = 1999;
          assert.equal(ref.getBalanceFactor(clientAccount), 60);
        });
      });
      describe('BVT32', function () {
        it('should return 100 when balance is 2000', function () {
          clientAccount.balance = 2000;
          assert.equal(ref.getBalanceFactor(clientAccount), 100);
        });
      });
      describe('BVT33', function () {
        it('should return 100 when balance is 2001', function () {
          clientAccount.balance = 2001;
          assert.equal(ref.getBalanceFactor(clientAccount), 100);
        });
      });
      describe('BVT34', function () {
        it('should return 100 when balance is 2999', function () {
          clientAccount.balance = 2999;
          assert.equal(ref.getBalanceFactor(clientAccount), 100);
        });
      });
      describe('BVT35', function () {
        it('should return 0 when balance is 3000', function () {
          clientAccount.balance = 3000;
          assert.equal(ref.getBalanceFactor(clientAccount), 0);
        });
      });
      describe('BVT36', function () {
        it('should return 0 when balance is 3001', function () {
          clientAccount.balance = 3001;
          assert.equal(ref.getBalanceFactor(clientAccount), 0);
        });
      });

    });

    //accountStatus BVT
    describe('accountStatus function Boundary Value Task 2', function () {



    });

    //creditStatus BVT
    describe('creditStatus function Boundary Value Task 2', function () {

      describe('BVT48', function () {
        it('should return "invalid" when creditscore is -1 in strict mode', function () {
          clientAccount.creditScore = -1;
          assert.equal(ref.creditStatus(clientAccount, 'strict'), 'invalid');
        });
      });
      describe('BVT49', function () {
        it('should return poor when credit score is 0 in strict mode', function () {
          clientAccount.creditScore = 0;
          assert.equal(ref.creditStatus(clientAccount, 'strict'), 'poor');
        });
      });
      describe('BVT50', function () {
        it('should return poor when credit score is 1 in strict mode', function () {
          clientAccount.creditScore = 1;
          assert.equal(ref.creditStatus(clientAccount, 'strict'), 'poor');
        });
      });
      describe('BVT51', function () {
        it('should return "poor" when credit score is 54 in default mode', function () {
          clientAccount.creditScore = 54;
          assert.equal(ref.creditStatus(clientAccount, 'default'), 'poor');
        });
      });
      describe('BVT52', function () {
        it('should return poor when credit score is 0 in strict mode', function () {
          clientAccount.creditScore = 55;
          assert.equal(ref.creditStatus(clientAccount, 'strict'), 'good');
        });
      });
      describe('BVT53', function () {
        it('should return poor when credit score is 56 in strict mode', function () {
          clientAccount.creditScore = 56;
          assert.equal(ref.creditStatus(clientAccount, 'strict'), 'good');
        });
      });

      describe('BVT54', function () {
        it('should return good when credit score is 99 in strict mode', function () {
          clientAccount.creditScore = 99;
          assert.equal(ref.creditStatus(clientAccount, 'strict'), 'good');
        });
      });
      describe('BVT55', function () {
        it('should return invalid when credit score is 100 in strict mode', function () {
          clientAccount.creditScore = 100;
          assert.equal(ref.creditStatus(clientAccount, 'strict'), 'invalid');
        });
      });
      describe('BVT56', function () {
        it('should return invalid when credit score is 101 in strict mode', function () {
          clientAccount.creditScore = 101;
          assert.equal(ref.creditStatus(clientAccount, 'strict'), 'invalid');
        });
      });

      describe('BVT57', function () {
        it('should return "invalid" when credit score is -1 in default mode', function () {
          clientAccount.creditScore = -1;
          assert.equal(ref.creditStatus(clientAccount, 'default'), 'invalid');
        });
      });
      describe('BVT58', function () {
        it('should return poor when credit score is 0 in default mode', function () {
          clientAccount.creditScore = 0;
          assert.equal(ref.creditStatus(clientAccount, 'default'), 'poor');
        });
      });
      describe('BVT59', function () {
        it('should return poor when credit score is 1 in default mode', function () {
          clientAccount.creditScore = 1;
          assert.equal(ref.creditStatus(clientAccount, 'default'), 'poor');
        });
      });

      describe('BVT60', function () {
        it('should return poor if creditScore is 84 in default mode', function () {
          clientAccount.creditScore = 84;
          assert.equal(ref.creditStatus(clientAccount, 'default'), 'poor');
        });
      });
      describe('BVT61', function () {
        it('should return good if creditScore is 85 in default mode', function () {
          clientAccount.creditScore = 85;
          assert.equal(ref.creditStatus(clientAccount, 'default'), 'good');
        });
      });
      describe('BVT62', function () {
        it('should return good if creditScore is 86 in default mode', function () {
          clientAccount.creditScore = 86;
          assert.equal(ref.creditStatus(clientAccount, 'default'), 'good');
        });
      });

      describe('BVT63', function () {
        it('should return good if creditScore is 99 in default mode', function () {
          clientAccount.creditScore = 99;
          assert.equal(ref.creditStatus(clientAccount, 'default'), 'good');
        });
      });
      describe('BVT64', function () {
        it('should return invalid if creditScore is 100 in default mode', function () {
          clientAccount.creditScore = 100;
          assert.equal(ref.creditStatus(clientAccount, 'default'), 'invalid');
        });
      });
      describe('BVT65', function () {
        it('should return invalid if creditScore is 101 in default mode', function () {
          clientAccount.creditScore = 101;
          assert.equal(ref.creditStatus(clientAccount, 'default'), 'invalid');
        });
      });

    });

    //productStatus BVT
    describe('productStatus function Boundary Value Task 2', function () {

      let threshold = 200;

      describe('BVT66', function () {
        it('should return invalid when product doesnt exist', function () {
          assert.equal(ref.productStatus('non-product', products, threshold), 'invalid');
        });
      });

      describe('BVT67', function () {
        it('should return soldout when quantity is -1', function () {
          assert.equal(ref.productStatus(products[3].name, products, threshold), 'soldout');
        });
      });

      describe('BVT68', function () {
        it('should return limited out when quantity is 0', function () {
          assert.equal(ref.productStatus(products[0].name, products, threshold), 'soldout');
        });
      });

      describe('BVT69', function () {
        it('should return limited out when quantity is 1', function () {
          assert.equal(ref.productStatus(products[4].name, products, threshold), 'limited');
        });
      });
      describe('BVT70', function () {
        it('should return limited out when quantity is 199', function () {
          assert.equal(ref.productStatus(products[5].name, products, threshold), 'limited');
        });
      });
      describe('BVT71', function () {
        it('should return limited out when quantity is 200', function () {
          assert.equal(ref.productStatus(products[6].name, products, threshold), 'available');
        });
      });


    });
  });


  //*********************************BASIC FORMAT*********************************
  // var assert = require('assert');
  // var ref = require('../code');

  // var sinon = require('sinon');

  // describe('code.js (file to be tested)', function(){

  //   describe('functionX Behaviorial Tests', function(){

  //     it('should do this when given that', function(){

  //       assert.equal(ref.functionX(test_input), expected_RAeturn);

  //     });

  //   });


  //   describe('functionY Behaviorial Tests', function(){

  //     afterEach(function(){

  //       ref.functionX.restore();

  //     });


  //     it('should do this when given that', function(){

  //       sinon.stub(ref, 'functionX').onCall(0).returns(expected_Result_From_functionX);

  //       assert.equal(ref.functionY(test_input), expected_Return);

  //     });

  //   });


  // 