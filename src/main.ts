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
        "Beaver beaver beaver beaver beaver beaver beaver beaver ! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.",
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

function selectEmail(email:Email){
  email.read = true
  state.selectedEmail = email
}

function renderEmailListItem(email:Email, ul:HTMLUListElement) {
  let li = document.createElement('li')
  li.className = email.read ? 'emails-list__item read' : 'emails-list__item'
  li.addEventListener('click', function () {
    selectEmail(email)
    renderEmailList()
  })

  let readSpan = document.createElement('span')
  readSpan.className =  'emails-list__item__read-icon material-symbols-outlined'
  readSpan.textContent = email.read ?  'mark_email_read' : 'mark_email_unread'

  let imgEL = document.createElement('img')
  imgEL.className = 'emails-list__item__image'
  imgEL.src = email.img

  let pForm = document.createElement('p')
  pForm.className = 'emails-list__item__from'
  pForm.textContent = email.from

  let pContent = document.createElement('p')
  pContent.className = 'emails-list__item__content'
  pContent.textContent = email.header

  li.append(readSpan, imgEL, pForm, pContent)

  ul.append(li)

}


function renderEmailList() {
  let main = document.querySelector("main");
  if (main === null) return;
  main.textContent = "";

  let h1El = document.createElement("h1");
  h1El.textContent = "Inbox";

  let ul = document.createElement("ul");
  ul.className = "emails-list";

  for (let email of state.emails) {
    renderEmailListItem(email,ul)
  }

  main.append(h1El, ul);
}
