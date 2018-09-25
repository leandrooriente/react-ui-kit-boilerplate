const componentGenerator = {
  description: 'Create a new component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Component name?',
      default: 'Button',
    },
    {
      type: 'confirm',
      name: 'stateless',
      message: 'Is it a Stateless Component?',
      default: 'y',
    }
  ],
  actions: ({ stateless }) => {
    const actions = [
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/index.tsx',
        templateFile: './index.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/{{properCase name}}.tsx',
        templateFile: stateless ? './componentName.sfc.tsx.hbs' : './componentName.class.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/styled/Styled{{properCase name}}.tsx',
        templateFile: './componentName.styled.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/{{properCase name}}.test.tsx',
        templateFile: './componentName.test.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/{{properCase name}}.stories.tsx',
        templateFile: './componentName.story.tsx.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};

module.exports = plop => {
  plop.setGenerator('component', componentGenerator);
};