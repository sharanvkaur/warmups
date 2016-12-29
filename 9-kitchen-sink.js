function kitchenSink (argument) {
  if (typeof argument === 'string') {
    console.log(argument)
    return
  }
  if (typeof argument === 'number') {
    console.log(argument * argument)
    return
  }
  if (typeof argument === 'boolean') {
    if (argument === true) {
      console.log('yes')
    } else {
      console.log('no')
    }
    return
  }
  if (typeof argument === 'function') {
    console.log(argument())
    return
  }
  if (typeof argument === 'undefined') {
    console.log('go away, bad user!')
    return
  }
  if (typeof argument === 'object') {
    if (Array.isArray(argument)) {
      for (var i = 0; i < argument.length; i++) { kitchenSink(argument[i]) }
      return
    }
    if (!argument) {
      console.log('Null data, bad user!')
      return
    } else {
      for (var i in argument) {
        kitchenSink(argument[i])
      }
    }
  }
}

function tellMe () {
  return 'why are you doing this?'
}

kitchenSink('hellow')
kitchenSink(true)
kitchenSink(false)
kitchenSink(tellMe())
kitchenSink()
kitchenSink([1, 2, 3])
kitchenSink({first: 'hello world', second: 4, third: true, fourth: tellMe, fifth: 'goodbye cruel world', sixth: null})
