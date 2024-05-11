//****Part 2: Expanding Functionality */

let csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor, Assistant,26"

const cscArray= csvString.split('\n').map(line => line.split(','));
 console.log(cscArray)

//****************Part 3: Transforming Data
// let csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor, Assistant,26"
// 	function CSVstring_to_Array(data, delimiter = ',') {
	
// 		/* This variable will collect all the titles
// 		from the data variable 
// 		["Name", "Roll Number"] */
		
// 		const titles = data.slice(0, data
// 			.indexOf('\n')).split(delimiter);
	
// 		/* This variable will store the values
// 		from the data
// 		[ 'Rohan,01', 'Aryan,02' ] */
// 		const titleValues = data.slice(data
// 			.indexOf('\n') + 1).split('\n');
	
// 		/* Map function will iterate over all 
// 		values of title values array and 
// 		append each object at the end of 
// 		the array */
// 		const ansArray = titleValues.map(function (v) {
	
// 			/* Values variable will store individual 
// 			title values		 
// 			[ 'Rohan', '01' ] */
// 			const values = v.split(delimiter);
	
// 			/* storeKeyValue variable will store 
// 			object containing each title
// 			with their respective values i.e 
// 			{ Name: 'Rohan', 'Roll Number': '01' } */
// 			const storeKeyValue = titles.reduce(
// 				function (obj, title, index) {
// 					obj[title] = values[index];
// 					return obj;
// 				}, {});
	
// 			return storeKeyValue;
// 		});
	
// 		return ansArray;
// 	};
	
// 	var inputString1 = csvString
// 		console.log(CSVstring_to_Array(inputString1));
	
	
//*************************Remove the last element from the sorted array.*********************	

// const array = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
// { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
// { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
// { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }]

// // Remove the last row of the array
// const array1 = array.slice(0, -1);
// console.log(array1)
//******************************Insert the object at index 1:******

// const myArray =  [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
// { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
// { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
// { id: "98", name: "Bill", occupation: "Doctor Assistant", age: "26" }]

// // Add the element at index 1 of the 2D array
// myArray[1] = ({ id: "48", name: "Barry", occupation: "Runner", age: "25" });

// console.log(myArray);

//*************************Adding object to the end of the array */
// const myArray =  [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
// { id: "48", name: "Barry", occupation: "Runner", age: "25" },
// { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
// { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
// { id: "98", name: "Bill", occupation: "Doctor Assistant", age: "26" }];


// myArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
 
// for(let i = 0; i < myArray.length; i++)
// 	 {
//     console.log(myArray[i]);
// 	 }


//************Part 5: Full Circle**************
	// const objectToCsv = function (data) 
	//      {
	//             const csvRows = [];
	//      		const headers = Object.keys(data[0]);
	// 	        csvRows.push(headers.join(','));
	
	//       	for (const row of data) 
	// 			{
	// 		       const values = headers.map(header => {
	// 			   const val = row[header]
	// 			   return `"${val}"`;
	// 		      });
	//  	   csvRows.push(values.join(','));
	// 	       }
	
	//    	return csvRows.join('\n');
	//     };
	
	 	
	// const data = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
	//               { id: "48", name: "Barry", occupation: "Runner", age: "25" },
	//               { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
	//               { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
	//               { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
	

	// const csvData = objectToCsv(data);
	// console.log(csvData); 


