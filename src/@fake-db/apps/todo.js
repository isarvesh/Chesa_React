import mock from '../mock'

const data = {
  tasks: [
    {
      id: 1,
      title: 'Complete the Payment.',
      dueDate: '2022-11-25',
      description:
        'Complete the Payment for the last pending transaction.',
      assignee: {
        fullName: 'Sameer',
        avatar: require('@src/assets/images/avatars/12.png').default
      },
      tags: ['update'],
      isCompleted: false,
      isDeleted: false,
      isImportant: false
    },
    {
      id: 2,
      title: 'Preparation for treatment .',
      dueDate: '2022-12-14',
      description:
        'Prepare for Patient(Sahil) treatment with requirements',
      assignee: {
        fullName: 'Pawan',
        avatar: ''
      },
      tags: ['team', 'medium'],
      isCompleted: true,
      isDeleted: false,
      isImportant: false
    },
    {
      id: 3,
      title: 'Meet Joseph and ask for payment',
      dueDate: '2022-11-25',
      description:
        'Ask for our last payment.',
      assignee: {
        fullName: 'Sanket',
        avatar: ''
      },
      tags: ['high'],
      isCompleted: true,
      isDeleted: true,
      isImportant: true
    },
    {
      id: 4,
      title: 'Answer the support request and close completed tickets. ',
      dueDate: '2022-11-20',
      description:
        'Manage and resolve the support',
      assignee: {
        fullName: 'Sanjay',
        avatar: require('@src/assets/images/avatars/9.png').default
      },
      tags: ['medium'],
      isCompleted: false,
      isDeleted: false,
      isImportant: true
    },
    {
      id: 5,
      title: 'Test functionality of apps developed by dev team for enhancements. ',
      dueDate: '2022-12-06',
      description:
        '',
      assignee: {
        fullName: 'James',
        avatar: require('@src/assets/images/avatars/9.png').default
      },
      tags: ['medium'],
      isCompleted: true,
      isDeleted: false,
      isImportant: true
    },
    {
      id: 6,
      title: 'Conduct a mini awareness meeting regarding health care. ',
      dueDate: '2022-12-06',
      description:
        'Try to complete it asap.',
      assignee: {
        fullName: 'Ratan',
        avatar: ''
      },
      tags: ['high', 'medium'],
      isCompleted: true,
      isDeleted: true,
      isImportant: false
    },
    {
      id: 7,
      title: 'Plan new design for Clinics. ',
      dueDate: '2022-12-05',
      description:
        '',
      assignee: {
        fullName: 'Anshika',
        avatar: require('@src/assets/images/avatars/1.png').default
      },
      tags: ['medium'],
      isCompleted: false,
      isDeleted: false,
      isImportant: true
    },
    {
      id: 8,
      title: 'Pick up Shweta from her school and drop at dance class😁 ',
      dueDate: '2022-12-08',
      description:
        '',
      assignee: {
        fullName: 'James',
        avatar: require('@src/assets/images/avatars/7.png').default
      },
      tags: ['low', 'medium'],
      isCompleted: false,
      isDeleted: false,
      isImportant: false
    },
    {
      id: 9,
      title: 'Finish documentation and make it live',
      dueDate: '2022-11-25',
      description:
        'Try to complete it ASAP.',
      assignee: {
        fullName: 'Angela',
        avatar: ''
      },
      tags: ['high', 'update'],
      isCompleted: false,
      isDeleted: true,
      isImportant: false
    },
    
    {
      id: 10,
      title: 'Reminder to mail clients for holidays',
      dueDate: '2022-12-09',
      description:
        'Send it today itself.',
      assignee: {
        fullName: 'Brian Barry',
        avatar: ''
      },
      tags: ['team'],
      isCompleted: false,
      isDeleted: false,
      isImportant: false
    },
    {
      id: 11,
      title: "ask quotation for our ecommerce website and admin project",
      dueDate: '2022-12-01',
      description:
        'The XYZ Companies quotation which was discussed at last friday.',
      assignee: {
        fullName: 'Joshua',
        avatar: require('@src/assets/images/avatars/5.png').default
      },
      tags: ['team'],
      isCompleted: false,
      isDeleted: false,
      isImportant: false
    },
    {
      id: 12,
      title: 'Send PPT with real-time reports',
      dueDate: '2022-11-29',
      description:
        '',
      assignee: {
        fullName: 'Paula ',
        avatar: require('@src/assets/images/avatars/5.png').default
      },
      tags: ['medium'],
      isCompleted: true,
      isDeleted: false,
      isImportant: true
    }
   
  ]
}

// ------------------------------------------------
// GET: Return Tasks
// ------------------------------------------------
mock.onGet('/apps/todo/tasks').reply(config => {
  // eslint-disable-next-line object-curly-newline
  const { q = '', filter, tag, sortBy: sortByParam = 'latest' } = config.params
  /* eslint-enable */
  // ------------------------------------------------
  // Get Sort by and Sort Direction
  // ------------------------------------------------
  let sortDesc = true

  const sortBy = (() => {
    if (sortByParam === 'title-asc') {
      sortDesc = false
      return 'title'
    }
    if (sortByParam === 'title-desc') return 'title'
    if (sortByParam === 'assignee') {
      sortDesc = false
      return 'assignee'
    }
    if (sortByParam === 'due-date') {
      sortDesc = false
      return 'dueDate'
    }
    return 'id'
  })()

  // ------------------------------------------------
  // Filtering
  // ------------------------------------------------
  const queryLowered = q.toLowerCase()

  const hasFilter = task => {
    if (filter === 'important') return task.isImportant && !task.isDeleted
    if (filter === 'completed') return task.isCompleted && !task.isDeleted
    if (filter === 'deleted') return task.isDeleted
    return !task.isDeleted
  }

  const includesFilter = task => task.tags.includes(queryLowered) || task.tags.some(tag => tag.includes(queryLowered))

  const includesDueDate = task => {
    const date = new Date(task.dueDate).getDate().toString().padStart(2, '0')
    const month = new Date(task.dueDate).toLocaleString('default', { month: 'short' }).toLowerCase()
    const dateMonth = `${date} ${month}`
    const monthDate = `${month} ${date}`

    return (
      date.includes(queryLowered) ||
      month.includes(queryLowered) ||
      dateMonth.includes(queryLowered) ||
      monthDate.includes(queryLowered)
    )
  }

  /* eslint-disable */
  const filteredData = data.tasks.filter(task => {
    if (filter || tag) {
      return (
        task.title.toLowerCase().includes(queryLowered) && hasFilter(task) && (tag ? task.tags.includes(tag) : true)
      )
    } else {
      return task.title.toLowerCase().includes(queryLowered) || includesFilter(task) || includesDueDate(task)
    }
  })
  /* eslint-enable  */

  // ------------------------------------------------
  // Perform sorting
  // ------------------------------------------------
  const sortTasks = key => (a, b) => {
    let fieldA
    let fieldB

    // If sorting is by dueDate => Convert data to date
    if (key === 'dueDate') {
      fieldA = new Date(a[key])
      fieldB = new Date(b[key])
      // eslint-disable-next-line brace-style
    }

    // If sorting is by assignee => Use `fullName` of assignee
    else if (key === 'assignee') {
      fieldA = a.assignee ? a.assignee.fullName : null
      fieldB = b.assignee ? b.assignee.fullName : null
    } else {
      fieldA = a[key]
      fieldB = b[key]
    }

    let comparison = 0

    if (fieldA === fieldB) {
      comparison = 0
    } else if (fieldA === null) {
      comparison = 1
    } else if (fieldB === null) {
      comparison = -1
    } else if (fieldA > fieldB) {
      comparison = 1
    } else if (fieldA < fieldB) {
      comparison = -1
    }

    return comparison
  }

  // Sort Data
  const sortedData = filteredData.sort(sortTasks(sortBy))
  if (sortDesc) sortedData.reverse()
  return [200, sortedData]
})

// ------------------------------------------------
// POST: Add new task
// ------------------------------------------------
mock.onPost('/apps/todo/add-tasks').reply(config => {
  // Get event from post data
  const { task } = JSON.parse(config.data)

  const { length } = data.tasks
  let lastIndex = 0
  if (length) {
    lastIndex = data.tasks[length - 1].id
  }
  task.id = lastIndex + 1

  data.tasks.push(task)

  return [201, { task }]
})

// ------------------------------------------------
// POST: Update Task
// ------------------------------------------------
mock.onPost('/apps/todo/update-task').reply(config => {
  const taskData = JSON.parse(config.data).task

  // Convert Id to number
  taskData.id = Number(taskData.id)

  const task = data.tasks.find(e => e.id === Number(taskData.id))
  Object.assign(task, taskData)

  return [200, { task }]
})

// ------------------------------------------------
// DELETE: Remove Task
// ------------------------------------------------
mock.onDelete('/apps/todo/delete-task').reply(config => {
  // Get task id from URL
  let taskId = config.taskId

  // Convert Id to number
  taskId = Number(taskId)

  const task = data.tasks.find(t => t.id === taskId)
  Object.assign(task, { isDeleted: true })
  return [200]
})
