function kopiOrder (string) {
  var orderName = string.toLowerCase()
  console.log(orderName)

  var drinkFactors = {
    coffee___: 2,
    sugar____: 2,
    condMilk_: 2,
    evapMilk_: false,
    ice______: false,
    cost_____: 1.5
  }

  if (/^kopi\s(o|oh)/.test(orderName)) {
    drinkFactors.condMilk_ = 0
    drinkFactors.cost_____ -= .3
  }
  if (/^kopi\sc/.test(orderName)) {
    drinkFactors.condMilk_ = 0
    drinkFactors.evapMilk_ = 2
  }
  if (/\bsiu\sdai\b/.test(orderName)) {
    drinkFactors.sugar____ = 1
    drinkFactors.condMilk_ /= 2
    drinkFactors.evapMilk_ /= 2
  }
  if (/\bkosong\b/.test(orderName)) {
    drinkFactors.sugar____ -= 2
    drinkFactors.cost_____ -= .2
  }
  if (/\bgau\b/.test(orderName)) {
    drinkFactors.coffee___ += 1
  }
  if (/\bpo\b/.test(orderName)) {
    drinkFactors.coffee___ -= 1
  }
  if (/\bgah\b/.test(orderName)) {
    drinkFactors.condMilk_ += 1
  }
  if (/\bpeng\b/.test(orderName)) {
    drinkFactors.ice______ = true
    drinkFactors.cost_____ += .2
  }
  console.log(drinkFactors)
}

// TEST CASES
kopiOrder('kopi o peng')
kopiOrder('kopi o gau')
kopiOrder('kopi o po')
kopiOrder('kopi o siu dai')
kopiOrder('kopi')
kopiOrder('kopi gau peng')
kopiOrder('kopi po')
kopiOrder('kopi siu dai')
kopiOrder('kopi gah dai')
kopiOrder('kopi c')
kopiOrder('kopi c kosong')
kopiOrder('kopi o kosong')
