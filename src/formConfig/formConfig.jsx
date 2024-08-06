export const formStepConfig = [
  {
    step: 1,
    fields: [
      {
        name: "emailId",
        label: "Email:",
        type: "email",
        placeholder: "Enter your email",
      },
      {
        name: "password",
        label: "Password:",
        type: "password",
        placeholder: "Enter your password",
      },
    ],
  },
  {
    step: 2,
    fields: [
      {
        name: "firstName",
        label: "First name:",
        type: "text",
      },
      {
        name: "lastName",
        label: "Second name:",
        type: "text",
      },
      {
        name: "address",
        label: "Address:",
        type: "text",
      },
    ],
  },
  {
    step: 3,
    fields: [
      {
        name: "countryCode",
        label: "Country code:",
        type: "select",
        options: [
          { label: "Select Country code", value: "" },
          { label: "India (+91)", value: "+91" },
          { label: "America (+1)", value: "+1" },
        ],
        className:
          "pl-2 bg-none border-2 w-64 sm:w-80 rounded-lg h-11 placeholder:text-slate-300 placeholder:text-sm placeholder:sm:text-lg  text-slate-400 text-md sm:text-xl",
      },
      {
        name: "phoneNumber",
        label: "Phone number:",
        type: "telf",
      },
      {
        name: "acceptTermsAndCondition",
        label: "",
        type: "checkbox",
        text: (
          <p className="sm:text-md text-sm">
            I accept the <span className="text-blue-600">terms and conditions</span>
          </p>
        ),
      },
    ],
  },
];
