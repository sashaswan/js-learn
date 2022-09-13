imgLink = [
    'https://dmrentalcar.ae/storage/catalogs/1-Lamborghini%20Urus%202021.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg/1200px-Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg'
]

class Goods {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    draw() {
        let div = document.createElement('div');

        let elem = document.createElement('p');
        elem.innerText = this.name;
        div.append(elem);

        let img = document.createElement('img');
        img.src = this.image;
        img.style.width = 500 + 'px';
        div.append(img);

        let amnt = document.createElement('p');
        amnt.innerHTML = this.amount;
        div.append(amnt);

        return div;
    }
}

class GoodsImg extends Goods {
    constructor(name, amount, image, sale) {
        super(name, amount);
        this.image = image;
        this.sale = 'Sale ' + sale;
    }
    draw() {
        let div = super.draw();
        let p = document.createElement('p');
        p.innerText = this.sale;
        div.append(p);
        return div;
    }
}

let goods2 = new GoodsImg('Lambo Urus', 50, `${imgLink[0]}`, true);
document.querySelector('.out-3').append(goods2.draw());

let goods3 = new GoodsImg('Lambo Veneno', 5, `${imgLink[1]}`, false);
document.querySelector('.out-4').append(goods3.draw());


class Valid {
	constructor(email, password,) {
		this.email = email;
		this.password = password;
		this.isValid = false;
	}
	validate() {
		if (this.password.length >= 6) {
			this.isValid = true;
		}
		else {
			this.isValid = false;
		}
		return this.isValid;
	}
}

let valid = new Valid('seem', '12345786');
valid.validate();
console.log(valid.isValid);

let invalid = new Valid('sam', '12345');
invalid.validate();
console.log(invalid.isValid);

class Valid2 extends Valid {
	constructor(email, password, emailError, passwordError) {
		super(email, password, emailError, passwordError);
		this.emailError = '';
		this.passwordError = '';
	}
	validate() {
        super.validate();
		super.validate();
		if (this.isValid == false) {
			this.passwordError = 'min length 6';
			return false;
		}
        if(this.email == 0) {
            this.isValid = false;
			this.emailError = 'email empty';
			return false;
        }
        return true;
	}
}

let emailValid = new Valid2('fhgjfjhgf', '7834634786');
emailValid.validate();
console.log(emailValid);

let emailInValid = new Valid2('fghjfghjf', '78435634786');
emailInValid.validate();
console.log(emailInValid);


