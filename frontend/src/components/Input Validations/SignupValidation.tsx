// Define a type for the field names
type FieldName = "name" | "email" | "password";

// Validate a single field
export const validateField = (name: FieldName, value: string): string | null => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const namePattern = /^[a-zA-Z\s]+$/;

  switch (name) {
    case "name":
      if (!value) return "Name should not be empty";
      if (!namePattern.test(value)) return "Name can only contain letters and spaces";
      if (value.trim().split(" ").length < 2) return "Please provide both first and last name";
      break;

    case "email":
      if (!value) return "Email should not be empty";
      if (!emailPattern.test(value)) return "Invalid email format";
      break;

    case "password":
      if (!value) return "Password should not be empty";
      if (!passwordPattern.test(value))
        return "Password must be at least 8 characters, include a digit, a lowercase, and an uppercase letter";
      break;

    default:
      break;
  }
  return null;
};

// Define type for form values
export type FormValues = {
  fullName?: string;
  email?: string;
  password?: string;
};

// Validates all fields at once when submitting
export const validateForm = (values: FormValues): Partial<Record<FieldName, string>> => {
  const errors: Partial<Record<FieldName, string>> = {};

  for (const [field, value] of Object.entries(values)) {
    if (value) {
      const error = validateField(field as FieldName, value);
      if (error) errors[field as FieldName] = error;
    } else {
      errors[field as FieldName] = `${field} is required`;
    }
  }

  return errors;
};

// Extract first name from full name
export const extractFirstName = (fullName: string | null | undefined): string | null => {
  if (!fullName) return null;
  return fullName.trim().split(" ")[0];
};
