import "./style.css";

type Email = {
  from: string;
  header: string;
  content: string;
  emailAddress: string;
  img: string;
  read: boolean;
};

type State = {
  emails: Email[];
  selectedEmail: Email | null;
  filter: string;
};

const state: State = {
  emails: [
    {
      from: "Nico",
      header: "Link to today's video and slides is up!",
      content:
        "Link is up and you know where to find it! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.",
      emailAddress: "nico@email.com",
      img: "assets/nico.JPG",
      read: false,
    },
    {
      from: "Ed",
      header:
        "Congratulations! You have received a free beaver! Your name will now be displayed in the classroom's beaver list!",
      content:
        "Beaver Tea beaver beaver beaver beaver beaver beaver beaver ! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.",
      emailAddress: "ed@email.com",
      img: "assets/ed.JPG",
      read: false,
    },
    {
      from: "Government",
      header: "Time to pay your tax!",
      content:
        "Pay us now! Pay us now! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.",
      emailAddress: "government@email.com",
      img: "assets/gov.jpg",
      read: false,
    },
    // feel free to add more emails here
  ],
  selectedEmail: null,
  filter: "",
};

function selectEmail(email: Email) {
  email.read = true;
  state.selectedEmail = email;
}

function deselectEmail() {
  state.selectedEmail = null;
}

function renderEmailListItem(email: Email, ul: HTMLUListElement) {
  let li = document.createElement("li");
  li.className = email.read ? "emails-list__item read" : "emails-list__item";
  li.addEventListener("click", function () {
    selectEmail(email);
    render();
  });

  let readSpan = document.createElement("span");
  readSpan.className = "emails-list__item__read-icon material-symbols-outlined";
  readSpan.textContent = email.read ? "mark_email_read" : "mark_email_unread";

  let imgEL = document.createElement("img");
  imgEL.className = "emails-list__item__image";
  imgEL.src = email.img;

  let pForm = document.createElement("p");
  pForm.className = "emails-list__item__from";
  pForm.textContent = email.from;

  let pContent = document.createElement("p");
  pContent.className = "emails-list__item__content";
  pContent.textContent = email.header;

  li.append(readSpan, imgEL, pForm, pContent);

  ul.append(li);
}

function renderEmailList(emails: Email[] = []) {
  let main = document.querySelector("main");
  if (main === null) return;
  main.textContent = "";

  let h1El = document.createElement("h1");
  h1El.textContent = "Inbox";

  let ul = document.createElement("ul");
  ul.className = "emails-list";

  let emailsToLoop = [];
  if (emails.length > 0) {
    emailsToLoop = emails;
  } else {
    emailsToLoop = state.emails;
  }

  for (let email of emailsToLoop) {
    renderEmailListItem(email, ul);
  }

  main.append(h1El, ul);
}

function renderEmailDetails() {
  let main = document.querySelector("main");
  if (main === null) return;
  if (state.selectedEmail === null) return;
  main.textContent = "";

  let backButton = document.createElement("button");
  backButton.textContent = "BACK";
  backButton.addEventListener("click", function () {
    deselectEmail();
    render();
  });

  let h1 = document.createElement("h1");
  h1.textContent = state.selectedEmail.from;

  let img = document.createElement("img");
  img.className = "email-details__image";
  img.src = state.selectedEmail.img;

  let h2 = document.createElement("h2");
  h2.className = "email-details__header";
  h2.textContent = state.selectedEmail.header;

  let p = document.createElement("p");
  p.className = "email-details__content";
  p.textContent = state.selectedEmail.content;

  main.append(backButton, h1, img, h2, p);
}

function render() {
  if (state.selectedEmail) renderEmailDetails();
  else renderEmailList();
}

function getFilteredEmails() {
  return state.emails.filter((email) => {
    return (
      email.content.toLowerCase().includes(state.filter.toLowerCase()) ||
      email.from.toLowerCase().includes(state.filter.toLowerCase()) ||
      email.header.toLowerCase().includes(state.filter.toLowerCase())
    );
  });
  
}

function setUp(){
  let input = document.querySelector<HTMLInputElement>(".filter-input");
  if (input) {
    input.addEventListener("keyup", function () {
      if (input == null) return;

      state.filter = input.value;
      renderEmailList(getFilteredEmails());
    });
  }

}

setUp()
render();
