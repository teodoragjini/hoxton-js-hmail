import './style.css'

type Email = {
from: string;
header: string;
content: string;
emailAddress: string;
img: string;
read: boolean;
}

type State = Email[]



const state = {
  emails: [
    {
      from: 'Nico',
      header: "Link to today's video and slides is up!",
      content:
        'Link is up and you know where to find it! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.',
      emailAddress: 'nico@email.com',
      img: 'assets/nico.JPG',
      read: false
    },
    {
      from: 'Ed',
      header:
        "Congratulations! You have received a free beaver! Your name will now be displayed in the classroom's beaver list!",
      content:
        'Beaver beaver beaver beaver beaver beaver beaver beaver ! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.',
      emailAddress: 'ed@email.com',
      img: 'assets/ed.JPG',
      read: false
    },
    {
      from: 'Government',
      header: 'Time to pay your tax!',
      content:
        'Pay us now! Pay us now! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.',
      emailAddress: 'government@email.com',
      img: 'assets/gov.jpg',
      read: false
    }
    // feel free to add more emails here
  ]
}

function createEmail(){
  let ul = document.createElement('ul')
  ul.className = 'emails-list'

  ul.addEventListener('click', function () => {
    mainEl.textContent = '';
    item.read = true 
    textContent(item)
  })

  let li = document.createElement('li')
  li.className = 'emails-list__item'

  let span = document.createElement('span')
  span.className = 'emails-list__item__read-icon material-symbols-outlined'
  span.textContent = 'mark_email_unread'

  let img = document.createElement('img')
  


}
