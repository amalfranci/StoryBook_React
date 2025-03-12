import { useForm } from 'react-hook-form';


interface RegisterFormProps {
  defaultValues?: {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  };
}
export default function RegisterForm({ defaultValues }: RegisterFormProps) {
  const { register, handleSubmit, formState: { errors, isSubmitting }, watch, reset } = useForm({
    defaultValues // Pass default values here
  });
  const password = watch('password');

  // const onSubmit = async (data: FormData) => {

  //   console.log("Testing Data",data)
  //   // Simulate API call
  //   try {
  //     await new Promise(resolve => setTimeout(resolve, 2000));
  //     reset();
  //     alert('Registration successful!');
  //   } catch (error) {
  //     alert('Registration failed!');
  //   }
  // };

  // Add proper async submission handling
  const onSubmit = async (data: typeof defaultValues) => {
    console.log(data); // Use data to avoid unused variable warning
    try {
      // Simulate API call with proper async/await
      await new Promise(resolve => setTimeout(resolve, 100)); // Shorten delay for tests
      reset();
      alert('Registration successful!');
    } catch (error) {
      alert('Registration failed!');
    }
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          {...register('name', { required: 'Name is required' })}
          aria-invalid={!!errors.name}
        />
        {errors.name && <p role="alert">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
          })}
          aria-invalid={!!errors.email}
        />
        {errors.email && <p role="alert">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register('password', {
            required: 'Password required',
            minLength: { value: 8, message: 'Minimum 8 characters' }
          })}
          aria-invalid={!!errors.password}
        />
        {errors.password && <p role="alert">{errors.password.message}</p>}
      </div>

      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          {...register('confirmPassword', {
            validate: value => value === password || 'Passwords do not match'
          })}
          aria-invalid={!!errors.confirmPassword}
        />
        {errors.confirmPassword && <p role="alert">{errors.confirmPassword.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Registering...' : 'Register'}
      </button>
    </form>
  );
};
