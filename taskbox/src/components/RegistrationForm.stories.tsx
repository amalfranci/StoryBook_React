
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
// import { action } from '@storybook/addon-actions';
import RegisterForm from './formWithReact/RegisterForm';
// //  import  {RegisterForm} from "./formWithReact/RegisterForm"


// export default {
//   title: 'RegisterForm',
//   component: RegisterForm,
//   tags: ['autodocs'],
// };

// // Story 1: Default Form State
// export const Default = {
//   play: async ({ canvasElement }:{ canvasElement: HTMLElement }) => {
//     const canvas = within(canvasElement);
//     const submitButton = canvas.getByRole('button', { name: /register/i });
//     await expect(submitButton).toBeEnabled();
//   },
// };

// // Story 2: Show Validation Errors
// export const ValidationErrors = {
//   play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
//     const canvas = within(canvasElement);
//     const submitButton = canvas.getByRole('button', { name: /register/i });

//     await userEvent.click(submitButton);

//     // Verify error messages
//     await expect(canvas.getAllByRole('alert')).toHaveLength(3);
//     await expect(canvas.getByText('Name is required')).toBeInTheDocument();
//     await expect(canvas.getByText('Email is required')).toBeInTheDocument();
//     await expect(canvas.getByText('Password required')).toBeInTheDocument();
//   },
// };

// // Story 3: Submitting State
// export const Submitting = {
//   play: async ({ canvasElement }:{ canvasElement: HTMLElement }) => {
//     const canvas = within(canvasElement);

//     // First fill required fields
//     await userEvent.type(canvas.getByLabelText('Name'), 'Test User');
//     await userEvent.type(canvas.getByLabelText('Email'), 'test@example.com');
//     await userEvent.type(canvas.getByLabelText('Password'), 'password123');
//     await userEvent.type(canvas.getByLabelText('Confirm Password'), 'password123');

//     const submitButton = canvas.getByRole('button', { name: /register/i });

//     await userEvent.click(submitButton);

//     // Use waitFor to handle async state changes
//     await waitFor(() => {
//       expect(submitButton).toBeDisabled();
//       expect(submitButton.textContent).toBe('Registering...');
//     });
//   },
// };
// // Story 4: Password Mismatch Error
// export const PasswordMismatch = {
//   play: async ({ canvasElement }:{ canvasElement: HTMLElement }) => {
//     const canvas = within(canvasElement);

//     // Use the label text exactly as written
//     await userEvent.type(canvas.getByLabelText('Password'), 'password123');
//     await userEvent.type(canvas.getByLabelText('Confirm Password'), 'password123');

//     await userEvent.click(canvas.getByRole('button'));

//     await expect(canvas.getByText('Passwords do not match')).toBeInTheDocument();
//   },
// };

// // Story 5: Successful Submission
// export const Success = {
//   play: async ({ canvasElement } : { canvasElement: HTMLElement } ) => {
//     const canvas = within(canvasElement);

//     await userEvent.type(canvas.getByLabelText('Name'), 'John Doe');
//     await userEvent.type(canvas.getByLabelText('Email'), 'john@example.com');
//     await userEvent.type(canvas.getByLabelText('Password'), 'password123');
//     await userEvent.type(canvas.getByLabelText('Confirm Password'), 'password123');

//     const submitButton = canvas.getByRole('button', { name: /register/i });
//     await userEvent.click(submitButton);

//     await expect(submitButton).toBeDisabled();
//   },
// };




export default {
  title: 'RegisterForm',
  component: RegisterForm,
  tags: ['autodocs'],
  args: {
    // Default args for all stories
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }
};

// Story 1: Pre-filled Form
export const PrefilledForm = {
  args: {
    defaultValues: {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'initialPass123',
      confirmPassword: 'initialPass123'
    }
  }
};

// Story 2: Test Specific Password Case
export const ShortPassword = {
  args:{
    defaultValues:{
      "password": "1234",
      "confirmPassword": "1234"
    }
  },
  play:async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
    await expect(canvas.getByText('Minimum 8 characters')).toBeInTheDocument();
  }
};

// Story 3: Manual Data Entry Test
export const ManualEntryTest = {
  play: async ({ canvasElement }:{ canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    // Manually type specific test values
    await userEvent.type(canvas.getByLabelText('Name'), 'Test User', {
      delay: 10
    });
    await userEvent.type(canvas.getByLabelText('Email'), 'invalid-email', {
      delay: 10
    });

    await userEvent.click(canvas.getByRole('button'));

    await expect(canvas.getByText('Invalid email')).toBeInTheDocument();
  }
};

// Story 4: Edge Case Testing
export const LongInputs = {
  args: {
    defaultValues: {
      "name": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      "email": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@test.com",
      "password": "11111111111111111111111111111111111111111111111111",
      "confirmPassword": "11111111111111111111111111111111111111111111111111"
    }
  },
  play: async ({ canvasElement }:{ canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
    await expect(canvas.queryAllByRole('alert')).toHaveLength(0);
  }
};