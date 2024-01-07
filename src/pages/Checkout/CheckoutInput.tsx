type CheckoutInputProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  form: { lastName: string, firstName: string, email: string };
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

function CheckoutInput({ form, handleChange, handleSubmit }: CheckoutInputProps) {
  const { email, firstName, lastName } = form;

  return (
    <form
      onSubmit={ handleSubmit }
      className="flex flex-col gap-6 w-min justify-center"
    >
      <div className="flex gap-4">
        <div className="relative z-0 w-max">
          <input
            type="text"
            id="firstName"
            className="block pt-2.5 pb-1 px-0 w-full text-sm text-black bg-transparent
            border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer"
            placeholder=" "
            required
            onChange={ handleChange }
            value={ firstName }
            autoComplete="off"
          />
          <label
            htmlFor="firstName"
            className="label"
          >
            First Name
          </label>
        </div>
        <div className="relative z-0 w-max">
          <input
            type="text"
            id="lastName"
            className="block pt-2.5 pb-1 px-0 w-full text-sm text-black bg-transparent
            border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer"
            placeholder=" "
            required
            onChange={ handleChange }
            value={ lastName }
            autoComplete="off"
          />
          <label
            htmlFor="lastName"
            className="label"
          >
            Last Name
          </label>
        </div>
      </div>
      <div className="relative z-0 w-full">
        <input
          type="string"
          id="email"
          className="block pt-2.5 pb-1 px-0 w-full text-sm text-black bg-transparent
          border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer"
          placeholder=" "
          required
          onChange={ handleChange }
          value={ email }
          autoComplete="off"
        />
        <label
          htmlFor="email"
          className="label"
        >
          Email
        </label>
      </div>
      <button className="bg-blue_custom text-white p-2">
        Checkout
      </button>
    </form>
  );
}

export default CheckoutInput;
