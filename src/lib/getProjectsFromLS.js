export const getProjectsFromLS = () => {
  const savedProjects = localStorage.getItem('projects');
  return savedProjects ? JSON.parse(savedProjects) : [
    {
      title: 'Morning Routine',
      description: 'Start your day off right with a productive morning routine. This project includes tasks that help you wake up early, exercise, and prepare a healthy breakfast.',
      id: '21312341255151231',
      date: '2024-01-15',
      tasks: [
        {id: '12312390444441', description: 'Wake up at 6 AM'},
        {id: '12312390444442', description: '30 minutes of morning exercise'},
        {id: '12312390444443', description: 'Prepare a healthy breakfast'},
      ],
    },
    {
      title: 'Learn React',
      description: 'A step-by-step guide to mastering React.js. Follow this project to build your knowledge of modern web development and create dynamic user interfaces.',
      id: '213123412551512312312',
      date: '2024-02-12',
      tasks: [
        {id: '12312390444441', description: 'Complete React official tutorial'},
        {id: '12312390444442', description: 'Build a simple to-do app with React'},
        {id: '12312390444443', description: 'Learn about React hooks and state management'},
      ],
    },
    {
      title: 'Plan a Vacation',
      description: 'Dreaming of a getaway? This project helps you organize every detail of your next vacation, from booking flights to planning activities.',
      id: '213123412551512311255',
      date: '2024-03-21',
      tasks: [
        {id: '12312390444441', description: 'Research and book flights'},
        {id: '12312390444442', description: 'Find and reserve accommodation'},
        {id: '12312390444443', description: 'Create an itinerary of activities'},
      ],
    },
  ];
}