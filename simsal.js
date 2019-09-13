// Flexibility of job markets, productivity optimization, simple 
// economics model. Capitalism vs the rest of the world :-)
// 2019 ->

// The version of this software
globalVersion = '0.01'

// Running counter
roundsTotalPlayed = 0

// Desired simulation parameters: How much
// These variables may not skew the simulation mechanics themselves.
// Ie these just pure, neutral bookkeeping variables.
roundsMaxRun = 500
roundsOneRunDayEq = 1 // 1:1 = roundsMaxRun days. This is the scaling factor for time

// FIXME: Do a pretty printer for a days => "nice to read human description of time"
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// How to use those formatted strings. They are called "string literal templates" in JS.
function calculateHumanTimeFromRounds(eq, n) {
	var brutal = n*eq    // Brutal is in days
	// We "cascade drop" the brutal into biggest-var-first
	var years = brutal % 365
	brutal -= years*365
	var months = brutal % 30
	brutal -= months * 30 
	var days = brutal
	var stringer = '<N/A>' // FIXME this needs the code. This line forms the return value
    // ------------------------
	return stringer
 } 


/* 
      Companies and their structure
        Name : string
*/
comps = ['a corp LLC','b corp LLC','C corp LLC',
         'D corp LLC','E corp LLC']

// Main Driver Loop
function MDL(argument) {
	roundsTotalPlayed++
}

// Nitty information showing functions
function versionString() {
    return globalVersion
}


// Employees are represented by 
// name, salaryPerMonth, prodPerMonth, roundsInCorp, isEmployed
emps = [
        {
        	name: '1',
        	sala: 0,
        	prod: 0,
        	roundsInCorp: 0,
        	isEmployed: false,	
        },
        {
        	name: '2',
        	sala: 0,
        	prod: 0,
        	roundsInCorp: 0,
        	isEmployed: false,
        },        
        {
        	name: '3',
        	sala: 0,
        	prod: 0,
        	roundsInCorp: 0,
        	isEmployed: false,
        },
        {
        	name: '4',
        	sala: 0,
        	prod: 0,
        	roundsInCorp: 0,
        	isEmployed: false,
        },
        ]

// Event functions to be used when something active happens.
// These are called by the main driver loop (MDL).
// Change a employee's job into another company.
// Offer
//   salaryPerMonth 

function changeJobs(empIndex, offer, toCompany) {
    // fetch the offer data
    var newSalary = offer.salaryPerMonth
  	emps[empIndex].company = toCompany
    emps[empIndex].sala = newSalary
    
}

function init_employees() {
		console.log('Initialized employees - mocked. Nothing done.')
}


function normal_round (specialities) {
	if (specialities == null) {
		// Ordinary round
		console.log('An ordinary round')
	}
	return
}


function showStatsOfSimulation() {
    console.log('Rounds played: ' + roundsTotalPlayed)
}


// Describe the events keys later on
// Events are json packets
// Keys
//     placeholder : string
function fillRDA(roundData, defSpec, roundsWanted) {
	for (var i = 0; i < roundsWanted; i++) {
		// Assign the hash to the slot. Ie roundData[i] will be filled with
		// the specifics of that rounds events, information etc
		var specMade = defSpec
		roundData[i] = specMade
	}
}

// main program entry point

// Round data array, or 'rda'. This is the description of simulation
// events, on a big scale. Does not yet contain randomizers. 
// This is simply a linear FOR at its simplest. But the ingenious
// part of RDA is that you can pre-program events and information into it.
rda = []
fillRDA(rda, {placeholder: false}, roundsMaxRun) 

console.log('Started simsal -- simulator version ' + versionString())
for (var i = 0; i < rda.length; i++) {
	// Run simulator with parameters found from the rda sausage
    console.log('New Round!')
}
console.log('Stop')

// Final call. Let's see the results
showStatsOfSimulation()
