import mock from '../mock'
/*eslint-disable */
const previousDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
const dayBeforePreviousDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000 * 2)

const data = {
  profileUser: {
    id: 11,
    avatar: require('@src/assets/images/portrait/small/avatar-s-11.jpg').default,
    fullName: 'Sam',
    role: 'admin',
    about:
      'An Dentist',
    status: 'online',
    settings: {
      isTwoStepAuthVerificationEnabled: true,
      isNotificationsOn: false
    }
  },
  contacts: [
    {
      id: 1,
      fullName: 'Shyla J',
      role: 'Dentist',
      about: 'Senior Dentist',

      avatar: require('@src/assets/images/portrait/small/avatar-s-2.jpg').default,
      status: 'offline'
    },
    {
      id: 2,
      fullName: 'Nachiket T',
      role: 'General Doctor',
      about:
        'A General Physician with great Experience',
      avatar: require('@src/assets/images/portrait/small/avatar-s-1.jpg').default,
      status: 'busy'
    },
    {
      id: 3,
      fullName: 'Joaquina',
      role: 'Receptionist',
      about:
        'A Receptionist',
      avatar: require('@src/assets/images/portrait/small/avatar-s-3.jpg').default,
      status: 'busy'
    }
  
  ],
  chats: [
    {
      id: 1,
      userId: 1,
      unseenMsgs: 0,
      chat: [
        {
          message: 'Hi',
          time: 'Mon Dec 10 2021 07:45:00 GMT+0000 (GMT)',
          senderId: 11
        },
        {
          message: 'Hello. How can I help You?',
          time: 'Mon Dec 11 2021 07:45:15 GMT+0000 (GMT)',
          senderId: 2
        },
        {
          message: 'Can I get details of my last transaction I made last month?',
          time: 'Mon Dec 11 2021 07:46:10 GMT+0000 (GMT)',
          senderId: 11
        },
        {
          message: 'We need to check if we can provide you such information.',
          time: 'Mon Dec 11 2021 07:45:15 GMT+0000 (GMT)',
          senderId: 2
        },
        {
          message: 'I will inform you as I get update on this.',
          time: 'Mon Dec 11 2021 07:46:15 GMT+0000 (GMT)',
          senderId: 2
        },
        {
          message: 'If it takes long you can mail me at my mail address.',
          time: dayBeforePreviousDay,
          senderId: 11
        }
      ]
    },
    {
      id: 2,
      userId: 2,
      unseenMsgs: 1,
      chat: [
       
        {
          message: 'Hey Sam, I am looking for the New Accessories?',
          time: 'Mon Dec 10 2021 07:45:23 GMT+0000 (GMT)',
          senderId: 1
        },
        {
          message: 'The Accessories which we purchase last week',
          time: 'Mon Dec 10 2021 07:45:55 GMT+0000 (GMT)',
          senderId: 1
        },
         {
          message: 'Is it there?, Where it is',
          time: 'Mon Dec 10 2021 07:45:55 GMT+0000 (GMT)',
          senderId: 1
        },
        {
          message: 'Absolutely!',
          time: 'Mon Dec 10 2021 07:46:00 GMT+0000 (GMT)',
          senderId: 11
        },
        {
          message: 'Inside Cupboard Number 5',
          time: 'Mon Dec 10 2021 07:46:05 GMT+0000 (GMT)',
          senderId: 11
        },
        
        {
          message: "Got It.",
          time: 'Mon Dec 10 2021 07:46:33 GMT+0000 (GMT)',
          senderId: 1
        },
        {
          message: 'Thanks!',
          time: 'Mon Dec 10 2021 07:46:43 GMT+0000 (GMT)',
          senderId: 1
        },
        {
          message: 'My Pleasure.',
          time: 'Mon Dec 10 2021 07:46:53 GMT+0000 (GMT)',
          senderId: 11
        },
        {
          message: '👍',
          time: previousDay,
          senderId: 1
        }
      ]
    }
  ]
}
/*eslint-enable */
// ------------------------------------------------
// GET: Return Chats Contacts and Contacts
// ------------------------------------------------
mock.onGet('/apps/chat/chats-and-contacts').reply(() => {
  const chatsContacts = data.chats.map(chat => {
    const contact = data.contacts.find(c => c.id === chat.userId)
    contact.chat = { id: chat.id, unseenMsgs: chat.unseenMsgs, lastMessage: chat.chat[chat.chat.length - 1] }
    return contact
  })
  const profileUserData = {
    id: data.profileUser.id,
    avatar: data.profileUser.avatar,
    fullName: data.profileUser.fullName,
    status: data.profileUser.status
  }
  return [200, { chatsContacts, contacts: data.contacts, profileUser: profileUserData }]
})

// ------------------------------------------------
// GET: Return User Profile
// ------------------------------------------------
mock.onGet('/apps/chat/users/profile-user').reply(() => [200, data.profileUser])

// ------------------------------------------------
// GET: Return Single Chat
// ------------------------------------------------
mock.onGet('/apps/chat/get-chat').reply(config => {
  // Get event id from URL

  let userId = config.id

  //  Convert Id to number
  userId = Number(userId)

  const chat = data.chats.find(c => c.id === userId)
  if (chat) chat.unseenMsgs = 0
  const contact = data.contacts.find(c => c.id === userId)
  if (contact.chat) contact.chat.unseenMsgs = 0
  return [200, { chat, contact }]
})

// ------------------------------------------------
// POST: Add new chat message
// ------------------------------------------------
mock.onPost('/apps/chat/send-msg').reply(config => {
  // Get event from post data
  const { obj } = JSON.parse(config.data)

  let activeChat = data.chats.find(chat => chat.userId === obj.contact.id)

  const newMessageData = {
    message: obj.message,
    time: new Date(),
    senderId: 11
  }
  // If there's new chat for user create one
  let isNewChat = false
  if (activeChat === undefined) {
    isNewChat = true

    // const lastId = data.chats[length - 1].id

    data.chats.push({
      id: obj.contact.id,
      userId: obj.contact.id,
      unseenMsgs: 0,
      chat: [newMessageData]
    })
    activeChat = data.chats[data.chats.length - 1]
  } else {
    activeChat.chat.push(newMessageData)
  }

  const response = { newMessageData, id: obj.contact.id }
  if (isNewChat) response.chat = activeChat

  return [201, { response }]
})
