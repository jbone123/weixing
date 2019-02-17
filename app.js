App({
  onLaunch(){
    console.log(0)
  },
  
  onShow(options){
    // console.log('onshow')
    // this.myFoo()
    // console.log(this.myVar)
    console.log(options)
  },

  onHide(){
    console.log('onHide')
  },

  myFoo(){
    console.log('myFoo')
  },

  myVar: 'abc'
})