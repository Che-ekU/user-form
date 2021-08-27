let formHolder = document.getElementById('formHolder');

let fNameEl = document.getElementById("fName");
let fNameErrMsgEl = document.getElementById("fNameErrMsg");

let mNameEl = document.getElementById("mName");
let mNameErrMsgEl = document.getElementById("mNameErrMsg");

let lNameEl = document.getElementById("lName");
let lNameErrMsgEl = document.getElementById("lNameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let zipCode = document.getElementById("zipCode");
let zipErrMsg = document.getElementById("zipErrMsg");

let weight = document.getElementById("weight");
let weightErrMsg = document.getElementById("weightErrMsg");

let phone = document.getElementById("phone");
let phoneErrMsg = document.getElementById("phoneErrMsg");

let height = document.getElementById("height");
let heightErrMsg = document.getElementById("heightErrMsg");

let measure = document.getElementById("measure");

let street = document.getElementById('street');
let streetNameErrMsgEl = document.getElementById('streetNameErrMsgEl');

let countryStatusEl = document.getElementById("status");

let state = document.getElementById("state");

let myFormEl = document.getElementById("myForm");

let displayDetailsContainer = document.getElementById('displayDetailsContainer');

let detailsH = document.getElementById('detailsH');
let nameDisplay = document.getElementById('nameDisplay');
let adressDisplay = document.getElementById('adressDisplay');
let phoneDisplay = document.getElementById('phoneDisplay');
let emailDisplay = document.getElementById('emailDisplay');
let heightDisplay = document.getElementById('heightDisplay');
let weightDisplay = document.getElementById('weightDisplay');

let formData = {
    fName: "",
    mName: "",
    lName: "",
    email: "",
    street: '',
    statusEl: "US",
    state: 'California',
    phone: '',
    weight: '',
    height: '',
    measure: 'Ft',
    zipCode: ''
};

fNameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        fNameErrMsgEl.textContent = "Required*";
    } else {
        fNameErrMsgEl.textContent = "";
    }

    formData.fName = event.target.value;
});

mNameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        mNameErrMsgEl.textContent = "Required*";
    } else {
        mNameErrMsgEl.textContent = "";
    }

    formData.mName = event.target.value;
});

lNameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        lNameErrMsgEl.textContent = "Required*";
    } else {
        lNameErrMsgEl.textContent = "";
    }

    formData.lName = event.target.value;
});

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }

    formData.email = event.target.value;
});

street.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        streetNameErrMsgEl.textContent = "Required*";
    } else {
        streetNameErrMsgEl.textContent = "";
    }

    formData.street = event.target.value;
});

zipCode.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        zipErrMsg.textContent = "Required*";
    } else {
        zipErrMsg.textContent = "";
    }

    formData.zipCode = event.target.value;
});

phone.addEventListener("blur", function(event) {
    if (event.target.value === '') {
        phoneErrMsg.textContent = "Required : 10 digit Number*";
    } else {
        phoneErrMsg.textContent = "";
    }

    formData.phone = event.target.value;
});

weight.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        weightErrMsg.textContent = "Required*";
    } else {
        weightErrMsg.textContent = "";
    }

    formData.weight = event.target.value;
});

height.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        heightErrMsg.textContent = "Required*";
    } else {
        heightErrMsg.textContent = "";
    }

    formData.height = event.target.value;
});

countryStatusEl.addEventListener("change", function(event) {
    formData.statusEl = event.target.value;
});

measure.addEventListener("change", function(event) {
    formData.measure = event.target.value;
});

state.addEventListener("change", function(event) {
    formData.state = event.target.value;
});

function validateFormData(formData) {
    let {
        fName,
        lName,
        mName,
        email,
        zipCode,
        weight,
        height,
        measure,
        phone,
        street,
        state,
        statusEl
    } = formData;
    if (fName === "") {
        displayDetailsContainer.classList.add('d-none');
        fNameErrMsgEl.textContent = "Required*";
    }
    if (mName === "") {
        displayDetailsContainer.classList.add('d-none');
        mNameErrMsgEl.textContent = "Required*";
    }
    if (lName === "") {
        displayDetailsContainer.classList.add('d-none');
        lNameErrMsgEl.textContent = "Required*";
    }
    if (email === "") {
        displayDetailsContainer.classList.add('d-none');
        emailErrMsgEl.textContent = "Required*";
    }
    if (street === "") {
        displayDetailsContainer.classList.add('d-none');
        streetNameErrMsgEl.textContent = "Required*";
    }
    if (zipCode === "") {
        displayDetailsContainer.classList.add('d-none');
        zipErrMsg.textContent = "Required*";
    }
    if (weight === "") {
        displayDetailsContainer.classList.add('d-none');
        weightErrMsg.textContent = "Required*";
    }
    if (height === "") {
        displayDetailsContainer.classList.add('d-none');
        heightErrMsg.textContent = "Required*";
    }
    if (phone === "") {
        displayDetailsContainer.classList.add('d-none');
        phoneErrMsg.textContent = "Required : 10 digit Number*";
    } else {
        displayDetailsContainer.classList.remove('d-none');
    }

}

myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateFormData(formData);
    displayDetails(formData);
});

function displayDetails(formData) {
    detailsH.textContent = 'Check the details you entered';
    nameDisplay.textContent = 'Name : ' + formData.fName + ' ' + formData.mName + ' ' + formData.lName;
    adressDisplay.textContent = 'Address : ' + formData.street + ', ' + formData.state + '-' + formData.zipCode + ', ' + formData.statusEl;
    phoneDisplay.textContent = 'Phone : +1-' + formData.phone;
    emailDisplay.textContent = 'E-Mail : ' + formData.email;
    heightDisplay.textContent = 'Height : ' + formData.height + ' ' + formData.measure;
    weightDisplay.textContent = 'Weight : ' + formData.weight + ' Kgs';
}



















null;