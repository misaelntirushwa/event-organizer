import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AvatarComponent } from './avatar.component';

export default {
  title: 'Design System/Avatar',
  component: AvatarComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
  argTypes: {
    label: { control: 'text' },
    icon: { control: 'text' },
    image: { control: 'text' },
  },
  parameters: {
    componentSubtitle: 'Displays an image, an icon or a label that represents a user or organization'
  }
} as Meta<AvatarComponent>;

const Template: Story<AvatarComponent> = (args: AvatarComponent) => ({
  component: AvatarComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
    label:  null,
    icon:  null,
    image:  null,
    size:  'regular',
    shape:  'circle',
    style:  {},
}

export const Label = Template.bind({});
Label.args = {
  ...Primary.args,
  label: 'MN'
}

export const Icon = Template.bind({});
Icon.args = {
  ...Primary.args,
  icon: 'fa fa-user-o'
}

export const Image = Template.bind({});
Image.args = {
  ...Primary.args,
  image: 'https://avatars2.githubusercontent.com/u/132554'
}