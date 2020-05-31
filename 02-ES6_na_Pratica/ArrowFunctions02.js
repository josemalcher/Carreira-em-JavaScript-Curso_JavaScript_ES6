/* ES 5 */

var jose = {
    name: 'jose',
    lastname: 'Malcher jr',
    fullName: function () {
        return this.name + " " + this.lastname;
    },
    showME5: function () {
        var contexto = this;
        setTimeout(function () {
            console.log(contexto.fullName());
        }, 2000);

    }
}
jose.showME5(); // jose Malcher jr

/* ES 6 */

let company = {
    name: 'JoseMalcher.net',
    lastname: 'TI',
    fullName(){
        return this.name + " " + this.lastname;
    },
    /*showME6(){
        setTimeout(()=>{
            console.log(this.fullName());
        }, 2000)
    }*/
    showME6(){
        setTimeout(() => console.log(this.fullName()), 2000);
    }
}
company.showME6(); // JoseMalcher.net TI