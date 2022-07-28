function FiscalCode(personObject) {
    console.log(encodeSurName(personObject.surname) + encodeFirstNAme(personObject.name) + encodeDOB(personObject.dob, personObject.gender))
    return encodeSurName(personObject.surname) + encodeFirstNAme(personObject.name) + encodeDOB(personObject.dob, personObject.gender)
}

function encodeSurName(surname) {
    let arr = surname.toUpperCase().split('')
    let cons = []
    let vow = []
    let missing = "X"

   for (let e of arr) {
        if (e === 'A' || e === 'E' || e === "I" || e === 'O' || e === "U") {
            vow.push(e)
        }else{
            cons.push(e)
        }
    }
    const surName = [...cons, ...vow, missing]
    const EncodedSurname = surName.splice(0, 3).join('')
    return EncodedSurname
}


function encodeFirstNAme(fname) {
    let arr = fname.toUpperCase().split('')
    let cons = []
    let vow = []
    let missing = "X"

    for (let e of arr) {
        if (e === 'A' || e === 'E' || e === "I" || e === 'O' || e === "U") {
            vow.push(e)
        }else{
            cons.push(e)
        }
    }

    if (cons.length > 3) {
        cons = [cons[0], cons[2], cons[3]]
    }
    if (cons.length === 3) {
        cons = [cons[0], cons[1], cons[2]]
    }

    const firstName = [...cons, ...vow, missing]
    const EncodedFirstname = firstName.splice(0, 3).join('')
    return EncodedFirstname
}


function encodeDOB(dob, gender) {
    const months = {
        1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H",
        7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T"
    }

    let day
    let month
    let year

    day = dob.split('/')[0]
    month = dob.split('/')[1]
    year = dob.split('/')[2]

    const encodeYear = year.split('')[2] + year.split('')[3]
    const encodeMonth = months[month]
    let encodeDay

    if (gender === 'M' && day < 10) {
        encodeDay = 0 + day
    } else {
        encodeDay = day
    }

    if (gender === 'F') {
        encodeDay = 40 + parseInt(day)
    }
    const encodedDOB = encodeYear + encodeMonth + encodeDay

    return encodedDOB
}


FiscalCode({
    name: "Matt",
    surname: "Edabit",
    gender: "M",
    dob: "1/1/1900"
})
//➞ "DBTMTT00A01"

FiscalCode({
    name: "Helen",
    surname: "Yu",
    gender: "F",
    dob: "1/12/1950"
})

//➞ "YUXHLN50T41"

FiscalCode({
    name: "Mickey",
    surname: "Mouse",
    gender: "M",
    dob: "16/1/1928"
})
//➞ "MSOMKY28A16"


//Checking git pull




