// Finds the factors of a number n
function factors(n)
{
	var stringOfFactors = "1"
	for (var i = 2; i <= n / 2; i++) // check each number 2 to (n / 2)
    {
        if (n % i == 0) // if it's a factor of n, add it to string
        {
            stringOfFactors += ", " + i
        }
    }
	
	return stringOfFactors
}
// Computes tax rate based on income and marital status
function tax(income, maritalStatus)
{
	// convert marital status to uppercase
	maritalStatus = maritalStatus.toUpperCase()
	
    if (maritalStatus == "SINGLE") // Single
    {
        if (income < 30000) taxRate = 0.20 // Income
        else taxRate = 0.25
    }
    else if (maritalStatus == "MARRIED") // Married
    {
        if (income < 50000) taxRate = 0.10 // Income
        else taxRate = 0.15
    } 
	
    return taxRate
}
// Computes the standard deviation of a population in an array
function stdDev(setOfNumbers)
{
	// calculate average of numbers
	sum = 0
	for (let num of setOfNumbers)
	{
		sum += num
	}
	average = sum / setOfNumbers.length
	
	// calculate standard deviation
	stdDeviation = 0
	for (let num of setOfNumbers)
	{
		stdDeviation += Math.pow(num - average, 2)
	}
	stdDeviation /= setOfNumbers.length
	stdDeviation = Math.sqrt(stdDeviation)
	
	return stdDeviation
}
// Generates an ID and password based on user's name
function createIdPassword(lastName, firstName)
{
	// convert names to uppercase
	lastName = lastName.toUpperCase()
	firstName = firstName.toUpperCase()
	
	// create array to store ID as first element and password as second
	var idAndPassword = new Array(2)
	
	// generate id and password
	idAndPassword[0] = firstName.charAt(0) + lastName
	idAndPassword[1] = firstName.charAt(0) + firstName.charAt(firstName.length - 1)
					 + lastName.substring(0, 3) + firstName.length + lastName.length
	
	return idAndPassword
}
// Removes duplicate values from an array
function removeDuplicates(inArray)
{
	// declare outArray to return later
	let outArray = []
	
	// for every value in inArray, add it to outArray if not in outArray yet
	for(let inVal of inArray)
	{
		let isDuplicate = false

		for (let outVal of outArray)
		{
			// determine whether value in inArray is already in outArray
			if(inVal == outVal)
			{
				isDuplicate = true
				break
			}
		}
		// push value from inArray to outArray if it is unique
		if(!isDuplicate)
		{
			outArray.push(inVal)
		}
	}
	
	return outArray
}
 // Defines student class
 class Student
 {
	// data members
	var name
	var gpa
	 
	// constructor
	constructor(name, gpa)
	{
		this.name = name 
		this.age = age
	}
	
	// getters
	getName()
	{
		return this.name
	}	
	getGpa()
	{
		return this.gpa
	}
	
	// setters
	setName(name)
	{
		this.name = name
	}
	setGpa(gpa)
	{
		this.gpa = gpa
	}
	
	// says whether student is honors or no
	isHonors(){
		return gpa > 3
	}
 }