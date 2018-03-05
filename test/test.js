describe('test1', function() {
    // var foo;
  
    beforeEach(function() {
        component = { newComponent: function(newComponent) {
        component = new component;
        }
    };
    spyOn(component, 'newComponent');

    component.newComponent(123);
    component.newComponent(1,2);
});
    // it('is just a function, so it can contain any code', function() {
    //   expect(foo).toEqual(1);
    // });

    it("xd", function() {
        expect(component.newComponent).toHaveBeenCalled();
    })
    it('dziala czy nie dziala', function() {
      expect(component).toEqual(1);
      expect(true).toEqual(true);
    });
  });
