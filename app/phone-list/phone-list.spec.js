describe('phoneList', function() {


  beforeEach(module('phonecatApp'));

  describe('PhoneListController', function() {

    it('must be 20 phones', inject(function($componentController) {
      var ctrl = $componentController('phoneList');

      expect(ctrl.phones.length).toBe(20);
    }));

  });

});