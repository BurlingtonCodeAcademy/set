describe('Set', ()=>{
  let set;
  beforeEach(()=>{
    set = new Set();
  });

  it('works', ()=>{
    expect(set.isEmpty()).toBeTruthy();
  })
})

class Set {
  isEmpty() {
    return true;
  }
}
