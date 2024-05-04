// Part 1 -------------------------------------------------------------------------
//Initial Numbers to verify
const num1 = 10;
const num2 = 15;
const num3 = 20;
const num4 = 5;

//Do numbers add to 50? True/False
const isSum50 = (num1 + num2 + num3 +num4) === 50
console.log("Is the sum 50?", isSum50)

//Are at least 2 numbers odd? True/False
const areTwoOdd = (num1 % 2) + (num2 % 2) + (num3 % 2) + (num4 % 2) >= 2
console.log(`Are there two or more odd numbers?`, areTwoOdd)

//No numbers can be larger than 25
const areLargerThan25 = num1 > 25 || num2 > 25 || num3 > 25 || num4 > 25
console.log(`Are any numbers over 25?`, areLargerThan25)

//Are all numbers unique?
const isUnique = num1 != num2 && num1 != num3 && num1 != num4 && num2 != num3 && num2 != num4 && num3 != num4
console.log(`Are all numbers unique?`, isUnique)

//Did the numbers pass all validation checks?
const isValid = isSum50 && areTwoOdd && !areLargerThan25 && isUnique
console.log(`Do the numbers pass all validation checks?`, isValid)

//check all are divible by 5
const isDivBy5 = num1/5===0 && num2/5===0 && num3/5===0 && num4/5===0
console.log( `the all number is divisible by 5 (true or false)` , isDivBy5 ) 

//the fisrt number is larger than the last
const isgreaterthan =num1 > num4
console.log(`The first number is greater than the second ${isgreaterthan}`)
//to accomplish arthimatic chain
const arthimatic = ((num1-num2)*num3)%num4
console.log(`The result of Arthimatic chain is ${arthimatic} ` )


// Part 2 -------------------------------------------------------------------------
//Initial Numbers to verify
const milePerHr1 =55
const milePerHr2 =60
const milePerHr3 =75
const milePerGallon1=30
const milePerGallon2 =28
const milePerGallon3=23
const fuelB=175
const avgCostFuel=3
const totalMil=1500


// to calculate total gallon needed for the entire trip,if the whole trip is drive with 55 mile per hour,
const gallonOfFuel=totalMil/milePerGallon1
console.log(`If the total trip driven 55 miles per hour , ${gallonOfFuel} gallon of fule is needed`  )
//to check the budget is enough to cover the expense when the whole trip is driven with 30 mile per gallon
const fuelExp = gallonOfFuel*avgCostFuel
const budget =fuelB > fuelExp
console.log(`Does the budget cover the expense,${budget}`)
//calculate how long it take in hour, if the whole trip is driven by 55 per hour
const totalhour = totalMil/milePerHr1
const totalhour1 =Math.round(totalhour)
console.log(`if we drive ${milePerHr1} per hour ,it took us ${totalhour1} hours  `)


//to calcualte the total gallon needed for the enrire trip ,if the whole trip is drive with 60 mile per hour
const gallonOfFuel2=totalMil/milePerGallon2
const gallonOfFuel22 =Math.round(gallonOfFuel2)
console.log(`If the total trip driven 60 miles per hour , ${gallonOfFuel22} gallon of fule is needed`  )
//to check the budget is enough to cover the expense when the whole trip is driven with 60 mile per hour
const fuelExp1 =gallonOfFuel22*avgCostFuel
const budget1 = fuelB > fuelExp1
console.log(`Does the budget cover the expense(True,False),${budget1}`)
//calculate how long it take in hour, if the whole trip is driven by 60 per hour
const totalhour2 = totalMil/milePerHr2
const totalhour3 = Math.round(totalhour2)
console.log(`if we drive ${milePerHr2} per hour ,it took us ${totalhour3} hours`)



//if the whole trip is drive with 75 mile per hour
const gallonOfFuel3=totalMil/milePerGallon3
const gallonOfFuel33 = Math.round(gallonOfFuel3)
console.log(`If the total trip driven 23 miles per hour , ${gallonOfFuel33} gallon of fule is needed`  )
////to check the budget is enough to cover the expense when the whole trip is driven with 75 mile per hour
const fuelExp2 =gallonOfFuel33*avgCostFuel
const budget2 = fuelB > fuelExp2
console.log(`Does the budget cover the expense(True,False),${budget2}`)
////calculate how long it take in hour, if the whole trip is driven by 75 per hour
const totalhour4 = totalMil/milePerHr3
const totalhour5 = Math.round(totalhour4)
console.log(`if we drive ${milePerHr3} per hour ,it took us ${totalhour5} hours`)

// Part 3 -------------------------------------------------------------------------
// to check optimal speed 

const optspd = fuelB > fuelExp || fuelB > fuelExp1 || fuelB > fuelExp2
console.log(`The speed is optimal  ${optspd} `)

