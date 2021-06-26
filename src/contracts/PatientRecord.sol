pragma solidity ^0.8.6;

contract PatientRecord {
    struct Patient {
        string name;
        uint256 age;
        string phonenumber;
        uint256 weight;
        string reason;
    }

    Patient[] pats;

    // Function to add
    // employee details
    function addPatient(
        string memory name,
        uint256 memory age,
        string memory phonenumber,
        uint256 memory weight,
        string memory reason,
    ) public {
        Patient memory e = Patient(name, age, phonenumber, weight, reason);
        pats.push(e);
    }

    // Function to get
    // details of employee
    function getPatient(string phonenumber, string name)
        public
        view
        returns (
            string memory,
            uint memory,
            uint memory
            string memory,
            string memory
        )
    {
        uint256 i;
        for (i = 0; i <= pats.length; i++) {
            Patient memory e = pats[i];

            // Looks for a matching
            // employee id
            if (e.phonenumber == phonenumber) {
                return (e.name, e.age, e.phonenumber, e.weight, e.reason);
            }
        }

        // If provided employee
        // id is not present
        // it returns Not
        // Found
        return ("Not Found", "Not Found", "Not Found");
    }
}
