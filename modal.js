// console.log("MODAL.JS FONCTIONNE");

("use strict");

const getModal = document.getElementById("modalForm");

const launchModal = () => {
  // console.log("FOCUS to open modal");
  getModal.style.display = "flex";
  document.querySelector("#firstname").focus();
};

const closeModal = () => {
  // console.log("FOCUS to close modal");
  getModal.style.display = "none";
};

const keyPressModal = (e) => {
  // console.log(e);
  if (e.keyCode === 27) {
    closeModal();
    //after closing to come back to btn
    document.querySelector(".user__contactButton").focus();
  }
};

const checkInputs = () => {
  // console.log("%c checking form...", "color: green; font-weight:bold;");
  //INPUTS
  const form = document.getElementById("form");
  const formPrenom = form.firstname;
  const formNom = form.lastname;
  const formEmail = form.email;
  const formMessage = form.textArea;

  //INPUTS VALUE + TRIM
  const prenomValue = formPrenom.value.trim();
  const nomValue = formNom.value.trim();
  const mailValue = formEmail.value.trim();
  const textValue = formMessage.value.trim();

  //FONCTION ERROR
  const setErrorFor = (input, message) => {
    const formData = input.parentElement;
    const small = formData.querySelector("small");
    small.classList.remove("form__success");
    small.className = "form__error";
    small.innerText = message;
  };

  //FONCTION SUCCESS
  const setSuccessFor = (input, message) => {
    const formData = input.parentElement;
    const small = formData.querySelector("small");
    small.classList.remove("form__error");
    small.className = "form__success";
    // small.innerHTML = "&#9787;";
    // small.innerHTML = "&#9996;";
    // small.innerHTML = "&#9786;";
    small.innerHTML = "&#10004;";
  };

  //REGEX
  const isName = (name) => {
    return new RegExp(/^[A-Za-z]{2,20}$/).test(name);
  };
  const isMail = (mail) => {
    return new RegExp(/^[A-Za-z0-9-éàè.]+@[a-z.]+[a-z.]$/).test(mail);
  };

  const isText = (text) => {
    return new RegExp(/^.{7,150}$/).test(text);
  };

  //TEST PRENOM
  const isValidFirstName = () => {
    if (prenomValue === "") {
      setErrorFor(formPrenom, "le champ est vide");
      return false;
    } else if (!isName(prenomValue)) {
      setErrorFor(
        formPrenom,
        "Veuillez entrer 2 caractères ou plus pour le champ du nom."
      );
      return false;
    } else {
      setSuccessFor(formPrenom);
      console.log(prenomValue);
      return true;
    }
  };
  // isValidFirstName();
  // console.log("statut PRENOM", isValidFirstName());

  formPrenom.addEventListener("input", (e) => {
    e.stopPropagation();
    let etv = e.target.value;
    isName(etv)
      ? console.log(etv, "addeventlistener")
      : console.error(etv, "addeventlistener");
    isName(etv)
      ? setSuccessFor(formPrenom)
      : setErrorFor(
          formPrenom,
          "Veuillez entrer 2 caractères ou plus pour le champ du nom."
        );
  });

  //TEST NOM
  const isValidLastName = () => {
    if (nomValue === "") {
      setErrorFor(formNom, "le champ est vide");
      return false;
    } else if (!isName(nomValue)) {
      setErrorFor(
        formNom,
        "Veuillez entrer 2 caractères ou plus pour le champ du nom."
      );
      return false;
    } else {
      setSuccessFor(formNom);
      console.log(nomValue);
      return true;
    }
  };
  // isValidLastName();
  // console.log("statut NAME", isValidLastName());

  formNom.addEventListener("input", (e) => {
    e.stopPropagation();
    let etv = e.target.value;
    isName(etv)
      ? console.log(etv, "addeventlistener")
      : console.error(etv, "addeventlistener");
    isName(etv)
      ? setSuccessFor(formNom)
      : setErrorFor(
          formNom,
          "Veuillez entrer 2 caractères ou plus pour le champ du nom."
        );
  });

  //TEST MAIL
  const isValidMail = () => {
    if (mailValue === "") {
      setErrorFor(formEmail, "le champ est vide");
      return false;
    } else if (!isMail(mailValue)) {
      setErrorFor(formEmail, "mail non valide");
      return false;
    } else {
      setSuccessFor(formEmail);
      console.log(mailValue);
      return true;
    }
  };
  // isValidMail();
  // console.log("statut MAIL", isValidMail());

  formEmail.addEventListener("input", (e) => {
    e.stopPropagation();
    let etv = e.target.value;
    isMail(etv)
      ? console.log(etv, "addeventlistener")
      : console.error(etv, "addeventlistener");
    isMail(etv)
      ? setSuccessFor(formEmail)
      : setErrorFor(formEmail, "mail non valide");
  });
  //TEST TEXT-AREA
  const isValidTextArea = () => {
    if (textValue === "") {
      setErrorFor(formMessage, "le champ est vide");
      return false;
    } else if (!isText(textValue)) {
      setErrorFor(formMessage, "Votre message de 7 à 150 caractères");
      return false;
    } else {
      setSuccessFor(formMessage);
      return true;
    }
  };
  // isValidTextArea();
  // console.log("statut TEXTAREA", isValidTextArea());

  // écoute des événements sur cet élément et annule son comportement par défaut.
  formMessage.addEventListener("input", (e) => {
    e.stopPropagation();
    let etv = e.target.value;
    isText(etv)
      ? console.log(etv, "addeventlistener")
      : console.error(etv, "addeventlistener");
    isText(etv)
      ? setSuccessFor(formMessage)
      : setErrorFor(formMessage, "Votre message de 7 à 150 caractères");
  });

  const isValid = () => {
    if (
      isValidFirstName() &&
      isValidLastName() &&
      isValidMail() &&
      isValidTextArea()
    )
      return true;
    else {
      return false;
    }
  };

  isValid()
    ? console.warn(" ⎛𖦛𐃔𖦛⎞ statut form IS VALID ?", isValid())
    : (console.warn("NOT VALID FORM"),
      document.querySelector("#firstname").focus());

  //  form.reset()
};

export { launchModal, closeModal, keyPressModal, checkInputs };
