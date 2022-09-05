//Ex :  filter then map and send final name of ssspects to investigation team..
const data = [
  {
    name : "ali khan",
    present  : true,
    rooms : {
      kitchen : true,
      ballroom : false,
      library : false
    }
  },
  {
    name : "aqsa noor",
    present : false,
    rooms : {
      kitchen : false,
      ballroom : false,
      library : false
    }
  },
  {
    name : "ahmed noor",
    present : true,
    rooms : {
      kitchen : false,
      ballroom : true,
      library : false
    }
  },
  {
    name : "abiha tahir",
    present : true,
    rooms : {
      kitchen : false,
      ballroom : false,
      library : true
    }
  },
  {
    name : "salman ahmed",
    present : false,
    rooms : {
      kitchen : false,
      ballroom : false,
      library : false
    }
  },
]

let filterData  = data.filter(person => person.present)
let finalSuspectName = filterData.map(person => person.name)
