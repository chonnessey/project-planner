const initState = {
  projects: [
    {id: '1', title: 'help me plan something', content: 'blah blah blah'},
    {id: '2', title: 'help me bake a cake', content: 'blah blah blah'},
    {id: '3', title: 'help me cook rice', content: 'blah blah blah'}
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project)
  }
  return state
}

export default projectReducer;