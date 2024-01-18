import { html, TemplateResult } from 'lit';
import '../src/runedle-app.js';

export default {
  title: 'RunedleApp',
  component: 'runedle-app',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({
  header,
  backgroundColor = 'white',
}: ArgTypes) => html`
  <runedle-app
    style="--runedle-app-background-color: ${backgroundColor}"
    .header=${header}
  ></runedle-app>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
