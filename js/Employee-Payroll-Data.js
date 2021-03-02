class EmployeePayrollData {

    constructor(...params) {
        this.name = params[0];
        this.picture = params[1];
        this.gender = params[2];
        this.department = params[3];
        this.salary = params[4];
        this.startDate = params[5];
        this.notes = params[6];
    }

    get name() {
        return this._name;
    }
    set name(name) {
       this._name=name; 
    }

    get profilePic() {
        return this._picture;
    }
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }

    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = gender;
    }

    get department() {
        return this._department;
    }
    set department(department) {
        this._department = department;
    }

    get salary() {
        return this._salary;
    }
    set salary(salary) {
        this._salary = salary;
    }

    get note() {
        return this._notes;
    }
    set note(note) {
        this._note = note;
    }

    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        if(startDate.getMonth() <= (new Date()).getMonth()  && startDate.getDay() <= (new Date()).getDay() && startDate.getFullYear() <= (new Date()).getFullYear())
            this._startDate = startDate;
        else{ 
            throw "Invalid Start date ";
        }
}
//method
toString() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const empDate = !this.startDate ? "undefined" : this.startDate.toLocalDateString("en-US", options);
    return "id = "+this.id +", name=" + this.name + ", gender=" + this.gender + 
            ", profilePic=" + this.profilePic + ", department=" + this.department +
            ", salary=" + this.salary + ", startDate=" + empDate + ", notes=" + this._notes;
    }
}