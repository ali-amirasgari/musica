import { Meta, StoryObj } from "@storybook/react";
import { ModeToggle } from "../ui/modeToggle";
import { ThemeProvider } from "next-themes";

const meta: Meta<typeof ModeToggle> = {
  title: "UI/ModeToggle",
  component: ModeToggle,
  decorators: [
    (Story) => (
      <div className="dark:bg-slate-950 bg-white p-20 rounded-md transition-colors duration-200">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ModeToggle>;


export const ModeTogglling: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
    darkMode: {
      current: "dark"
    }
  },
};