const log = console.log;

//General plan ******************

// iterate th input and put every value in a hash table
// it again th input
	// for every value iterate from biggest value (P) to smallest value (Q) decrementing of 1
	// if the decremented value is not in the hash table 
	// => adjacent found
	// compare to max and remplace if needed


// Solution w/ pseudo code ********************

function solution (arr) {
	// if input has length of 1
	if ( arr.length === 1 ) {
		// return -1
		return -1; 
	}
	// make a store
	let store = {};
	// make a max
	let max=0;
	// iterate th input
	for ( let i = 0; i < arr.length; i ++ ) {
		// put every value into store
		store[arr[i]]= true;
	}
	// iterate th input again
	for ( let j = 0; j < arr.length; j++ ) {
		// for every value P
		let P = arr[j];
			// for every suprior value Q
			for (let k = j+1; k < arr.length; k++ ) {
				let Q = arr[k];
			// if abs P - Q is bigger than max
				if ( Math.abs( P - Q) > max ) {
					// make an ongoing run
					let ongoingRun = 0	
					// get max value btw P and Q
					const maxVal = P > Q ? P : Q;
					const minVal = P < Q ? P : Q;
					// go from max to min decrementing 1 (inter value)
					for ( let interValue = maxVal-1; interValue >= minVal; interValue -=1 ) {

						ongoingRun++;
						// if loop has finished : adajcent found
						if ( interValue === minVal ) {
							// if ongoing run is bigger than max
							// max = ongoing run
							max = max >= ongoingRun ? max : ongoingRun
							// exit
							break;
						}	
						// if inter value is in store
						if ( store[interValue] === true ) {
							// ongoing run = 0
							ongoingRun=0;
							// break
							break;
						}
					}	
				}		
			}		
	}
	// return max
	return max;
}


// test ***************************

const simpleTest=[5,0];
log('@@@@@@@final = ',solution(simpleTest)); //5
const test = [6,-8,7,1,-1,0,3]; // 7
log('@@@@@@@final = ',solution(test));
//log(solution(simpleTest));
const easyTest = [0,5,-3,4]; //4
log('@@@@@@@final = ',solution(easyTest));

log(solution([0,1,3]))//2
log(solution([0,1,2,3])) //1
log(solution([0])) //-1
log(solution([0,0])) //0

// test for time and space complexity ***************************

function makeComplexInput () {
	let final = [];
	const maxAbs = 2147483647;
	for ( var i = 0; i < 40000; i++ ) {
		final[i] = Math.floor(Math.random()*(maxAbs*2)-maxAbs)
	}
	return final;
}

// refactoring for large inputs ***********************

//log(solution(makeComplexInput()));
	// => times out

// => si i had the idea of refactoring for big input

// pseudo code / general plan
	// it th input P
		// put every value into store
		// it th superiros values Q
			// put into a sorted array by absolute diff between P and Q,the  P , Q tuplet
	// iterate th sorted arr
		// return first difference which is adjacent testing as done above 


// => unfortunately out of time to re implement


// refactoring thoughts **************************
//on top of refactoring for time complexity ,
//i would also make two or three helpers in the main function to avoid the pyramid effect here