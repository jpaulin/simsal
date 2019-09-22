// Flexibility of job markets, productivity optimization, simple 
// economics model. Capitalism vs the rest of the world :-)
// 2019 ->

// Chalk gives ASCII color to console output (colored text)
var chk = import("chalk")

// The version of this software
globalVersion = '0.02'
basisString = 'Simulation running now for '

// Running counter
roundsTotalPlayed = 0
roundsMaxRun = 365  // Game ends at at most this many rounds been reached
roundsOneRunDayEq = 1 // 1:1 = roundsMaxRun days. This is the scaling factor for time

var globalSocialSecurityPeriod_Months = 24
var globalSocialSecurityPeriod_Money  = 1250

/* 
      Companies and their structure
        Name : string
*/
comps = ['a corp LLC','b corp LLC','C corp LLC',
         'D corp LLC','E corp LLC']

// Main Driver Loop
function MDL(argument) {
	roundsTotalPlayed++
    for (var i = 0; i < emps.length; i++) {
        var currE = emps[i]
        if (currE.isEmployed == true) {
            currE.stintLengthMonths += 1
        } else {
            if (currE.socialSecMonthsLeft > 0) {
                currE.cashAtHand += currE.socialSecMoney
            } else {
                // This is the non-employed employee, who runs out of social 
                // security
            }

        }

    }
    // Let us calculate the financial events and tally up figures 
    // FIXME
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


/*
 The economics statistics of the nation 
*/
function globalStatsUpdate(evtName, empIndex, company, data) {
    return true
}

// Event functions to be used when something active happens.
// These are called by the main driver loop (MDL).
// Change a employee's job into another company.
// Offer
//   salaryPerMonth 

function changeJobs(empIndex, offer, toCompany) {
    // fetch the offer data
    var newSalary = offer.salaryPerMonth
    var companyLeaver = emps[empIndex].company // save it!
  	emps[empIndex].company = toCompany
    emps[empIndex].sala = newSalary
    emps[empIndex].stintLengthMonths = 0
}

function fireEmployee(empIndex, fromCompany) {
    emps[empIndex].company = null
    emps[empIndex].sala = 0
    emps[empIndex].socialSecMonthsLeft = globalSocialSecurityPeriod_Months
    emps[empIndex].socialSecMoney = globalSocialSecurityPeriod_Money 
}


/* See the global employee record for fields and specifications */
function createEmployee(newName, cash) {
    var currE = {
        name: newName,
        cashAtHand: cash,
        sala: 0, 
        prod: 0,
        roundsInCorp: 0,
        isEmployed: false
    }
    return currE
}

function init_employees() {
		console.log('Initialized employees - mocked. Nothing done.')
}


/*
  Active people who are news-hungry, look around 
  to seeing what companies are doing. Vice versa
  with active companies, they update their 
  market knowledge to get a better view of the
  productivity of individual employees. */
function visibilityUpdate() {

}

/**
 * Basic REPL - the loop for driving simulation 
 */
function normal_round (specialities) {
	if (specialities == null) {
		// Ordinary round
		console.log('An ordinary round')
	} else {
        // TBD : handle the key-values in specialties and make code
        // that does the trick mentioned.
    }
	return true
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

function prettyMonth( months ) {
    if (months == 0) {
        return "the very first month being simulated!";
    }
    return "" + i + " months since stimulation (SIC!) began.";
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
    console.log('New Round! It is now ' + prettyMonth(i))
    MDL()
}
console.log('Stop')

// Final call. Let's see the results
showStatsOfSimulation()
