import {useEffect, useState, FormEvent} from 'react';

export function useForm<T>({
  initialValues,
  validate,
  onSubmit,
  formData,
  setFormData,
}: {
  initialValues: T;
  validate: (values: T) => any;
  onSubmit: (values: T) => void;
  formData?: T;
  setFormData?: any;
}) {
  const [touched, setTouchedFields] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  let [values, setValues] = useState(initialValues);
  if (formData) {
    values = formData;
  }

  if (setFormData) {
    setValues = setFormData;
  }

  useEffect(() => {
    validateValues(values);
  }, [values]);

  function handleChange(event: any) {
    const fieldName = event.target.getAttribute('name');
    const {value} = event.target;
    setValues({
      ...values,
      [fieldName]: value,
    });
  }

  function setPartialFormValues(partialValues: Partial<T>) {
    setValues({
      ...values,
      ...partialValues,
    });
  }

  function handleBlur(event: any) {
    const fieldName = event.target.getAttribute('name');
    setTouchedFields({
      ...touched,
      [fieldName]: true,
    });
  }

  function validateValues(values: T) {
    setErrors(validate(values));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();
    setIsSubmitting(true);
    try {
      await onSubmit(values);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  }

  // reset form
  function resetForm() {
    setValues(initialValues);
    setErrors({});
    setTouchedFields({});
  }

  return {
    values,
    errors,
    touched,
    handleBlur,
    setErrors,
    handleChange,
    handleSubmit,
    resetForm,
    setFormValues: setValues,
    setPartialFormValues,
    isSubmitting,
  };
}
