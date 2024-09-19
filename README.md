# FormikForm Component

The `FormikForm` component is a React form built using Formik and Yup for form handling and validation. This component demonstrates how to manage form state, validation, and submission using these libraries.

## Features

- **Formik Integration**: Utilizes Formik for managing form state and handling form submissions.
- **Yup Validation**: Uses Yup to define and enforce validation rules.
- **Responsive Design**: Includes basic styles for layout and design.
- **Real-time Validation**: Displays validation errors as the user interacts with the form.

## Validation Rules

The form includes the following validation rules:

- **Name**: Required field.
- **Email**: Required field and must be a valid email address.
- **Password**: Must be "rishiME@199".
- **Confirm Password**: Must match the password field.

## Installation

To use the `FormikForm` component, you need to have `formik` and `yup` installed in your React project. You can install them using npm or yarn:

```bash
npm install formik yup
